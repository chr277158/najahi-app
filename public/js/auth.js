// public/js/auth.js

const API_BASE = '/api';

// ===== كائن Auth =====
const Auth = {
    // حفظ التوكن والبيانات
    saveAuth(token, student) {
        localStorage.setItem('token', token);
        localStorage.setItem('student', JSON.stringify(student));
    },

    // الحصول على التوكن
    getToken() {
        return localStorage.getItem('token');
    },

    // الحصول على بيانات التلميذ
    getStudent() {
        const data = localStorage.getItem('student');
        return data ? JSON.parse(data) : null;
    },

    // التحقق من تسجيل الدخول
    isLoggedIn() {
        return !!this.getToken();
    },

    // تسجيل الخروج
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('student');
        window.location.href = '/login.html';
    },

    // التحقق من التوكن مع الخادم
    async verify() {
        const token = this.getToken();
        if (!token) return false;

        try {
            const response = await fetch(`${API_BASE}/auth?action=verify`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();
            
            if (data.success) {
                this.saveAuth(token, data.student);
                return true;
            } else {
                this.logout();
                return false;
            }
        } catch (error) {
            console.error('Verify error:', error);
            return false;
        }
    },

    // تسجيل الدخول
    async login(username, password) {
        try {
            const response = await fetch(`${API_BASE}/auth?action=login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success) {
                this.saveAuth(data.token, data.student);
                return { success: true, student: data.student };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'خطأ في الاتصال' };
        }
    },

   // إنشاء حساب جديد
async register(username, password, fullName, level) {
    try {
        const response = await fetch(`${API_BASE}/auth?action=register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, fullName, level })
        });

        const data = await response.json();
        console.log('Registration response:', data); // ← إضافة هذه السطر للتحقق

        if (data.success) {
            this.saveAuth(data.token, data.student);
            return { success: true, student: data.student };
        } else {
            return { success: false, message: data.message };
        }
    } catch (error) {
        console.error('Register error:', error); // ← إضافة هذه السطر للتحقق
        return { success: false, message: 'خطأ في الاتصال' };
    }
}

// ===== كائن Results =====
const Results = {
    // حفظ نتيجة
    async save(subject, score, totalQuestions, percentage, timeSpent) {
        const token = Auth.getToken();
        if (!token) return { success: false, message: 'غير مصرح' };

        try {
            const response = await fetch(`${API_BASE}/results?action=save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    subject,
                    score,
                    totalQuestions,
                    percentage,
                    timeSpent
                })
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Save result error:', error);
            return { success: false, message: 'خطأ في الحفظ' };
        }
    },

    // جلب كل النتائج
    async getAll() {
        const token = Auth.getToken();
        if (!token) return { success: false, results: [] };

        try {
            const response = await fetch(`${API_BASE}/results?action=all`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Get results error:', error);
            return { success: false, results: [] };
        }
    },

    // جلب الإحصائيات
    async getStats() {
        const token = Auth.getToken();
        if (!token) return { success: false, stats: null };

        try {
            const response = await fetch(`${API_BASE}/results?action=stats`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Get stats error:', error);
            return { success: false, stats: null };
        }
    },

    // جلب نتائج مادة معينة
    async getBySubject(subject) {
        const token = Auth.getToken();
        if (!token) return { success: false, results: [] };

        try {
            const response = await fetch(`${API_BASE}/results?action=subject&subject=${subject}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Get subject results error:', error);
            return { success: false, results: [] };
        }
    }
};

// ===== دالة للتحقق من المصادقة في كل صفحة =====
async function requireAuth() {
    const isLoggedIn = await Auth.verify();
    if (!isLoggedIn) {
        window.location.href = '/login.html';
        return false;
    }
    return true;
}

// ===== دالة لعرض معلومات التلميذ في الهيدر =====
function displayStudentInfo() {
    const student = Auth.getStudent();
    if (!student) return;

    const studentInfo = document.getElementById('studentInfo');
    if (studentInfo) {
        studentInfo.innerHTML = `
            <span>مرحباً، ${student.fullName}</span>
            <button onclick="Auth.logout()" class="btn-logout">خروج</button>
        `;
    }
}