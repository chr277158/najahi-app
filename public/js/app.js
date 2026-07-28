// public/js/app.js
// هذا الملف يحتوي على منطق التطبيق: اختيار المواد، التمارين، والنتائج

console.log('✅ app.js loaded successfully');

// ===== المتغيرات العامة =====
let studentData = {};
let currentQuestion = 0;
let score = 0;
let questions = [];
let answered = false;
let selectedAnswer = null;

// ===== عند تحميل أي صفحة =====
window.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Page loaded:', window.location.pathname);
    
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'choisir-matiere.html') {
        initSubjectsPage();
    } else if (currentPage === 'exercices.html') {
        initExercicePage();
    } else if (currentPage === 'resultats.html') {
        initResultPage();
    }
});

// ===== تهيئة صفحة اختيار المادة =====
function initSubjectsPage() {
    console.log('📚 Initializing subjects page...');
    
    // التحقق من تسجيل الدخول
    if (typeof requireAuth === 'function') {
        requireAuth().then(isLoggedIn => {
            if (!isLoggedIn) return;
            loadSubjects();
        });
    } else {
        // إذا لم يكن هناك نظام مصادقة، نستخدم localStorage
        const savedData = localStorage.getItem('student');
        if (savedData) {
            studentData = JSON.parse(savedData);
            loadSubjects();
        } else {
            window.location.href = '/login.html';
        }
    }
}

// ===== تحميل وعرض المواد =====
function loadSubjects() {
    const student = typeof Auth !== 'undefined' ? Auth.getStudent() : studentData;
    
    if (!student) {
        console.error('❌ No student data found');
        return;
    }
    
    console.log(' Student:', student);
    
    // عرض رسالة الترحيب
    const welcomeMsg = document.getElementById('welcomeMessage');
    if (welcomeMsg) {
        welcomeMsg.textContent = `أهلاً ${student.fullName}! اختر المادة التي تريد التدرب عليها:`;
    }
    
    // تعريف المواد حسب المستوى
    const subjects = getSubjectsByLevel(student.level);
    console.log('📋 Subjects:', subjects);
    
    // عرض المواد في الشبكة
    const grid = document.getElementById('subjectsGrid');
    if (!grid) {
        console.error('❌ subjectsGrid element not found!');
        return;
    }
    
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
            console.log('🎯 Subject clicked:', subject.id);
            startExercice(subject.id);
        });
        
        grid.appendChild(card);
    });
    
    console.log('✅ Subjects grid populated with', subjects.length, 'subjects');
}

// ===== الحصول على المواد حسب المستوى =====
function getSubjectsByLevel(level) {
    if (level === 3 || level === '3') {
        return [
            { id: 'calcul', name: 'الحساب', icon: '🧮', count: 30 },
            { id: 'eveil', name: 'الإيقاظ العلمي', icon: '🔬', count: 10 },
            { id: 'lecture', name: 'القراءة', icon: '📖', count: 8 },
            { id: 'production', name: 'الإنتاج الكتابي', icon: '✍️', count: 6 },
            { id: 'islamique', name: 'التربية الإسلامية', icon: '🕌', count: 5 }
        ];
    } else {
        return [
            { id: 'maths', name: 'الرياضيات', icon: '', count: 10 },
            { id: 'eveil', name: 'الإيقاظ العلمي', icon: '🔬', count: 10 },
            { id: 'lecture', name: 'القراءة', icon: '📖', count: 8 },
            { id: 'french', name: 'اللغة الفرنسية', icon: '🇫🇷', count: 6 },
            { id: 'english', name: 'اللغة الإنقليزية', icon: '🇬🇧', count: 6 }
        ];
    }
}

// ===== بدء التمرين =====
function startExercice(subjectId) {
    console.log('🚀 Starting exercice:', subjectId);
    localStorage.setItem('currentSubject', subjectId);
    window.location.href = '/exercices.html';
}

