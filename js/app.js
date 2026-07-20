// ===== المتغيرات العامة =====
let studentData = {};
let currentQuestion = 0;
let score = 0;
let questions = [];
let answered = false;

// ===== عند تحميل الصفحة الرئيسية =====
window.addEventListener('DOMContentLoaded', function() {
    // التحقق من الصفحة الحالية
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        initHomePage();
    } else if (currentPage === 'choisir-matiere.html') {
        initSubjectsPage();
    } else if (currentPage === 'exercices.html') {
        initExercicePage();
    } else if (currentPage === 'resultats.html') {
        initResultPage();
    }
});

// ===== تهيئة الصفحة الرئيسية =====
function initHomePage() {
    const form = document.getElementById('studentForm');
    
    // تحميل البيانات المحفوظة
    const savedData = localStorage.getItem('studentData');
    if (savedData) {
        studentData = JSON.parse(savedData);
        document.getElementById('studentName').value = studentData.name || '';
        document.getElementById('studentLevel').value = studentData.level || '';
    }
    
    // عند إرسال النموذج
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // جمع البيانات
        studentData = {
            name: document.getElementById('studentName').value,
            level: document.getElementById('studentLevel').value,
            trimestre: document.getElementById('trimestre').value
        };
        
        // حفظ البيانات
        localStorage.setItem('studentData', JSON.stringify(studentData));
        
        // الانتقال لصفحة اختيار المادة
        window.location.href = 'choisir-matiere.html';
    });
}

