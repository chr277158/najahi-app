// api/auth.js
const sql = require('../lib/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-change-in-production';

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        // التحقق من الاتصال بقاعدة البيانات
        if (!sql) {
            console.error('❌ Database connection failed');
            return res.status(500).json({ 
                success: false, 
                message: 'خطأ في الاتصال بقاعدة البيانات' 
            });
        }

        const { action } = req.query;
        console.log('🔵 Action:', action, 'Method:', req.method);

        // ===== تسجيل حساب جديد =====
        if (action === 'register' && req.method === 'POST') {
            const { username, password, fullName, level } = req.body;

            console.log('📝 Register attempt:', { username, fullName, level });

            // التحقق من البيانات
            if (!username || !password || !fullName || !level) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'جميع الحقول مطلوبة' 
                });
            }

            // التحقق من وجود المستخدم
            const existingUser = await sql`
                SELECT id FROM students WHERE username = ${username}
            `;

            if (existingUser.length > 0) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'اسم المستخدم موجود مسبقاً' 
                });
            }

            // تشفير كلمة المرور
            const passwordHash = await bcrypt.hash(password, 10);

            // إنشاء المستخدم
            const result = await sql`
                INSERT INTO students (username, password_hash, full_name, level)
                VALUES (${username}, ${passwordHash}, ${fullName}, ${level})
                RETURNING id, username, full_name, level
            `;

            const student = result[0];
            console.log('✅ Student created:', student.id);

            // إنشاء JWT Token
            const token = jwt.sign(
                { id: student.id, username: student.username },
                JWT_SECRET,
                { expiresIn: '7d' }
            );

            return res.status(201).json({
                success: true,
                message: 'تم إنشاء الحساب بنجاح',
                token,
                student: {
                    id: student.id,
                    username: student.username,
                    fullName: student.full_name,
                    level: student.level
                }
            });
        }

        // ===== تسجيل الدخول =====
        if (action === 'login' && req.method === 'POST') {
            const { username, password } = req.body;

            console.log('🔐 Login attempt:', username);

            const result = await sql`
                SELECT id, username, password_hash, full_name, level 
                FROM students 
                WHERE username = ${username}
            `;

            if (result.length === 0) {
                return res.status(401).json({ 
                    success: false, 
                    message: 'اسم المستخدم أو كلمة المرور غير صحيحة' 
                });
            }

            const student = result[0];

            const validPassword = await bcrypt.compare(password, student.password_hash);

            if (!validPassword) {
                return res.status(401).json({ 
                    success: false, 
                    message: 'اسم المستخدم أو كلمة المرور غير صحيحة' 
                });
            }

            await sql`
                UPDATE students 
                SET last_login = CURRENT_TIMESTAMP 
                WHERE id = ${student.id}
            `;

            const token = jwt.sign(
                { id: student.id, username: student.username },
                JWT_SECRET,
                { expiresIn: '7d' }
            );

            return res.status(200).json({
                success: true,
                message: 'تم تسجيل الدخول بنجاح',
                token,
                student: {
                    id: student.id,
                    username: student.username,
                    fullName: student.full_name,
                    level: student.level
                }
            });
        }

        
        // === التحتقق من التوكن ===
        if (action === 'verify' && req.method === 'GET') {
            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json({ 
                    success: false, 
                    message: 'غير مصرح' 
                });
            }

            const token = authHeader.substring(7);

            try {
                const decoded = jwt.verify(token, JWT_SECRET);
                
                const result = await sql`
                    SELECT id, username, full_name, level 
                    FROM students 
                    WHERE id = ${decoded.id}
                `;

                if (result.length === 0) {
                    return res.status(404).json({ 
                        success: false, 
                        message: 'المستخدم غير موجود' 
                    });
                }

                const student = result[0];

                return res.status(200).json({
                    success: true,
                    student: {
                        id: student.id,
                        username: student.username,
                        fullName: student.full_name,
                        level: student.level
                    }
                });
            } catch (error) {
                return res.status(401).json({ 
                    success: false, 
                    message: 'التوكن غير صالح' 
                });
            }
        }

        return res.status(400).json({ 
            success: false, 
            message: 'عملية غير صالحة' 
        });

    } catch (error) {
        console.error('❌ Auth Error:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'خطأ في الخادم: ' + error.message,
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }


};