// ===== تهيئة صفحة التمارين =====
function initExercicePage() {
    console.log(' Initializing exercice page...');
    
    const subjectId = localStorage.getItem('currentSubject');
    console.log('🎯 Subject ID from localStorage:', subjectId);
    
    if (!subjectId) {
        console.error('❌ No subject selected, redirecting...');
        window.location.href = '/choisir-matiere.html';
        return;
    }
    
    // تحميل الأسئلة
    if (typeof getQuestionsBySubject === 'function') {
        questions = getQuestionsBySubject(subjectId);
        console.log('📚 Questions loaded:', questions.length, 'questions for', subjectId);
    } else {
        console.error('❌ getQuestionsBySubject function not found!');
        questions = [];
    }
    
    if (questions.length === 0) {
        alert('⚠️ لا توجد تمارين متاحة حالياً لهذه المادة');
        window.location.href = '/choisir-matiere.html';
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
        'english': '🇬 اللغة الإنقليزية'
    };
    
    const matiereName = document.getElementById('matiereName');
    if (matiereName) {
        matiereName.textContent = subjectNames[subjectId] || subjectId;
        console.log(' Displaying subject name:', subjectNames[subjectId]);
    }
    
    // إعادة تعيين المتغيرات
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    
    // عرض السؤال الأول
    displayQuestion();
}
//test connection
// ===== عرض السؤال =====
function displayQuestion() {
    console.log('📝 Displaying question', currentQuestion + 1, 'of', questions.length);
    
    if (currentQuestion >= questions.length) {
        console.log('✅ All questions answered, saving results...');
        saveResults();
        window.location.href = '/resultats.html';
        return;
    }
    
    const q = questions[currentQuestion];
    
    // تحديث العداد
    const counter = document.getElementById('questionCounter');
    if (counter) {
        counter.textContent = `السؤال ${currentQuestion + 1}/${questions.length}`;
    }
    
    // تحديث شريط التقدم
    const progress = ((currentQuestion) / questions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    
    // عرض نص السؤال
    const questionText = document.getElementById('questionText');
    if (questionText) {
        questionText.textContent = q.enonce;
    }
    
    // عرض الخيارات
    const answersSection = document.getElementById('answersSection');
    if (answersSection) {
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
    }
    
    // إعادة تعيين الحالة
    answered = false;
    selectedAnswer = null;
    
    const feedbackSection = document.getElementById('feedbackSection');
    if (feedbackSection) feedbackSection.style.display = 'none';
    
    const checkBtn = document.getElementById('checkBtn');
    if (checkBtn) checkBtn.style.display = 'inline-block';
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.style.display = 'none';
    
    const hintBtn = document.getElementById('hintBtn');
    if (hintBtn) hintBtn.style.display = 'inline-block';
}

// ===== اختيار إجابة =====
function selectAnswer(index) {
    if (answered) return;
    
    selectedAnswer = index;
    console.log('👆 Answer selected:', index);
    
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
    if (selectedAnswer === null || answered) {
        console.log('⚠️ No answer selected or already answered');
        return;
    }
    
    answered = true;
    const q = questions[currentQuestion];
    const isCorrect = selectedAnswer == q.correct;
    
    console.log('✅ Answer checked. Correct:', isCorrect);
    
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
    
    if (feedbackSection) feedbackSection.style.display = 'block';
    
    if (isCorrect) {
        score += q.points || 1;
        if (feedbackMessage) {
            feedbackMessage.textContent = '✅ أحسنت! إجابة صحيحة';
            feedbackMessage.className = 'feedback-message success';
        }
        if (feedbackExplanation) {
            feedbackExplanation.textContent = q.feedback ? q.feedback.success : '';
        }
    } else {
        if (feedbackMessage) {
            feedbackMessage.textContent = '❌ إجابة خاطئة';
            feedbackMessage.className = 'feedback-message error';
        }
        if (feedbackExplanation) {
            feedbackExplanation.textContent = q.feedback ? q.feedback.error : '';
        }
    }
    
    // تحديث النتيجة
    const scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
        scoreDisplay.textContent = `⭐ ${score}`;
    }
    
    // إظهار زر التالي
    const checkBtn = document.getElementById('checkBtn');
    if (checkBtn) checkBtn.style.display = 'none';
    
    const hintBtn = document.getElementById('hintBtn');
    if (hintBtn) hintBtn.style.display = 'none';
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.style.display = 'inline-block';
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
    if (q && q.hint) {
        alert('💡 تلميح: ' + q.hint);
    }
}

// ===== حفظ النتائج =====
async function saveResults() {
    const subjectId = localStorage.getItem('currentSubject');
    const totalPoints = questions.reduce((sum, q) => sum + (q.points || 1), 0);
    const percentage = Math.round((score / totalPoints) * 100);
    
    const results = {
        score: score,
        total: questions.length,
        percentage: percentage,
        subject: subjectId,
        date: new Date().toISOString()
    };
    
    localStorage.setItem('lastResults', JSON.stringify(results));
    console.log('💾 Results saved:', results);
    
    // حفظ في قاعدة البيانات إذا كان المستخدم مسجل دخول
    if (typeof Results !== 'undefined' && typeof Auth !== 'undefined' && Auth.isLoggedIn()) {
        try {
            await Results.save(subjectId, score, questions.length, percentage, 0);
            console.log('✅ Results saved to database');
        } catch (error) {
            console.error('❌ Error saving to database:', error);
        }
    }
}

// ===== تهيئة صفحة النتائج =====
function initResultPage() {
    console.log('🏆 Initializing results page...');
    
    const resultsStr = localStorage.getItem('lastResults');
    if (!resultsStr) {
        window.location.href = '/index.html';
        return;
    }
    
    const results = JSON.parse(resultsStr);
    console.log(' Results:', results);
    
    // عرض النتيجة
    const scorePercent = document.getElementById('scorePercent');
    if (scorePercent) scorePercent.textContent = results.percentage + '%';
    
    const scoreDetails = document.getElementById('scoreDetails');
    if (scoreDetails) {
        scoreDetails.textContent = `${results.score} من ${results.total} إجابات صحيحة`;
    }
    
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
    
    const resultIcon = document.getElementById('resultIcon');
    if (resultIcon) resultIcon.textContent = icon;
    
    const resultTitle = document.getElementById('resultTitle');
    if (resultTitle) resultTitle.textContent = title;
    
    const resultMessage = document.getElementById('resultMessage');
    if (resultMessage) resultMessage.textContent = message;
    
    const starsDisplay = document.getElementById('starsDisplay');
    if (starsDisplay) starsDisplay.textContent = stars;
}

// ===== إعادة التمرين =====
function retryExercice() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    window.location.href = '/exercices.html';
}