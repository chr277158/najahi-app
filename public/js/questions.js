// public/js/questions.js
// بنك الأسئلة الشامل - خالٍ من الأخطاء ومحدث لجميع المستويات

console.log('✅ questions.js loaded - بنك الأسئلة الرسمي');

function getQuestionsBySubject(subjectId) {
    console.log('🔍 Looking for subject:', subjectId);

    const allQuestions = {
        // ==========================================
        // السنة الثانية ابتدائي
        // ==========================================
        'calcul_s2': [
            { id: 1, enonce: '🔢 ما هو العدد الذي يأتي مباشرة قبل 50؟', choices: ['48', '49', '51', '60'], correct: 1, points: 1, level: 'مبتدئ', hint: 'اطرح 1 من 50', feedback: { success: 'صحيح! قبل 50 يأتي 49', error: '50 - 1 = 49' } },
            { id: 2, enonce: '🔢 كم عشراً وكم آحاداً في العدد 47؟', choices: ['4 آحاد و 7 عشرات', '4 عشرات و 7 آحاد', '47 عشراً', '7 عشرات و 4 آحاد'], correct: 1, points: 2, level: 'متوسط', hint: 'الرقم على اليسار هو العشرات', feedback: { success: 'ممتاز! 47 = 4 عشرات و 7 آحاد', error: 'في 47: الرقم 4 في خانة العشرات، و 7 في خانة الآحاد' } },
            { id: 3, enonce: '➕ احسب: 23 + 15 = ؟', choices: ['38', '37', '48', '28'], correct: 0, points: 1, level: 'مبتدئ', hint: 'اجمع الآحاد (3+5)، ثم العشرات (2+1)', feedback: { success: 'أحسنت! 23 + 15 = 38', error: '3+5=8 و 2+1=3، إذن الناتج 38' } },
            { id: 4, enonce: '➕ احسب: 28 + 14 = ؟', choices: ['32', '42', '41', '31'], correct: 1, points: 2, level: 'متوسط', hint: '8+4=12، نكتب 2 ونحتفظ بـ 1', feedback: { success: 'رائع! 28 + 14 = 42', error: '8+4=12 (نكتب 2 ونحتفظ 1)، 2+1+1=4' } },
            { id: 5, enonce: '➖ احسب: 45 - 20 = ؟', choices: ['15', '25', '35', '65'], correct: 1, points: 1, level: 'مبتدئ', hint: 'اطرح العشرات: 4-2=2، والآحاد: 5-0=5', feedback: { success: 'صحيح! 45 - 20 = 25', error: '45 - 20 = 25' } },
            { id: 6, enonce: '📐 كم ضلعاً للمثلث؟', choices: ['2', '3', '4', '5'], correct: 1, points: 1, level: 'مبتدئ', hint: 'اسم الشكل يدل على عدد أضلاعه', feedback: { success: 'صحيح! المثلث له 3 أضلاع', error: 'المثلث له 3 أضلاع و 3 زوايا' } }
        ],
        'eveil_s2': [
            { id: 1, enonce: '👁️ كم عدد الحواس عند الإنسان؟', choices: ['3', '4', '5', '6'], correct: 2, points: 1, level: 'مبتدئ', hint: 'النظر، السمع، الشم، التذوق، اللمس', feedback: { success: 'صحيح! لدينا 5 حواس', error: 'الحواس الخمس هي: النظر، السمع، الشم، التذوق، اللمس' } },
            { id: 2, enonce: '🌱 ماذا يحتاج النبات لينمو؟', choices: ['الماء والضوء والهواء', 'الظلام فقط', 'الحلوى', 'العصير'], correct: 0, points: 2, level: 'متوسط', hint: 'ثلاثة أشياء أساسية من الطبيعة', feedback: { success: 'صحيح! النبات يحتاج الماء والضوء والهواء', error: 'ينمو النبات بفضل الماء والضوء والهواء' } },
            { id: 3, enonce: '❄️ في أيّ فصل من فصول السنة يتساقط الثلج؟', choices: ['الصيف', 'الربيع', 'الخريف', 'الشتاء'], correct: 3, points: 1, level: 'مبتدئ', hint: 'هو الفصل البارد جداً', feedback: { success: 'ممتاز! الثلج يتساقط في الشتاء', error: 'فصل الشتاء هو الفصل البارد الذي يتساقط فيه الثلج' } }
        ],
        'lecture_s2': [
            { id: 1, enonce: '📖 ما هو عكس (ضد) كلمة "حار"؟', choices: ['ساخن', 'دافئ', 'بارد', 'جميل'], correct: 2, points: 1, level: 'مبتدئ', hint: 'نبحث عن النقيض', feedback: { success: 'صحيح! عكس حار هو بارد', error: 'عكس أو ضد كلمة "حار" هو "بارد"' } },
            { id: 2, enonce: '📚 ما هو جمع كلمة "قلم"؟', choices: ['قلمات', 'أقلام', 'قالمون', 'قلمين'], correct: 1, points: 1, level: 'مبتدئ', hint: 'جمع تكسير', feedback: { success: 'ممتاز! جمع قلم هو أقلام', error: 'جمع كلمة "قلم" هو "أقلام"' } }
        ],
        'production_s2': [
            { id: 1, enonce: '✍️ أيّ من هذه العبارات تصلح لبدء قصة؟', choices: ['وفي النهاية نام', 'كان يا ما كان في قديم الزمان', 'ثم ذهب إلى البيت', 'بعد ذلك أكل'], correct: 1, points: 2, level: 'متوسط', hint: 'عبارة تقليدية لبدء الحكايات', feedback: { success: 'رائع! "كان يا ما كان" بداية جميلة للقصة', error: 'تبدأ القصص عادة بعبارات مثل: كان يا ما كان' } }
        ],
        'civique_s2': [
            { id: 1, enonce: '🇹🇳 ما هو لون علم تونس؟', choices: ['أخضر وأبيض', 'أحمر وفي وسطه دائرة بيضاء فيها هلال ونجمة', 'أزرق وأصفر', 'أسود وأبيض'], correct: 1, points: 1, level: 'مبتدئ', hint: 'لون دم الشهداء مع رمز إسلامي أبيض', feedback: { success: 'صحيح! علم تونس أحمر وفيه هلال ونجمة بيضاء', error: 'علم الجمهورية التونسية أحمر اللون، وفي وسطه دائرة بيضاء' } },
            { id: 2, enonce: '🏫 أين نذهب كل يوم لنتعلم ونلعب مع أصدقائنا؟', choices: ['إلى السوق', 'إلى المدرسة', 'إلى المستشفى', 'إلى الغابة'], correct: 1, points: 1, level: 'مبتدئ', hint: 'مكان مخصص للتعليم', feedback: { success: 'ممتاز! نذهب إلى المدرسة', error: 'المدرسة هي المكان المخصص للتعلم واكتساب المعارف' } }
        ],

        // ==========================================
        // السنة الثالثة ابتدائي
        // ==========================================
        'calcul': [
            { id: 1, enonce: '🧠 احسب ذهنياً: 15 + 7 = ؟', choices: ['20', '21', '22', '23'], correct: 2, points: 1, level: 'مبتدئ', hint: 'ابدأ بجمع الآحاد: 5 + 7 = 12', feedback: { success: 'أحسنت! 15 + 7 = 22', error: 'تذكّر: 5 + 7 = 12، نكتب 2 ونحتفظ 1' } },
            { id: 2, enonce: '✖️ أكمل جدول الضرب: 6 × 7 = ؟', choices: ['40', '42', '44', '48'], correct: 1, points: 2, level: 'متوسط', hint: '6 مجموعات من 7', feedback: { success: 'ممتاز! 6 × 7 = 42', error: 'تذكّر جدول الضرب: 6 × 7 = 42' } },
            { id: 3, enonce: '📝 مع سارة 24 حلوى. أعطت لأخيها 8 حلوات. كم بقي معها؟', choices: ['14', '15', '16', '17'], correct: 2, points: 3, level: 'متقدم', hint: 'استعمل عملية الطرح: 24 - 8', feedback: { success: 'رائع! 24 - 8 = 16 حلوى', error: 'المعطيات: 24 حلوى، أعطت 8. العملية: 24 - 8 = 16' } }
        ],
        'eveil': [
            { id: 1, enonce: '🔬 ما هو العضو الذي يساعدنا على التنفس؟', choices: ['القلب', 'الرئتان', 'المعدة', 'الدماغ'], correct: 1, points: 1, level: 'مبتدئ', hint: 'نحتاجه للحصول على الأكسجين', feedback: { success: 'صحيح! الرئتان هما عضوا التنفس', error: 'الرئتان هما العضو المسؤول عن التنفس' } }
        ],
        'lecture': [
            { id: 1, enonce: '📖 ما هو ضد كلمة "كبير"؟', choices: ['طويل', 'صغير', 'عريض', 'قوي'], correct: 1, points: 1, level: 'مبتدئ', hint: 'فكّر في النقيض', feedback: { success: 'صحيح! ضد كبير هو صغير', error: 'ضد كلمة "كبير" هو "صغير"' } }
        ],
        'production': [
            { id: 1, enonce: '✍️ أيّ جملة تصلح لبدء حكاية؟', choices: ['في النهاية عاد الجميع', 'ثم ذهبوا إلى البيت', 'في قديم الزمان، كان هناك أرنب صغير', 'بعد ذلك أكل الأرنب'], correct: 2, points: 2, level: 'متوسط', hint: 'بداية الحكاية تقدّم الشخصيات', feedback: { success: 'رائع! "في قديم الزمان..." بداية كلاسيكية', error: 'بداية الحكاية تقدم الزمان والمكان والشخصيات' } }
        ],
        'islamique': [
            { id: 1, enonce: '🕌 كم عدد أركان الإسلام؟', choices: ['3', '4', '5', '6'], correct: 2, points: 1, level: 'مبتدئ', hint: 'الشهادتان، الصلاة، ...', feedback: { success: 'صحيح! أركان الإسلام 5', error: 'أركان الإسلام 5: الشهادتان، الصلاة، الزكاة، الصوم، الحج' } }
        ],

        // ==========================================
        // السنة الرابعة ابتدائي
        // ==========================================
        'maths_s4': [
            { id: 1, enonce: '🔢 كيف يُقرأ العدد 1,250؟', choices: ['مئة وخمسون', 'ألف ومئتان وخمسون', 'اثنا عشر ألفاً', 'ألف وخمسمئة'], correct: 1, points: 1, level: 'مبتدئ', hint: '1000 + 200 + 50', feedback: { success: 'صحيح! 1,250 = ألف ومئتان وخمسون', error: '1,250 = 1000 + 200 + 50' } },
            { id: 2, enonce: '➕ احسب: 1,245 + 2,378 = ؟', choices: ['3,523', '3,623', '3,723', '3,513'], correct: 1, points: 2, level: 'متوسط', hint: '5+8=13، نكتب 3 ونحتفظ 1', feedback: { success: 'أحسنت! 1,245 + 2,378 = 3,623', error: '5+8=13 (نكتب 3 ونحتفظ 1)...' } }
        ],
        'eveil_s4': [
            { id: 1, enonce: '🫀 ما هو العضو الذي يضخ الدم في الجسم؟', choices: ['الرئة', 'القلب', 'المعدة', 'الكبد'], correct: 1, points: 1, level: 'مبتدئ', hint: 'يعمل كمضخة', feedback: { success: 'صحيح! القلب يضخ الدم', error: 'القلب هو العضو الذي يضخ الدم في الجسم' } }
        ],
        'civique_s4': [
            { id: 1, enonce: '🇹🇳 ما هي عاصمة تونس؟', choices: ['صفاقس', 'سوسة', 'تونس', 'القيروان'], correct: 2, points: 1, level: 'مبتدئ', hint: 'تسمى بنفس اسم البلد', feedback: { success: 'صحيح! عاصمة تونس هي مدينة تونس', error: 'عاصمة تونس هي مدينة تونس' } }
        ],

        // ==========================================
        // السنة الخامسة ابتدائي
        // ==========================================
        'maths': [
            { id: 1, enonce: '🔢 حوّل الكسر ½ إلى عدد عشري', choices: ['0.2', '0.25', '0.5', '0.75'], correct: 2, points: 2, level: 'متوسط', hint: 'اقسم 1 على 2', feedback: { success: 'صحيح! ½ = 0.5', error: '½ = 1 ÷ 2 = 0.5' } },
            { id: 2, enonce: '📐 مستطيل طوله 8سم وعرضه 5سم. ما مساحته؟', choices: ['13 سم²', '26 سم²', '40 سم²', '45 سم²'], correct: 2, points: 3, level: 'متقدم', hint: 'المساحة = الطول × العرض', feedback: { success: 'ممتاز! المساحة = 8 × 5 = 40 سم²', error: 'مساحة المستطيل = 8 × 5 = 40 سم²' } }
        ],
        'french': [
            { id: 1, enonce: '🇫🇷 Quel est le féminin de "grand" ?', choices: ['grande', 'grands', 'grandes', 'grandee'], correct: 0, points: 1, level: 'مبتدئ', hint: 'On ajoute "e" au masculin', feedback: { success: 'Correct! Le féminin de "grand" est "grande"', error: 'Le féminin de "grand" est "grande"' } }
        ],
        'english': [
            { id: 1, enonce: '📚 What is the English word for "كتاب"؟', choices: ['pen', 'book', 'table', 'chair'], correct: 1, points: 1, level: 'مبتدئ', hint: 'You read it', feedback: { success: 'Correct! Book = كتاب', error: 'Book means كتاب in Arabic' } }
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