// ===== تهيئة صفحة اختيار المادة =====
function initSubjectsPage() {
    // تحميل بيانات التلميذ
    const savedData = localStorage.getItem('studentData');
    if (!savedData) {
        window.location.href = 'index.html';
        return;
    }
    
    studentData = JSON.parse(savedData);
    
    // عرض رسالة الترحيب
    document.getElementById('welcomeMessage').textContent = 
        `أهلاً ${studentData.name}! اختر المادة التي تريد التدرب عليها:`;
    
    // تعريف المواد حسب المستوى
    const subjects = getSubjectsByLevel(studentData.level);
    
    // عرض المواد
    const grid = document.getElementById('subjectsGrid');
    grid.innerHTML = '';
    
    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <div class="subject-icon">${subject.icon}</div>
            <h3>${subject.name}</h3>
            <p>${subject.count} تمرين</p>
        `;
        
        card.addEventListener('click', function() {
            startExercice(subject.id);
        });
        
        grid.appendChild(card);
    });
}

// ===== الحصول على المواد حسب المستوى =====
function getSubjectsByLevel(level) {
    if (level === '3') {
        return [
            { id: 'calcul', name: 'الحساب', icon: '🧮', count: 15 },
            { id: 'eveil', name: 'الإيقاظ العلمي', icon: '🔬', count: 10 },
            { id: 'lecture', name: 'القراءة', icon: '📖', count: 8 },
            { id: 'production', name: 'الإنتاج الكتابي', icon: '✍️', count: 6 },
            { id: 'islamique', name: 'التربية الإسلامية', icon: '🕌', count: 5 }
        ];
    } else {
        return [
            { id: 'maths', name: 'الرياضيات', icon: '🧮', count: 20 },
            { id: 'eveil', name: 'الإيقاظ العلمي', icon: '🔬', count: 12 },
            { id: 'lecture', name: 'القراءة', icon: '📖', count: 10 },
            { id: 'french', name: 'اللغة الفرنسية', icon: '🇫🇷', count: 8 },
            { id: 'english', name: 'اللغة الإنقليزية', icon: '🇬🇧', count: 6 }
        ];
    }
}

// ===== بدء التمرين =====
function startExercice(subjectId) {
    // حفظ المادة المختارة
    localStorage.setItem('currentSubject', subjectId);
    
    // الانتقال لصفحة التمارين
    window.location.href = 'exercices.html';
}

// ===== تهيئة صفحة التمارين =====
function initExercicePage() {
    const subjectId = localStorage.getItem('currentSubject');
    if (!subjectId) {
        window.location.href = 'choisir-matiere.html';
        return;
    }
    
    // تحميل الأسئلة
    questions = getQuestionsBySubject(subjectId);
    
    if (questions.length === 0) {
        alert('لا توجد تمارين متاحة حالياً');
        window.location.href = 'choisir-matiere.html';
        return;
    }
    
    // عرض اسم المادة
    const subjectNames = {
        'calcul': '🧮 الحساب',
        'maths': '🧮 الرياضيات',
        'eveil': '🔬 الإيقاظ العلمي',
        'lecture': '📖 القراءة',
        'production': '✍️ الإنتاج الكتابي',
        'islamique': '🕌 التربية الإسلامية',
        'french': '🇫🇷 اللغة الفرنسية',
        'english': '🇬🇧 اللغة الإنقليزية'
    };
    
    document.getElementById('matiereName').textContent = subjectNames[subjectId];
    
    // عرض السؤال الأول
    displayQuestion();
}

// ===== عرض السؤال =====
function displayQuestion() {
    if (currentQuestion >= questions.length) {
        // الانتقال لصفحة النتائج
        saveResults();
        window.location.href = 'resultats.html';
        return;
    }
    
    const q = questions[currentQuestion];
    
    // تحديث العداد
    document.getElementById('questionCounter').textContent = 
        `السؤال ${currentQuestion + 1}/${questions.length}`;
    
    // تحديث شريط التقدم
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // عرض نص السؤال
    document.getElementById('questionText').textContent = q.enonce;
    
    // عرض الخيارات
    const answersSection = document.getElementById('answersSection');
    answersSection.innerHTML = '';
    
    if (q.choices) {
        q.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'answer-button';
            button.textContent = choice;
            button.onclick = () => selectAnswer(index);
            answersSection.appendChild(button);
        });
    }
    
    // إعادة تعيين الحالة
    answered = false;
    document.getElementById('feedbackSection').style.display = 'none';
    document.getElementById('checkBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('hintBtn').style.display = 'inline-block';
}

// ===== اختيار إجابة =====
let selectedAnswer = null;

function selectAnswer(index) {
    if (answered) return;
    
    selectedAnswer = index;
    
    // تمييز الإجابة المختارة
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) {
            btn.classList.add('selected');
        }
    });
}

// ===== التحقق من الإجابة =====
function checkAnswer() {
    if (selectedAnswer === null || answered) return;
    
    answered = true;
    const q = questions[currentQuestion];
    const isCorrect = selectedAnswer == q.correct;
    
    // تلوين الإجابات
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i == q.correct) {
            btn.classList.add('correct');
        } else if (i === selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // عرض التغذية الراجعة
    const feedbackSection = document.getElementById('feedbackSection');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const feedbackExplanation = document.getElementById('feedbackExplanation');
    
    feedbackSection.style.display = 'block';
    
    if (isCorrect) {
        score += q.points || 1;
        feedbackMessage.textContent = '✅ أحسنت! إجابة صحيحة';
        feedbackMessage.className = 'feedback-message success';
        feedbackExplanation.textContent = q.feedback.success;
    } else {
        feedbackMessage.textContent = '❌ إجابة خاطئة';
        feedbackMessage.className = 'feedback-message error';
        feedbackExplanation.textContent = q.feedback.error;
    }
    
    // تحديث النتيجة
    document.getElementById('scoreDisplay').textContent = `⭐ ${score}`;
    
    // إظهار زر التالي
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('hintBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
}

// ===== السؤال التالي =====
function nextQuestion() {
    currentQuestion++;
    selectedAnswer = null;
    displayQuestion();
}

// ===== إظهار التلميح =====
function showHint() {
    const q = questions[currentQuestion];
    if (q.hint) {
        alert('💡 تلميح: ' + q.hint);
    }
}

// ===== حفظ النتائج =====
function saveResults() {
    const results = {
        score: score,
        total: questions.length,
        percentage: Math.round((score / questions.reduce((sum, q) => sum + (q.points || 1), 0)) * 100),
        date: new Date().toISOString()
    };
    
    localStorage.setItem('lastResults', JSON.stringify(results));
}

// ===== تهيئة صفحة النتائج =====
function initResultPage() {
    const results = JSON.parse(localStorage.getItem('lastResults'));
    if (!results) {
        window.location.href = 'index.html';
        return;
    }
    
    // عرض النتيجة
    document.getElementById('scorePercent').textContent = results.percentage + '%';
    document.getElementById('scoreDetails').textContent = 
        `${results.score} من ${results.total} إجابات صحيحة`;
    
    // تحديد الرسالة والأيقونة حسب النتيجة
    let icon, title, message, stars;
    
    if (results.percentage >= 90) {
        icon = '🏆';
        title = 'ممتاز!';
        message = 'أنت بطل حقيقي! أداء رائع!';
        stars = '⭐⭐⭐';
    } else if (results.percentage >= 70) {
        icon = '👏';
        title = 'أحسنت!';
        message = 'أداء جيد جداً! واصل التميز!';
        stars = '⭐⭐';
    } else if (results.percentage >= 50) {
        icon = '💪';
        title = 'جيد!';
        message = 'أداء جيد! يمكنك التحسن أكثر!';
        stars = '⭐';
    } else {
        icon = '🌱';
        title = 'لا بأس!';
        message = 'التعلم يحتاج وقتاً. حاول مرة أخرى!';
        stars = '';
    }
    
    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('starsDisplay').textContent = stars;
}

// ===== إعادة التمرين =====
function retryExercice() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    window.location.href = 'exercices.html';
}