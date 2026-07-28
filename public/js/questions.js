// public/js/questions.js
// بنك الأسئلة الكامل - مستوحى من الامتحانات التونسية الرسمية (نسخة نظيفة وخالية من الأخطاء)

console.log('✅ questions.js loaded - بنك الأسئلة الرسمي');

function getQuestionsBySubject(subjectId) {
    console.log('🔍 Looking for subject:', subjectId);
    
    const allQuestions = {
        // ========== الحساب - السنة الثانية ابتدائي ==========
        'calcul_s2': [
            {
                id: 1,
                enonce: '🔢 ما هو العدد الذي يأتي بعد 45؟',
                choices: ['44', '46', '47', '50'],
                correct: 1,
                points: 1,
                level: 'مبتدئ',
                hint: 'أضف 1 إلى 45',
                feedback: { success: 'صحيح! بعد 45 يأتي 46', error: '45 + 1 = 46' }
            },
            {
                id: 2,
                enonce: '➕ احسب: 12 + 5 = ؟',
                choices: ['15', '16', '17', '18'],
                correct: 2,
                points: 1,
                level: 'مبتدئ',
                hint: 'أضف 5 إلى 12',
                feedback: { success: 'أحسنت! 12 + 5 = 17', error: '12 + 5 = 17' }
            },
            {
                id: 3,
                enonce: '📝 مع ليلى 12 تفاحة. أعطتها أمها 5 تفاحات أخرى. كم أصبح معها؟',
                choices: ['15', '16', '17', '18'],
                correct: 2,
                points: 2,
                level: 'متوسط',
                hint: 'استعمل الجمع: 12 + 5',
                feedback: { success: 'ممتاز! 12 + 5 = 17 تفاحة', error: '12 + 5 = 17 تفاحة' }
            }
        ],

        // ========== الحساب - السنة الثالثة ابتدائي ==========
        'calcul': [
            {
                id: 1,
                enonce: '🧠 احسب ذهنياً: 15 + 7 = ؟',
                choices: ['20', '21', '22', '23'],
                correct: 2,
                points: 1,
                level: 'مبتدئ',
                hint: 'ابدأ بجمع الآحاد: 5 + 7 = 12',
                feedback: { success: 'أحسنت! 15 + 7 = 22', error: 'تذكّر: 5 + 7 = 12، نكتب 2 ونحتفظ 1' }
            },
            {
                id: 2,
                enonce: '✖️ أكمل جدول الضرب: 6 × 7 = ؟',
                choices: ['40', '42', '44', '48'],
                correct: 1,
                points: 2,
                level: 'متوسط',
                hint: '6 مجموعات من 7',
                feedback: { success: 'ممتاز! 6 × 7 = 42', error: 'تذكّر جدول الضرب: 6 × 7 = 42' }
            },
            {
                id: 3,
                enonce: '📝 مع سارة 24 حلوى. أعطت لأخيها 8 حلوات. كم بقي معها؟',
                choices: ['14', '15', '16', '17'],
                correct: 2,
                points: 3,
                level: 'متقدم',
                hint: 'استعمل عملية الطرح: 24 - 8',
                feedback: { success: 'رائع! 24 - 8 = 16 حلوى', error: 'المعطيات: 24 حلوى، أعطت 8. العملية: 24 - 8 = 16' }
            }
        ],

        // ========== الرياضيات - السنة الرابعة ابتدائي ==========
        'maths_s4': [
            {
                id: 1,
                enonce: '🔢 كيف يُقرأ العدد 1,250؟',
                choices: ['مئة وخمسون', 'ألف ومئتان وخمسون', 'اثنا عشر ألفاً', 'ألف وخمسمئة'],
                correct: 1,
                points: 1,
                level: 'مبتدئ',
                hint: '1000 + 200 + 50',
                feedback: { success: 'صحيح! 1,250 = ألف ومئتان وخمسون', error: '1,250 = 1000 + 200 + 50' }
            },
            {
                id: 2,
                enonce: '➕ احسب: 1,245 + 2,378 = ؟',
                choices: ['3,523', '3,623', '3,723', '3,513'],
                correct: 1,
                points: 2,
                level: 'متوسط',
                hint: '5+8=13، نكتب 3 ونحتفظ 1',
                feedback: { success: 'أحسنت! 1,245 + 2,378 = 3,623', error: '5+8=13 (نكتب 3 ونحتفظ 1)...' }
            }
        ],

        // ========== الرياضيات - السنة الخامسة ابتدائي ==========
        'maths': [
            {
                id: 1,
                enonce: '🔢 حوّل الكسر ½ إلى عدد عشري',
                choices: ['0.2', '0.25', '0.5', '0.75'],
                correct: 2,
                points: 2,
                level: 'متوسط',
                hint: 'اقسم 1 على 2',
                feedback: { success: 'صحيح! ½ = 0.5', error: '½ = 1 ÷ 2 = 0.5' }
            },
            {
                id: 2,
                enonce: '📐 مستطيل طوله 8سم وعرضه 5سم. ما مساحته؟',
                choices: ['13 سم²', '26 سم²', '40 سم²', '45 سم²'],
                correct: 2,
                points: 3,
                level: 'متقدم',
                hint: 'المساحة = الطول × العرض',
                feedback: { success: 'ممتاز! المساحة = 8 × 5 = 40 سم²', error: 'مساحة المستطيل = 8 × 5 = 40 سم²' }
            }
        ],

        // ========== الإيقاظ العلمي - السنة الثانية ==========
        'eveil_s2': [
            {
                id: 1,
                enonce: '👁️ كم حسّاً للإنسان؟',
                choices: ['3', '4', '5', '6'],
                correct: 2,
                points: 1,
                level: 'مبتدئ',
                hint: 'النظر، السمع، اللمس، ...',
                feedback: { success: 'صحيح! للإنسان 5 حواس', error: 'الحواس الخمس: النظر، السمع، الشم، التذوق، اللمس' }
            }
        ],

        // ========== الإيقاظ العلمي - السنة الثالثة ==========
        'eveil': [
            {
                id: 1,
                enonce: '🔬 ما هو العضو الذي يساعدنا على التنفس؟',
                choices: ['القلب', 'الرئتان', 'المعدة', 'الدماغ'],
                correct: 1,
                points: 1,
                level: 'مبتدئ',
                hint: 'نحتاجه للحصول على الأكسجين',
                feedback: { success: 'صحيح! الرئتان هما عضوا التنفس', error: 'الرئتان هما العضو المسؤول عن التنفس' }
            }
        ],

        // ========== الإيقاظ العلمي - السنة الرابعة ==========
        'eveil_s4': [
            {
                id: 1,
                enonce: '🫀 ما هو العضو الذي يضخ الدم في الجسم؟',
                choices: ['الرئة', 'القلب', 'المعدة', 'الكبد'],
                correct: 1,
                points: 1,
                level: 'مبتدئ',
                hint: 'يعمل كمضخة',
                feedback: { success: 'صحيح! القلب يضخ الدم', error: 'القلب هو العضو الذي يضخ الدم في الجسم' }
            }
        ],

        // ========== القراءة - السنة الثالثة ==========
        'lecture': [
            {
                id: 1,
                enonce: '📖 ما هو ضد كلمة "كبير"؟',
                choices: ['طويل', 'صغير', 'عريض', 'قوي'],
                correct: 1,
                points: 1,
                level: 'مبتدئ',
                hint: 'فكّر في النقيض',
                feedback: { success: 'صحيح! ضد كبير هو صغير', error: 'ضد كلمة "كبير" هو "صغير"' }
            }
        ],

        // ========== الإنتاج الكتابي - السنة الثالثة ==========
        'production': [
            {
                id: 1,
                enonce: '✍️ أيّ جملة تصلح لبدء حكاية؟',
                choices: ['في النهاية عاد الجميع', 'ثم ذهبوا إلى البيت', 'في قديم الزمان، كان هناك أرنب صغير', 'بعد ذلك أكل الأرنب'],
                correct: 2,
                points: 2,
                level: 'متوسط',
                hint: 'بداية الحكاية تقدّم الشخصيات',
                feedback: { success: 'رائع! "في قديم الزمان..." بداية كلاسيكية', error: 'بداية الحكاية تقدم الزمان والمكان والشخصيات' }
            }
        ],

        // ========== التربية الإسلامية - السنة الثالثة ==========
        'islamique': [
            {
                id: 1,
                enonce: '🕌 كم عدد أركان الإسلام؟',
                choices: ['3', '4', '5', '6'],
                correct: 2,
                points: 1,
                level: 'مبتدئ',
                hint: 'الشهادتان، الصلاة، ...',
                feedback: { success: 'صحيح! أركان الإسلام 5', error: 'أركان الإسلام 5: الشهادتان، الصلاة، الزكاة، الصوم، الحج' }
            }
        ],

        // ========== التربية المدنية - السنة الثانية ==========
        'civique_s2': [
            {
                id: 1,
                enonce: '🇹🇳 ما هو علم تونس؟',
                choices: ['أخضر وأبيض', 'أحمر فيه هلال ونجمة بيضاء', 'أزرق وأصفر', 'أبيض وأسود'],
                correct: 1,
                points: 1,
                level: 'مبتدئ',
                hint: 'لون أحمر مع رمز أبيض',
                feedback: { success: 'صحيح! علم تونس أحمر فيه هلال ونجمة بيضاء', error: 'علم تونس أحمر اللون وفيه هلال ونجمة بيضاء' }
            }
        ],

        // ========== التربية المدنية - السنة الرابعة ==========
        'civique_s4': [
            {
                id: 1,
                enonce: '🇹🇳 ما هي عاصمة تونس؟',
                choices: ['صفاقس', 'سوسة', 'تونس', 'القيروان'],
                correct: 2,
                points: 1,
                level: 'مبتدئ',
                hint: 'تسمى بنفس اسم البلد',
                feedback: { success: 'صحيح! عاصمة تونس هي مدينة تونس', error: 'عاصمة تونس هي مدينة تونس' }
            }
        ],

        // ========== اللغة الفرنسية - السنة الخامسة ==========
        'french': [
            {
                id: 1,
                enonce: '🇫🇷 Quel est le féminin de "grand" ?',
                choices: ['grande', 'grands', 'grandes', 'grandee'],
                correct: 0,
                points: 1,
                level: 'مبتدئ',
                hint: 'On ajoute "e" au masculin',
                feedback: { success: 'Correct! Le féminin de "grand" est "grande"', error: 'Le féminin de "grand" est "grande"' }
            }
        ],

        // ========== اللغة الإنقليزية - السنة الخامسة ==========
        'english': [
            {
                id: 1,
                enonce: '📚 What is the English word for "كتاب"؟',
                choices: ['pen', 'book', 'table', 'chair'],
                correct: 1,
                points: 1,
                level: 'مبتدئ',
                hint: 'You read it',
                feedback: { success: 'Correct! Book = كتاب', error: 'Book means كتاب in Arabic' }
            }
        ]
    };
    
    const questions = allQuestions[subjectId];
    
    if (questions && questions.length > 0) {
        console.log(`✅ Found ${questions.length} questions for ${subjectId}`);
        return questions;
    } else {
        console.warn(`⚠️ No questions found for ${subjectId}, falling back to calcul`);
        return allQuestions['calcul'] || [];
    }
}

// جعل الدالة متاحة عالمياً
window.getQuestionsBySubject = getQuestionsBySubject;