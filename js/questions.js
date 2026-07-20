// ===== بنك الأسئلة المستخرج من الامتحانات الرسمية =====
// المدرسة الابتدائية الخاصة المثالية (2010-2016)

function getQuestionsBySubject(subjectId) {
    const allQuestions = {
        
        // ========== الحساب - السنة الثالثة ==========
        // مستخرج من امتحانات الحساب الذهني والرياضيات
        'calcul': [
            
            // --- أسئلة الحساب الذهني (مستخرجة من امتحان 2015-2016) ---
            {
                id: 1,
                enonce: '🧠 حساب ذهني: 15 + 7 = ؟',
                choices: ['20', '21', '22', '23'],
                correct: 2,
                points: 1,
                hint: 'ابدأ بجمع الآحاد: 5 + 7 = 12',
                feedback: {
                    success: 'أحسنت! 15 + 7 = 22',
                    error: 'تذكّر: 5 + 7 = 12، نكتب 2 ونحتفظ 1، ثم 1 + 1 = 2'
                }
            },
            {
                id: 2,
                enonce: '🧠 حساب ذهني: 30 + 40 = ؟',
                choices: ['60', '70', '80', '90'],
                correct: 1,
                points: 1,
                hint: '3 عشرات + 4 عشرات',
                feedback: {
                    success: 'ممتاز! 30 + 40 = 70',
                    error: '3 عشرات + 4 عشرات = 7 عشرات = 70'
                }
            },
            {
                id: 3,
                enonce: '🧠 حساب ذهني: 50 - 20 = ؟',
                choices: ['20', '30', '40', '70'],
                correct: 1,
                points: 1,
                hint: '5 عشرات - 2 عشرات',
                feedback: {
                    success: 'رائع! 50 - 20 = 30',
                    error: '5 عشرات - 2 عشرات = 3 عشرات = 30'
                }
            },
            {
                id: 4,
                enonce: '🧠 حساب ذهني: 6 + 8 = ؟',
                choices: ['12', '13', '14', '15'],
                correct: 2,
                points: 1,
                hint: '6 + 4 = 10، ثم 10 + 4',
                feedback: {
                    success: 'صحيح! 6 + 8 = 14',
                    error: '6 + 8 = 14 (6 + 4 + 4)'
                }
            },
            {
                id: 5,
                enonce: '🧠 حساب ذهني: 100 - 30 = ؟',
                choices: ['60', '70', '80', '130'],
                correct: 1,
                points: 1,
                hint: '10 عشرات - 3 عشرات',
                feedback: {
                    success: 'ممتاز! 100 - 30 = 70',
                    error: '100 - 30 = 70'
                }
            },
            
            // --- أسئلة العمليات (مستخرجة من امتحان 2011-2012) ---
            {
                id: 6,
                enonce: '🔢 أنجز العملية: 347 + 258 = ؟',
                choices: ['505', '595', '605', '615'],
                correct: 2,
                points: 2,
                hint: 'ابدأ بجمع الآحاد: 7 + 8 = 15',
                feedback: {
                    success: 'أحسنت! 347 + 258 = 605',
                    error: '7+8=15 (نكتب 5 ونحتفظ 1)، 4+5+1=10 (نكتب 0 ونحتفظ 1)، 3+2+1=6'
                }
            },
            {
                id: 7,
                enonce: '🔢 أنجز العملية: 485 - 237 = ؟',
                choices: ['248', '258', '238', '228'],
                correct: 0,
                points: 2,
                hint: 'اطرح الآحاد أولاً: 5 - 7 (استلف)',
                feedback: {
                    success: 'ممتاز! 485 - 237 = 248',
                    error: '5-7 (استلف 10) → 15-7=8، 7-3=4، 4-2=2'
                }
            },
            {
                id: 8,
                enonce: '🔢 أنجز العملية: 125 × 3 = ؟',
                choices: ['325', '355', '375', '395'],
                correct: 2,
                points: 2,
                hint: 'اضرب كل رقم في 3',
                feedback: {
                    success: 'رائع! 125 × 3 = 375',
                    error: '5×3=15 (نكتب 5 ونحتفظ 1)، 2×3+1=7، 1×3=3'
                }
            },
            
            // --- أسئلة جداول الضرب (مستخرجة من امتحان 2010-2011) ---
            {
                id: 9,
                enonce: '✖️ أكمل جدول الضرب: 6 × 7 = ؟',
                choices: ['40', '42', '44', '48'],
                correct: 1,
                points: 2,
                hint: '6 مجموعات من 7',
                feedback: {
                    success: 'ممتاز! 6 × 7 = 42',
                    error: 'تذكّر جدول الضرب: 6 × 7 = 42'
                }
            },
            {
                id: 10,
                enonce: '✖️ أكمل جدول الضرب: 8 × 5 = ؟',
                choices: ['35', '40', '45', '50'],
                correct: 1,
                points: 2,
                hint: '8 مجموعات من 5',
                feedback: {
                    success: 'صحيح! 8 × 5 = 40',
                    error: 'تذكّر: 8 × 5 = 40'
                }
            },
            {
                id: 11,
                enonce: '✖️ أكمل جدول الضرب: 9 × 4 = ؟',
                choices: ['32', '34', '36', '38'],
                correct: 2,
                points: 2,
                hint: '9 × 4 = (10 × 4) - 4',
                feedback: {
                    success: 'رائع! 9 × 4 = 36',
                    error: '9 × 4 = 40 - 4 = 36'
                }
            },
            
            // --- أسئلة القياس (مستخرجة من امتحان 2015-2016) ---
            {
                id: 12,
                enonce: '📏 حوّل: 2م 35سم = ...... سم',
                choices: ['205 سم', '235 سم', '253 سم', '352 سم'],
                correct: 1,
                points: 2,
                hint: '1م = 100سم',
                feedback: {
                    success: 'أحسنت! 2م = 200سم، إذن 200 + 35 = 235سم',
                    error: '2م = 200سم، 200 + 35 = 235سم'
                }
            },
            {
                id: 13,
                enonce: '📏 حوّل: 3كغ = ...... غ',
                choices: ['30 غ', '300 غ', '3000 غ', '30000 غ'],
                correct: 2,
                points: 2,
                hint: '1كغ = 1000غ',
                feedback: {
                    success: 'ممتاز! 3كغ = 3000غ',
                    error: '1كغ = 1000غ، إذن 3كغ = 3000غ'
                }
            },
            {
                id: 14,
                enonce: '📏 حوّل: 1ل 25سل = ...... سل',
                choices: ['125 سل', '150 سل', '1025 سل', '250 سل'],
                correct: 0,
                points: 2,
                hint: '1ل = 100سل',
                feedback: {
                    success: 'صحيح! 1ل = 100سل، إذن 100 + 25 = 125سل',
                    error: '1ل = 100سل، 100 + 25 = 125سل'
                }
            },
            
            // --- أسئلة مقارنة الأعداد (مستخرجة من امتحان 2015-2016) ---
            {
                id: 15,
                enonce: '🔢 رتّب الأعداد من الأصغر إلى الأكبر: 456 - 465 - 654',
                choices: ['456, 465, 654', '654, 465, 456', '465, 456, 654', '456, 654, 465'],
                correct: 0,
                points: 2,
                hint: 'قارن رقم المئات أولاً',
                feedback: {
                    success: 'ممتاز! 456 < 465 < 654',
                    error: '456 (4 مئات) < 465 (4 مئات و6 عشرات) < 654 (6 مئات)'
                }
            },
            {
                id: 16,
                enonce: '🔢 أيّ علامة تضع بين: 789 ... 798',
                choices: ['<', '>', '=', 'لا شيء'],
                correct: 0,
                points: 2,
                hint: 'قارن رقم العشرات',
                feedback: {
                    success: 'صحيح! 789 < 798',
                    error: 'المئات متساوية، لكن 8 عشرات < 9 عشرات'
                }
            },
            
            // --- مسائل (مستخرجة من امتحانات 2010-2012) ---
            {
                id: 17,
                enonce: '📝 مع سارة 24 حلوى. أعطت لأخيها 8 حلوات. كم بقي معها؟',
                choices: ['14', '15', '16', '17'],
                correct: 2,
                points: 3,
                hint: 'استعمل عملية الطرح: 24 - 8',
                feedback: {
                    success: 'رائع! 24 - 8 = 16 حلوى',
                    error: 'المعطيات: 24 حلوى، أعطت 8. العملية: 24 - 8 = 16'
                }
            },
            {
                id: 18,
                enonce: '📝 اشترى أحمد دفتراً بـ 850 مليم وقلماً بـ 350 مليم. كم دفع؟',
                choices: ['1100 م', '1150 م', '1200 م', '1250 م'],
                correct: 2,
                points: 3,
                hint: 'استعمل عملية الجمع: 850 + 350',
                feedback: {
                    success: 'ممتاز! 850 + 350 = 1200 مليم',
                    error: '850 + 350 = 1200 مليم'
                }
            },
            {
                id: 19,
                enonce: '📝 مع محمد 5000 مليم. اشترى كتاباً بـ 1500 مليم. كم بقي معه؟',
                choices: ['2500 م', '3000 م', '3500 م', '4500 م'],
                correct: 2,
                points: 3,
                hint: 'استعمل الطرح: 5000 - 1500',
                feedback: {
                    success: 'أحسنت! 5000 - 1500 = 3500 مليم',
                    error: '5000 - 1500 = 3500 مليم'
                }
            },
            {
                id: 20,
                enonce: '📝 في سلة 48 تفاحة. وزّعها أحمد على 6 أطفال بالتساوي. كم يأخذ كل طفل؟',
                choices: ['6', '7', '8', '9'],
                correct: 2,
                points: 3,
                hint: 'استعمل القسمة: 48 ÷ 6',
                feedback: {
                    success: 'رائع! 48 ÷ 6 = 8 تفاحات',
                    error: '48 ÷ 6 = 8 (لأن 6 × 8 = 48)'
                }
            },
            
            // --- أسئلة الهندسة والرسوم البيانية (مستخرجة من امتحان 2010-2011) ---
            {
                id: 21,
                enonce: '📐 كم ضلعاً للمثلث؟',
                choices: ['2', '3', '4', '5'],
                correct: 1,
                points: 1,
                hint: 'مثل = 3',
                feedback: {
                    success: 'صحيح! المثلث له 3 أضلاع',
                    error: 'المثلث له 3 أضلاع'
                }
            },
            {
                id: 22,
                enonce: '📐 كم ضلعاً للمستطيل؟',
                choices: ['3', '4', '5', '6'],
                correct: 1,
                points: 1,
                hint: 'فكّر في شكل دفتر المدرسة',
                feedback: {
                    success: 'ممتاز! المستطيل له 4 أضلاع',
                    error: 'المستطيل له 4 أضلاع'
                }
            },
            {
                id: 23,
                enonce: '📐 ما هو شكل كرة القدم؟',
                choices: ['مربع', 'مثلث', 'دائرة (كرة)', 'مستطيل'],
                correct: 2,
                points: 1,
                hint: 'شكل كروي',
                feedback: {
                    success: 'صحيح! كرة القدم كروية الشكل',
                    error: 'كرة القدم لها شكل كرة (دائرة في المستوى)'
                }
            },
            
            // --- أسئلة متنوعة ---
            {
                id: 24,
                enonce: '🎯 كم يساوي نصف 24؟',
                choices: ['10', '11', '12', '14'],
                correct: 2,
                points: 2,
                hint: 'النصف = القسمة على 2',
                feedback: {
                    success: 'صحيح! 24 ÷ 2 = 12',
                    error: 'نصف 24 = 24 ÷ 2 = 12'
                }
            },
            {
                id: 25,
                enonce: '🎯 كم يساوي ربع 100؟',
                choices: ['20', '25', '30', '40'],
                correct: 1,
                points: 2,
                hint: 'الربع = القسمة على 4',
                feedback: {
                    success: 'ممتاز! 100 ÷ 4 = 25',
                    error: 'ربع 100 = 100 ÷ 4 = 25'
                }
            },
            {
                id: 26,
                enonce: '🎯 أكمل المتتالية: 5, 10, 15, 20, ..., ...',
                choices: ['25, 30', '22, 24', '24, 28', '25, 35'],
                correct: 0,
                points: 2,
                hint: 'كل عدد يزداد بـ 5',
                feedback: {
                    success: 'رائع! المتتالية تزاد بـ 5: 25, 30',
                    error: 'القاعدة: +5 في كل مرة. 20+5=25، 25+5=30'
                }
            },
            {
                id: 27,
                enonce: '🎯 أكمل المتتالية: 2, 4, 6, 8, ..., ...',
                choices: ['9, 10', '10, 12', '10, 11', '12, 14'],
                correct: 1,
                points: 2,
                hint: 'أعداد زوجية',
                feedback: {
                    success: 'صحيح! الأعداد الزوجية: 10, 12',
                    error: 'القاعدة: +2 في كل مرة. 8+2=10، 10+2=12'
                }
            },
            {
                id: 28,
                enonce: '📝 اشترى أبو أحمد 3 كتب، كل كتاب بـ 8 دنانير. كم دفع؟',
                choices: ['16 د', '21 د', '24 د', '27 د'],
                correct: 2,
                points: 3,
                hint: 'استعمل الضرب: 3 × 8',
                feedback: {
                    success: 'ممتاز! 3 × 8 = 24 ديناراً',
                    error: '3 كتب × 8 دنانير = 24 ديناراً'
                }
            },
            {
                id: 29,
                enonce: '📝 دفع أحمد 1000 مليم واشترى بـ 650 مليم. كم يرجع له؟',
                choices: ['250 م', '300 م', '350 م', '450 م'],
                correct: 2,
                points: 3,
                hint: 'استعمل الطرح: 1000 - 650',
                feedback: {
                    success: 'رائع! 1000 - 650 = 350 مليم',
                    error: '1000 - 650 = 350 مليم'
                }
            },
            {
                id: 30,
                enonce: '📝 في قسم 24 تلميذاً. نصفهم بنات. كم عدد البنات؟',
                choices: ['10', '11', '12', '14'],
                correct: 2,
                points: 3,
                hint: 'النصف = القسمة على 2',
                feedback: {
                    success: 'ممتاز! 24 ÷ 2 = 12 بنتاً',
                    error: 'نصف 24 = 24 ÷ 2 = 12'
                }
            }
        ],
        
        // ========== الإيقاظ العلمي - السنة الثالثة ==========
        'eveil': [
            {
                id: 1,
                enonce: 'ما هو العضو الذي يساعدنا على التنفس؟',
                choices: ['القلب', 'الرئتان', 'المعدة', 'الدماغ'],
                correct: 1,
                points: 1,
                hint: 'نحتاجه للحصول على الأكسجين',
                feedback: {
                    success: 'صحيح! الرئتان هما عضوا التنفس',
                    error: 'الرئتان هما العضو المسؤول عن التنفس'
                }
            },
            {
                id: 2,
                enonce: 'أي من هذه الحيوانات من الثدييات؟',
                choices: ['الدجاجة', 'السمكة', 'القطّة', 'السلحفاة'],
                correct: 2,
                points: 1,
                hint: 'تلد صغارها وترضعهم',
                feedback: {
                    success: 'ممتاز! القطّة من الثدييات',
                    error: 'القطّة من الثدييات لأنها تلد وترضع صغارها'
                }
            },
            {
                id: 3,
                enonce: 'ماذا تحتاج النباتات للنمو؟',
                choices: ['الماء والهواء والضوء', 'الظلام فقط', 'التراب فقط', 'الماء فقط'],
                correct: 0,
                points: 1,
                hint: 'النباتات تحتاج لثلاثة أشياء أساسية',
                feedback: {
                    success: 'صحيح! النباتات تحتاج الماء والهواء والضوء',
                    error: 'النباتات تحتاج الماء والهواء والضوء للنمو'
                }
            },
            {
                id: 4,
                enonce: 'ما هو أكبر عضو في جسم الإنسان؟',
                choices: ['القلب', 'الكبد', 'الجلد', 'المعدة'],
                correct: 2,
                points: 2,
                hint: 'يغطي كامل جسمك',
                feedback: {
                    success: 'رائع! الجلد هو أكبر عضو في الجسم',
                    error: 'الجلد هو أكبر عضو في جسم الإنسان'
                }
            },
            {
                id: 5,
                enonce: 'أيّ حالة من حالات الماء هي الجليد؟',
                choices: ['سائلة', 'صلبة', 'غازية', 'لا شيء مما ذكر'],
                correct: 1,
                points: 2,
                hint: 'فكّر في مكعبات الثلج',
                feedback: {
                    success: 'ممتاز! الجليد هو الماء في الحالة الصلبة',
                    error: 'الجليد هو الماء في حالته الصلبة'
                }
            },
            {
                id: 6,
                enonce: 'ما هو مصدر الضوء الطبيعي الرئيسي للأرض؟',
                choices: ['القمر', 'النجوم', 'الشمس', 'المصابيح'],
                correct: 2,
                points: 1,
                hint: 'نجم كبير في السماء',
                feedback: {
                    success: 'صحيح! الشمس هي مصدر الضوء الرئيسي',
                    error: 'الشمس هي مصدر الضوء الطبيعي الرئيسي للأرض'
                }
            },
            {
                id: 7,
                enonce: 'كم عدد فصول السنة؟',
                choices: ['2', '3', '4', '5'],
                correct: 2,
                points: 1,
                hint: 'الربيع، الصيف، ...',
                feedback: {
                    success: 'ممتاز! فصول السنة 4',
                    error: 'فصول السنة 4: الربيع، الصيف، الخريف، الشتاء'
                }
            },
            {
                id: 8,
                enonce: 'ما الذي يحمي الأسنان من التسوس؟',
                choices: ['الأكل الكثير', 'تنظيفها بالفرشاة', 'النوم الطويل', 'شرب الماء البارد'],
                correct: 1,
                points: 1,
                hint: 'عادة يومية صباحاً ومساءً',
                feedback: {
                    success: 'صحيح! تنظيف الأسنان يحميها',
                    error: 'تنظيف الأسنان بالفرشاة يحميها من التسوس'
                }
            },
            {
                id: 9,
                enonce: 'أيّ حيوان يبيض؟',
                choices: ['البقرة', 'الدجاجة', 'القطّة', 'الأرنب'],
                correct: 1,
                points: 1,
                hint: 'من الطيور',
                feedback: {
                    success: 'رائع! الدجاجة من الطيور وتبيض',
                    error: 'الدجاجة من الطيور، والطيور تبيض'
                }
            },
            {
                id: 10,
                enonce: 'ما هو دور القلب في الجسم؟',
                choices: ['الهضم', 'ضخ الدم', 'التنفس', 'التفكير'],
                correct: 1,
                points: 2,
                hint: 'يعمل كمضخة',
                feedback: {
                    success: 'ممتاز! القلب يضخ الدم إلى كل الجسم',
                    error: 'القلب يضخ الدم إلى جميع أجزاء الجسم'
                }
            }
        ],
        
        // ========== القراءة - السنة الثالثة ==========
        'lecture': [
            {
                id: 1,
                enonce: 'ما هو ضد كلمة "كبير"؟',
                choices: ['طويل', 'صغير', 'عريض', 'قوي'],
                correct: 1,
                points: 1,
                hint: 'فكّر في النقيض',
                feedback: {
                    success: 'صحيح! ضد كبير هو صغير',
                    error: 'ضد كلمة "كبير" هو "صغير"'
                }
            },
            {
                id: 2,
                enonce: 'ما هو جمع كلمة "كتاب"؟',
                choices: ['كتابات', 'كُتُب', 'كاتبون', 'مكاتب'],
                correct: 1,
                points: 1,
                hint: 'جمع تكسير',
                feedback: {
                    success: 'ممتاز! جمع كتاب هو كُتُب',
                    error: 'جمع كلمة "كتاب" هو "كُتُب"'
                }
            },
            {
                id: 3,
                enonce: 'أكمل المثل: "العلم في الصغر كال......... في الحجر"',
                choices: ['الماء', 'النقش', 'الزرع', 'الضوء'],
                correct: 1,
                points: 2,
                hint: 'مثل تونسي شهير',
                feedback: {
                    success: 'رائع! العلم في الصغر كالنقش في الحجر',
                    error: 'المثل الصحيح: العلم في الصغر كالنقش في الحجر'
                }
            },
            {
                id: 4,
                enonce: 'ما هو مرادف كلمة "جميل"؟',
                choices: ['قبيح', 'حَسَن', 'حزين', 'سريع'],
                correct: 1,
                points: 1,
                hint: 'كلمة بمعنى مشابه',
                feedback: {
                    success: 'صحيح! مرادف جميل هو حَسَن',
                    error: 'مرادف كلمة "جميل" هو "حَسَن"'
                }
            },
            {
                id: 5,
                enonce: 'أيّ جملة صحيحة نحوياً؟',
                choices: ['ذهب الولد إلى المدرسة', 'الولد ذهب إلى مدرسة', 'إلى المدرسة ذهب الولد', 'كلها صحيحة'],
                correct: 0,
                points: 2,
                hint: 'فعل + فاعل + مفعول',
                feedback: {
                    success: 'ممتاز! الجملة الصحيحة: ذهب الولد إلى المدرسة',
                    error: 'الترتيب الصحيح: فعل + فاعل + مكان'
                }
            },
            {
                id: 6,
                enonce: 'ما نوع كلمة "يلعب"؟',
                choices: ['اسم', 'فعل ماضٍ', 'فعل مضارع', 'حرف'],
                correct: 2,
                points: 2,
                hint: 'تدل على حدث يحصل الآن',
                feedback: {
                    success: 'صحيح! "يلعب" فعل مضارع',
                    error: '"يلعب" فعل مضارع'
                }
            },
            {
                id: 7,
                enonce: 'ما هو ضد كلمة "صيف"؟',
                choices: ['ربيع', 'خريف', 'شتاء', 'مطر'],
                correct: 2,
                points: 1,
                hint: 'فصل من فصول السنة',
                feedback: {
                    success: 'ممتاز! ضد الصيف هو الشتاء',
                    error: 'ضد الصيف هو الشتاء'
                }
            },
            {
                id: 8,
                enonce: 'أكمل: ".......... وطننا تونس"',
                choices: ['جميلة', 'جميل', 'جميلان', 'جميلات'],
                correct: 1,
                points: 1,
                hint: 'الصفة تطابق الموصوف',
                feedback: {
                    success: 'صحيح! "جميل وطننا تونس"',
                    error: '"وطننا" مذكر، لذا الصفة "جميل"'
                }
            }
        ],
        
        // ========== الإنتاج الكتابي - السنة الثالثة ==========
        'production': [
            {
                id: 1,
                enonce: 'أيّ جملة تصلح لبدء حكاية؟',
                choices: ['في النهاية عاد الجميع', 'ثم ذهبوا إلى البيت', 'في قديم الزمان، كان هناك أرنب صغير', 'بعد ذلك أكل الأرنب'],
                correct: 2,
                points: 2,
                hint: 'بداية الحكاية تقدّم الشخصيات',
                feedback: {
                    success: 'رائع! "في قديم الزمان..." بداية كلاسيكية',
                    error: 'بداية الحكاية تقدم الزمان والمكان والشخصيات'
                }
            },
            {
                id: 2,
                enonce: 'أيّ علامة نضع في نهاية السؤال؟',
                choices: ['. (نقطة)', '? (استفهام)', '! (تعجب)', ', (فاصلة)'],
                correct: 1,
                points: 1,
                hint: 'علامة الاستفهام',
                feedback: {
                    success: 'صحيح! علامة الاستفهام (?)',
                    error: 'السؤال ينتهي بعلامة الاستفهام (?)'
                }
            },
            {
                id: 3,
                enonce: 'ما هو الفعل في الجملة: "أكل الولد التفاحة"؟',
                choices: ['الولد', 'أكل', 'التفاحة', 'لا يوجد فعل'],
                correct: 1,
                points: 1,
                hint: 'الكلمة التي تدل على الحدث',
                feedback: {
                    success: 'صحيح! "أكل" هو الفعل',
                    error: '"أكل" هو الفعل'
                }
            },
            {
                id: 4,
                enonce: 'أكمل الوصف: "الوردة ....... اللون و....... الرائحة"',
                choices: ['حمراء / جميلة', 'أحمر / جميل', 'حمرة / جمال', 'يحمّر / يجمل'],
                correct: 0,
                points: 2,
                hint: 'الصفة تطابق الموصوف',
                feedback: {
                    success: 'ممتاز! "حمراء" و"جميلة" لأن "الوردة" مؤنث',
                    error: '"الوردة" مؤنث، لذا الصفتان: "حمراء" و"جميلة"'
                }
            },
            {
                id: 5,
                enonce: 'أيّ عبارة تصلح لختام رسالة؟',
                choices: ['في القديم كان...', 'ثم بعد ذلك...', 'مع خالص التحيات', 'وفي النهاية...'],
                correct: 2,
                points: 2,
                hint: 'عبارة ختامية للرسائل',
                feedback: {
                    success: 'صحيح! "مع خالص التحيات"',
                    error: 'الرسائل تنتهي بـ "مع خالص التحيات"'
                }
            },
            {
                id: 6,
                enonce: 'رتّب الكلمات لتكوين جملة: (يلعب - الأطفال - في - الحديقة)',
                choices: ['يلعب الأطفال في الحديقة', 'في الحديقة يلعب الأطفال', 'الأطفال يلعبون في الحديقة', 'كلها صحيحة'],
                correct: 3,
                points: 2,
                hint: 'كل التراكيب ممكنة',
                feedback: {
                    success: 'ممتاز! كل التراكيب صحيحة',
                    error: 'كل التراكيب صحيحة في اللغة العربية'
                }
            }
        ],
        
        // ========== التربية الإسلامية - السنة الثالثة ==========
        'islamique': [
            {
                id: 1,
                enonce: 'كم عدد أركان الإسلام؟',
                choices: ['3', '4', '5', '6'],
                correct: 2,
                points: 1,
                hint: 'الشهادتان، الصلاة، ...',
                feedback: {
                    success: 'صحيح! أركان الإسلام 5',
                    error: 'أركان الإسلام 5'
                }
            },
            {
                id: 2,
                enonce: 'ما هي أول سورة في القرآن الكريم؟',
                choices: ['سورة الناس', 'سورة الفاتحة', 'سورة الإخلاص', 'سورة البقرة'],
                correct: 1,
                points: 1,
                hint: 'نقرأها في كل ركعة',
                feedback: {
                    success: 'ممتاز! سورة الفاتحة',
                    error: 'سورة الفاتحة هي أول سورة'
                }
            },
            {
                id: 3,
                enonce: 'كم ركعة في صلاة الظهر؟',
                choices: ['2', '3', '4', '5'],
                correct: 2,
                points: 1,
                hint: 'من الصلوات الرباعية',
                feedback: {
                    success: 'صحيح! صلاة الظهر 4 ركعات',
                    error: 'صلاة الظهر 4 ركعات'
                }
            },
            {
                id: 4,
                enonce: 'من هو خاتم الأنبياء؟',
                choices: ['سيدنا إبراهيم', 'سيدنا موسى', 'سيدنا عيسى', 'سيدنا محمد ﷺ'],
                correct: 3,
                points: 1,
                hint: 'نبيّنا',
                feedback: {
                    success: 'صحيح! سيدنا محمد ﷺ',
                    error: 'سيدنا محمد ﷺ هو خاتم الأنبياء'
                }
            },
            {
                id: 5,
                enonce: 'في أيّ شهر يصوم المسلمون؟',
                choices: ['شوال', 'رمضان', 'محرم', 'ذو الحجة'],
                correct: 1,
                points: 1,
                hint: 'الشهر التاسع في التقويم الهجري',
                feedback: {
                    success: 'ممتاز! شهر رمضان',
                    error: 'شهر الصيام هو رمضان'
                }
            }
        ],
        
        // ========== الرياضيات - السنة الخامسة ==========
        'maths': [
            {
                id: 1,
                enonce: 'حوّل الكسر ½ إلى عدد عشري',
                choices: ['0.2', '0.25', '0.5', '0.75'],
                correct: 2,
                points: 2,
                hint: 'اقسم 1 على 2',
                feedback: {
                    success: 'صحيح! ½ = 0.5',
                    error: '½ = 1 ÷ 2 = 0.5'
                }
            },
            {
                id: 2,
                enonce: 'مستطيل طوله 8سم وعرضه 5سم. ما مساحته؟',
                choices: ['13 سم²', '26 سم²', '40 سم²', '45 سم²'],
                correct: 2,
                points: 3,
                hint: 'المساحة = الطول × العرض',
                feedback: {
                    success: 'ممتاز! المساحة = 8 × 5 = 40 سم²',
                    error: 'مساحة المستطيل = الطول × العرض = 8 × 5 = 40 سم²'
                }
            },
            {
                id: 3,
                enonce: 'احسب: 3.5 + 2.75 = ؟',
                choices: ['5.25', '6.25', '6.15', '5.75'],
                correct: 1,
                points: 2,
                hint: 'رتّب الأعداد عمودياً',
                feedback: {
                    success: 'رائع! 3.5 + 2.75 = 6.25',
                    error: '3.50 + 2.75 = 6.25'
                }
            },
            {
                id: 4,
                enonce: 'ما هو محيط مربع طول ضلعه 6سم؟',
                choices: ['12 سم', '24 سم', '36 سم', '18 سم'],
                correct: 1,
                points: 2,
                hint: 'محيط المربع = 4 × الضلع',
                feedback: {
                    success: 'صحيح! المحيط = 4 × 6 = 24 سم',
                    error: 'محيط المربع = 4 × الضلع = 4 × 6 = 24 سم'
                }
            },
            {
                id: 5,
                enonce: 'سيارة قطعت 120كم في ساعتين. ما سرعتها؟',
                choices: ['50 كم/س', '60 كم/س', '70 كم/س', '80 كم/س'],
                correct: 1,
                points: 3,
                hint: 'السرعة = المسافة ÷ الزمن',
                feedback: {
                    success: 'ممتاز! السرعة = 120 ÷ 2 = 60 كم/س',
                    error: 'السرعة = المسافة ÷ الزمن = 120 ÷ 2 = 60 كم/س'
                }
            },
            {
                id: 6,
                enonce: 'بسّط الكسر: 4/8',
                choices: ['1/2', '1/4', '2/4', '3/4'],
                correct: 0,
                points: 2,
                hint: 'اقسم البسط والمقام على 4',
                feedback: {
                    success: 'صحيح! 4/8 = 1/2',
                    error: '4÷4=1، 8÷4=2، إذن 4/8 = 1/2'
                }
            },
            {
                id: 7,
                enonce: 'احسب: 25% من 200 = ؟',
                choices: ['25', '40', '50', '75'],
                correct: 2,
                points: 2,
                hint: '25% = الربع',
                feedback: {
                    success: 'رائع! 25% من 200 = 50',
                    error: '25% = ¼، إذن 200 ÷ 4 = 50'
                }
            },
            {
                id: 8,
                enonce: 'مثلث أضلاعه 3سم، 4سم، 5سم. ما محيطه؟',
                choices: ['10 سم', '11 سم', '12 سم', '15 سم'],
                correct: 2,
                points: 2,
                hint: 'المحيط = مجموع الأضلاع',
                feedback: {
                    success: 'صحيح! المحيط = 3 + 4 + 5 = 12 سم',
                    error: 'محيط المثلث = مجموع أضلاعه = 3 + 4 + 5 = 12 سم'
                }
            },
            {
                id: 9,
                enonce: 'حوّل: 3.5 كلغ = ...... غرام',
                choices: ['35 غ', '350 غ', '3500 غ', '35000 غ'],
                correct: 2,
                points: 2,
                hint: '1 كلغ = 1000 غ',
                feedback: {
                    success: 'ممتاز! 3.5 × 1000 = 3500 غ',
                    error: '3.5 كلغ = 3.5 × 1000 = 3500 غرام'
                }
            },
            {
                id: 10,
                enonce: 'إذا كان 5 دفاتر بـ 25 ديناراً، فكم ثمن 8 دفاتر؟',
                choices: ['32 د', '36 د', '40 د', '45 د'],
                correct: 2,
                points: 3,
                hint: 'احسب ثمن الدفتر الواحد أولاً',
                feedback: {
                    success: 'رائع! ثمن الدفتر = 5د، إذن 8 × 5 = 40د',
                    error: 'ثمن الدفتر = 25 ÷ 5 = 5د. ثمن 8 = 8 × 5 = 40د'
                }
            }
        ],
        
        // ========== اللغة الفرنسية - السنة الخامسة ==========
        'french': [
            {
                id: 1,
                enonce: 'Quel est le féminin de "grand" ?',
                choices: ['grande', 'grands', 'grandes', 'grandee'],
                correct: 0,
                points: 1,
                hint: 'On ajoute "e"',
                feedback: {
                    success: 'Correct! grande',
                    error: 'Le féminin de "grand" est "grande"'
                }
            },
            {
                id: 2,
                enonce: 'Conjugue "avoir" au présent: J\'......',
                choices: ['ai', 'as', 'a', 'avons'],
                correct: 0,
                points: 2,
                hint: 'Verbe irrégulier',
                feedback: {
                    success: 'Parfait! J\'ai',
                    error: 'J\'ai, tu as, il a...'
                }
            },
            {
                id: 3,
                enonce: 'Quel est le pluriel de "un chat" ?',
                choices: ['des chat', 'des chats', 'des chates', 'les chat'],
                correct: 1,
                points: 1,
                hint: 'On ajoute "s"',
                feedback: {
                    success: 'Correct! Des chats',
                    error: 'Au pluriel: des chats'
                }
            },
            {
                id: 4,
                enonce: 'Complète: "Hier, je ...... au parc." (aller)',
                choices: ['vais', 'suis allé', 'irai', 'allais'],
                correct: 1,
                points: 2,
                hint: 'Hier = passé',
                feedback: {
                    success: 'Excellent! je suis allé',
                    error: '"Hier" = passé composé: je suis allé'
                }
            },
            {
                id: 5,
                enonce: 'Quel est le contraire de "jour" ?',
                choices: ['matin', 'soir', 'nuit', 'midi'],
                correct: 2,
                points: 1,
                hint: 'L\'opposé du jour',
                feedback: {
                    success: 'Correct! nuit',
                    error: 'Le contraire de "jour" est "nuit"'
                }
            },
            {
                id: 6,
                enonce: 'Choisis l\'article: "...... fille est gentille."',
                choices: ['Le', 'La', 'Les', 'Un'],
                correct: 1,
                points: 1,
                hint: '"Fille" est féminin',
                feedback: {
                    success: 'Parfait! La fille',
                    error: '"Fille" = féminin, donc "La"'
                }
            }
        ],
        
        // ========== اللغة الإنقليزية - السنة الخامسة ==========
        'english': [
            {
                id: 1,
                enonce: 'What is "كتاب" in English?',
                choices: ['pen', 'book', 'table', 'chair'],
                correct: 1,
                points: 1,
                hint: 'You read it',
                feedback: {
                    success: 'Correct! Book',
                    error: 'Book = كتاب'
                }
            },
            {
                id: 2,
                enonce: 'Complete: "I ...... a student."',
                choices: ['am', 'is', 'are', 'be'],
                correct: 0,
                points: 1,
                hint: 'With "I"',
                feedback: {
                    success: 'Perfect! I am',
                    error: 'With "I" we use "am"'
                }
            },
            {
                id: 3,
                enonce: 'How do you say "تفاحة" in English?',
                choices: ['orange', 'banana', 'apple', 'grape'],
                correct: 2,
                points: 1,
                hint: 'Red or green fruit',
                feedback: {
                    success: 'Correct! Apple',
                    error: 'Apple = تفاحة'
                }
            },
            {
                id: 4,
                enonce: 'What color is the sky?',
                choices: ['red', 'green', 'blue', 'yellow'],
                correct: 2,
                points: 1,
                hint: 'Look up!',
                feedback: {
                    success: 'Correct! Blue',
                    error: 'The sky is blue'
                }
            },
            {
                id: 5,
                enonce: 'Plural of "child" is:',
                choices: ['childs', 'children', 'childes', 'child'],
                correct: 1,
                points: 2,
                hint: 'Irregular plural',
                feedback: {
                    success: 'Perfect! Children',
                    error: 'child → children'
                }
            },
            {
                id: 6,
                enonce: 'Complete: "She ...... to school."',
                choices: ['go', 'goes', 'going', 'gone'],
                correct: 1,
                points: 2,
                hint: 'Present simple + she',
                feedback: {
                    success: 'Correct! She goes',
                    error: 'With she: goes'
                }
            }
        ]
    };
    
    return allQuestions[subjectId] || [];
}