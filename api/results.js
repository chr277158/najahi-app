// api/results.js
const sql = require('../lib/database');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-change-in-production';

// دالة للتحقق من التوكن
async function verifyToken(req) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    const token = authHeader.substring(7);
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

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
        const decoded = await verifyToken(req);
        if (!decoded) {
            return res.status(401).json({ 
                success: false, 
                message: 'غير مصرح' 
            });
        }

        const studentId = decoded.id;
        const { action } = req.query;

        // ===== حفظ نتيجة جديدة =====
        if (action === 'save' && req.method === 'POST') {
            const { subject, score, totalQuestions, percentage, timeSpent } = req.body;

            if (!subject || score === undefined || !totalQuestions || percentage === undefined) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'بيانات غير كاملة' 
                });
            }

            const result = await sql`
                INSERT INTO results (student_id, subject, score, total_questions, percentage, time_spent)
                VALUES (${studentId}, ${subject}, ${score}, ${totalQuestions}, ${percentage}, ${timeSpent || 0})
                RETURNING id, subject, score, total_questions, percentage, completed_at
            `;

            return res.status(201).json({
                success: true,
                message: 'تم حفظ النتيجة بنجاح',
                result: result[0]
            });
        }

        // ===== جلب كل نتائج التلميذ =====
        if (action === 'all' && req.method === 'GET') {
            const results = await sql`
                SELECT id, subject, score, total_questions, percentage, time_spent, completed_at
                FROM results
                WHERE student_id = ${studentId}
                ORDER BY completed_at DESC
            `;

            return res.status(200).json({
                success: true,
                results
            });
        }

        // ===== جلب إحصائيات التلميذ =====
        if (action === 'stats' && req.method === 'GET') {
            const stats = await sql`
                SELECT 
                    COUNT(*) as total_exams,
                    AVG(percentage) as average_percentage,
                    MAX(percentage) as best_percentage,
                    COUNT(CASE WHEN percentage >= 80 THEN 1 END) as excellent_count,
                    COUNT(CASE WHEN percentage >= 60 AND percentage < 80 THEN 1 END) as good_count,
                    COUNT(CASE WHEN percentage < 60 THEN 1 END) as needs_improvement_count
                FROM results
                WHERE student_id = ${studentId}
            `;

            const bySubject = await sql`
                SELECT 
                    subject,
                    COUNT(*) as exam_count,
                    AVG(percentage) as avg_percentage,
                    MAX(percentage) as best_percentage
                FROM results
                WHERE student_id = ${studentId}
                GROUP BY subject
                ORDER BY subject
            `;

            return res.status(200).json({
                success: true,
                stats: stats[0],
                bySubject
            });
        }

        // ===== جلب نتائج مادة معينة =====
        if (action === 'subject' && req.method === 'GET') {
            const { subject } = req.query;

            if (!subject) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'المادة مطلوبة' 
                });
            }

            const results = await sql`
                SELECT id, score, total_questions, percentage, time_spent, completed_at
                FROM results
                WHERE student_id = ${studentId} AND subject = ${subject}
                ORDER BY completed_at DESC
                LIMIT 10
            `;

            return res.status(200).json({
                success: true,
                results
            });
        }

        return res.status(400).json({ 
            success: false, 
            message: 'عملية غير صالحة' 
        });

    } catch (error) {
        console.error('Results Error:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'خطأ في الخادم',
            error: error.message 
        });
    }
};