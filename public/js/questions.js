// public/js/questions.js
// بنك الأسئلة الكامل - مستوحى من الامتحانات التونسية الرسمية

console.log('✅ questions.js loaded successfully');

function getQuestionsBySubject(subjectId) {
    console.log('🔍 Looking for subject:', subjectId);
    
    const allQuestions = {
        
        // ========== الحساب - السنة الثالثة ==========
        'calcul': [
            {
                id: 1,
                enonce: ' احسب ذهنياً: 15 + 7 = ؟',
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
                enonce: '🧠 احسب: 48 - 23 = ؟',
                choices: ['25', '24', '26', '27'],
                correct: 0,
                points: 1,
                hint: 'اطرح الآحاد ثم العشرات',
                feedback: {
                    success: 'ممتاز! 48 - 23 = 25',
                    error: '8 - 3 = 5، و 4 - 2 = 2، إذن الناتج 25'
                }
            },
            {
                id: 3,
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
                id: 4,
                enonce: '🔢 أنجز العملية: 347 + 258 = ؟',
                choices: ['505', '595', '605', '615'],
                correct: 2,
                points: 2,
                hint: 'ابدأ بجمع الآحاد: 7 + 8 = 15',
                feedback: {
                    success: 'أحسنت! 347 + 258 = 605',
                    error: '7+8=15 (نكتب 5 ونحتفظ 1)، 4+5+1=10، 3+2+1=6'
                }
            },
            {
                id: 5,
                enonce: ' حوّل: 2م 35سم = ...... سم',
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
                id: 6,
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
                id: 7,
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
                id: 8,
                enonce: '📝 اشترى أحمد 3 كتب، كل كتاب بـ 8 دنانير. كم دفع؟',
                choices: ['16 د', '21 د', '24 د', '27 د'],
                correct: 2,
                points: 3,
                hint: 'استعمل الضرب: 3 × 8',
                feedback: {
                    success: 'ممتاز! 3 × 8 = 24 ديناراً',
                    error: '3 كتب × 8 دنانير = 24 ديناراً'
                }
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
                hint: 'نحتاجه للحصول على الأكسجين',
                feedback: {
                    success: 'صحيح! الرئتان هما عضوا التنفس',
                    error: 'الرئتان هما العضو المسؤول عن التنفس'
                }
            },
            {
                id: 2,
                enonce: ' أي من هذه الحيوانات من الثدييات؟',
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
                enonce: ' ماذا تحتاج النباتات للنمو؟',
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
                enonce: ' أيّ حالة من حالات الماء هي الجليد؟',
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
                id: 5,
                enonce: '☀️ ما هو مصدر الضوء الطبيعي الرئيسي للأرض؟',
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
                id: 6,
                enonce: '🫀 ما هو دور القلب في الجسم؟',
                choices: ['الهضم', 'ضخ الدم', 'التنفس', 'التفكير'],
                correct: 1,
                points: 2,
                hint: 'يعمل كمضخة',
                feedback: {
                    success: 'ممتاز! القلب يضخ الدم إلى كل الجسم',
                    error: 'القلب يضخ الدم إلى جميع أجزاء الجسم'
                }
            },
            {
                id: 7,
                enonce: '🦷 ما الذي يحمي الأسنان من التسوس؟',
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
                id: 8,
                enonce: ' أيّ حيوان يبيض؟',
                choices: ['البقرة', 'الدجاجة', 'القطّة', 'الأرنب'],
                correct: 1,
                points: 1,
                hint: 'من الطيور',
                feedback: {
                    success: 'رائع! الدجاجة من الطيور وتبيض',
                    error: 'الدجاجة من الطيور، والطيور تبيض'
                }
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
                hint: 'فكّر في النقيض',
                feedback: {
                    success: 'صحيح! ضد كبير هو صغير',
                    error: 'ضد كلمة "كبير" هو "صغير"'
                }
            },
            {
                id: 2,
                enonce: '📚 ما هو جمع كلمة "كتاب"؟',
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
                enonce: '✍️ ما هو مرادف كلمة "جميل"؟',
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
                id: 4,
                enonce: '📝 ما نوع كلمة "يلعب"؟',
                choices: ['اسم', 'فعل ماضٍ', 'فعل مضارع', 'حرف'],
                correct: 2,
                points: 2,
                hint: 'تدل على حدث يحصل الآن',
                feedback: {
                    success: 'صحيح! "يلعب" فعل مضارع',
                    error: '"يلعب" فعل مضارع لأنه يدل على حدث في الحاضر'
                }
            },
            {
                id: 5,
                enonce: '🍂 ما هو ضد كلمة "صيف"؟',
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
                id: 6,
                enonce: '🌹 أكمل: "الوردة ....... اللون"',
                choices: ['أحمر', 'حمراء', 'يحمّر', 'حمرة'],
                correct: 1,
                points: 2,
                hint: 'الصفة تطابق الموصوف في التذكير والتأنيث',
                feedback: {
                    success: 'صحيح! "الوردة حمراء" لأن الوردة مؤنث',
                    error: '"الوردة" مؤنث، لذا الصفة "حمراء" (مؤنث)'
                }
            },
            {
                id: 7,
                enonce: '❓ أيّ علامة نضع في نهاية السؤال؟',
                choices: ['. (نقطة)', '? (استفهام)', '! (تعجب)', ', (فاصلة)'],
                correct: 1,
                points: 1,
                hint: 'علامة الاستفهام',
                feedback: {
                    success: 'صحيح! نضع علامة الاستفهام (?)',
                    error: 'السؤال ينتهي بعلامة الاستفهام (?)'
                }
            },
            {
                id: 8,
                enonce: '📖 أكمل المثل: "العلم في الصغر كال......... في الحجر"',
                choices: ['الماء', 'النقش', 'الزرع', 'الضوء'],
                correct: 1,
                points: 2,
                hint: 'مثل تونسي شهير',
                feedback: {
                    success: 'رائع! العلم في الصغر كالنقش في الحجر',
                    error: 'المثل الصحيح: العلم في الصغر كالنقش في الحجر'
                }
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
                hint: 'بداية الحكاية تقدّم الشخصيات',
                feedback: {
                    success: 'رائع! "في قديم الزمان..." بداية كلاسيكية للحكاية',
                    error: 'بداية الحكاية تقدم الزمان والمكان والشخصيات'
                }
            },
            {
                id: 2,
                enonce: '📝 ما هو الفعل في الجملة: "أكل الولد التفاحة"؟',
                choices: ['الولد', 'أكل', 'التفاحة', 'لا يوجد فعل'],
                correct: 1,
                points: 1,
                hint: 'الكلمة التي تدل على الحدث',
                feedback: {
                    success: 'صحيح! "أكل" هو الفعل',
                    error: '"أكل" هو الفعل لأنه يدل على الحدث'
                }
            },
            {
                id: 3,
                enonce: '💌 أيّ عبارة تصلح لختام رسالة؟',
                choices: ['في القديم كان...', 'ثم بعد ذلك...', 'مع خالص التحيات', 'وفي النهاية...'],
                correct: 2,
                points: 2,
                hint: 'عبارة ختامية للرسائل',
                feedback: {
                    success: 'صحيح! "مع خالص التحيات" ختام مناسب للرسالة',
                    error: 'الرسائل تنتهي بعبارات مثل "مع خالص التحيات"'
                }
            },
            {
                id: 4,
                enonce: '🌸 أكمل الوصف: "الوردة ....... اللون و....... الرائحة"',
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
                enonce: '📝 رتّب الكلمات لتكوين جملة: (يلعب - الأطفال - في - الحديقة)',
                choices: ['يلعب الأطفال في الحديقة', 'في الحديقة يلعب الأطفال', 'الأطفال يلعبون في الحديقة', 'كلها صحيحة'],
                correct: 3,
                points: 2,
                hint: 'كل التراكيب ممكنة في العربية',
                feedback: {
                    success: 'ممتاز! كل التراكيب صحيحة نحوياً',
                    error: 'كل التراكيب صحيحة في اللغة العربية'
                }
            },
            {
                id: 6,
                enonce: '✏️ ما هو جمع كلمة "مدرسة"؟',
                choices: ['مدرسون', 'مدارس', 'مدرسات', 'مدرستان'],
                correct: 1,
                points: 1,
                hint: 'جمع تكسير',
                feedback: {
                    success: 'صحيح! جمع مدرسة هو مدارس',
                    error: 'جمع كلمة "مدرسة" هو "مدارس"'
                }
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
                hint: 'الشهادتان، الصلاة، ...',
                feedback: {
                    success: 'صحيح! أركان الإسلام 5',
                    error: 'أركان الإسلام 5: الشهادتان، الصلاة، الزكاة، الصوم، الحج'
                }
            },
            {
                id: 2,
                enonce: '📖 ما هي أول سورة في القرآن الكريم؟',
                choices: ['سورة الناس', 'سورة الفاتحة', 'سورة الإخلاص', 'سورة البقرة'],
                correct: 1,
                points: 1,
                hint: 'نقرأها في كل ركعة',
                feedback: {
                    success: 'ممتاز! سورة الفاتحة هي أول سورة',
                    error: 'سورة الفاتحة هي أول سورة في القرآن'
                }
            },
            {
                id: 3,
                enonce: '🙏 كم ركعة في صلاة الظهر؟',
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
                enonce: '🌟 من هو خاتم الأنبياء؟',
                choices: ['سيدنا إبراهيم', 'سيدنا موسى', 'سيدنا عيسى', 'سيدنا محمد ﷺ'],
                correct: 3,
                points: 1,
                hint: 'نبيّنا',
                feedback: {
                    success: 'صحيح! سيدنا محمد ﷺ هو خاتم الأنبياء',
                    error: 'سيدنا محمد ﷺ هو خاتم الأنبياء والمرسلين'
                }
            },
            {
                id: 5,
                enonce: '🌙 في أيّ شهر يصوم المسلمون؟',
                choices: ['شوال', 'رمضان', 'محرم', 'ذو الحجة'],
                correct: 1,
                points: 1,
                hint: 'الشهر التاسع في التقويم الهجري',
                feedback: {
                    success: 'ممتاز! المسلمون يصومون في شهر رمضان',
                    error: 'شهر الصيام هو رمضان'
                }
            },
            {
                id: 6,
                enonce: ' ما هو اتجاه القبلة في الصلاة؟',
                choices: ['الشمال', 'الجنوب', 'الكعبة المشرفة', 'الشرق'],
                correct: 2,
                points: 1,
                hint: 'بيت الله الحرام',
                feedback: {
                    success: 'صحيح! نصلي باتجاه الكعبة المشرفة',
                    error: 'المسلمون يصلون باتجاه الكعبة المشرفة'
                }
            }
        ],
        
        // ========== الرياضيات - السنة الخامسة ==========
        'maths': [
            {
                id: 1,
                enonce: '🔢 حوّل الكسر ½ إلى عدد عشري',
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
                enonce: '📐 مستطيل طوله 8سم وعرضه 5سم. ما مساحته؟',
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
                enonce: '➕ احسب: 3.5 + 2.75 = ؟',
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
                enonce: ' ما هو محيط مربع طول ضلعه 6سم؟',
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
                enonce: '🚗 سيارة قطعت 120كم في ساعتين. ما سرعتها؟',
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
                enonce: '🔢 بسّط الكسر: 4/8',
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
                enonce: '💯 احسب: 25% من 200 = ؟',
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
                enonce: '️ حوّل: 3.5 كلغ = ...... غرام',
                choices: ['35 غ', '350 غ', '3500 غ', '35000 غ'],
                correct: 2,
                points: 2,
                hint: '1 كلغ = 1000 غ',
                feedback: {
                    success: 'ممتاز! 3.5 × 1000 = 3500 غ',
                    error: '3.5 كلغ = 3.5 × 1000 = 3500 غرام'
                }
            }
        ],
        
        // ========== اللغة الفرنسية - السنة الخامسة ==========
        'french': [
            {
                id: 1,
                enonce: '🇫 Quel est le féminin de "grand" ?',
                choices: ['grande', 'grands', 'grandes', 'grandee'],
                correct: 0,
                points: 1,
                hint: 'On ajoute "e" au masculin',
                feedback: {
                    success: 'Correct! Le féminin de "grand" est "grande"',
                    error: 'Le féminin de "grand" est "grande" (on ajoute "e")'
                }
            },
            {
                id: 2,
                enonce: ' Conjugue le verbe "avoir" au présent: J\'......',
                choices: ['ai', 'as', 'a', 'avons'],
                correct: 0,
                points: 2,
                hint: 'Verbe irrégulier très courant',
                feedback: {
                    success: 'Parfait! J\'ai',
                    error: 'J\'ai, tu as, il a, nous avons, vous avez, ils ont'
                }
            },
            {
                id: 3,
                enonce: '🐱 Quel est le pluriel de "un chat" ?',
                choices: ['des chat', 'des chats', 'des chates', 'les chat'],
                correct: 1,
                points: 1,
                hint: 'On ajoute "s" au pluriel',
                feedback: {
                    success: 'Correct! Des chats',
                    error: 'Au pluriel, on ajoute "s": des chats'
                }
            },
            {
                id: 4,
                enonce: '🌙 Quel est le contraire de "jour" ?',
                choices: ['matin', 'soir', 'nuit', 'midi'],
                correct: 2,
                points: 1,
                hint: 'L\'opposé du jour',
                feedback: {
                    success: 'Correct! Le contraire de "jour" est "nuit"',
                    error: 'Le contraire de "jour" est "nuit"'
                }
            },
            {
                id: 5,
                enonce: ' Choisis le bon article: "...... fille est gentille."',
                choices: ['Le', 'La', 'Les', 'Un'],
                correct: 1,
                points: 1,
                hint: '"Fille" est féminin singulier',
                feedback: {
                    success: 'Parfait! La fille',
                    error: '"Fille" est féminin singulier, donc "La"'
                }
            },
            {
                id: 6,
                enonce: ' Complète: "Hier, je ...... au parc." (aller)',
                choices: ['vais', 'suis allé', 'irai', 'allais'],
                correct: 1,
                points: 2,
                hint: 'Hier = passé composé',
                feedback: {
                    success: 'Excellent! Hier, je suis allé au parc',
                    error: '"Hier" indique le passé. Passé composé: je suis allé'
                }
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
                hint: 'You read it',
                feedback: {
                    success: 'Correct! Book = كتاب',
                    error: 'Book means كتاب in Arabic'
                }
            },
            {
                id: 2,
                enonce: '✏️ Complete: "I ...... a student."',
                choices: ['am', 'is', 'are', 'be'],
                correct: 0,
                points: 1,
                hint: 'With "I" we use...',
                feedback: {
                    success: 'Perfect! I am a student',
                    error: 'With "I" we use "am": I am'
                }
            },
            {
                id: 3,
                enonce: '🍎 How do you say "تفاحة" in English?',
                choices: ['orange', 'banana', 'apple', 'grape'],
                correct: 2,
                points: 1,
                hint: 'A red or green fruit',
                feedback: {
                    success: 'Correct! Apple = تفاحة',
                    error: 'Apple means تفاحة in Arabic'
                }
            },
            {
                id: 4,
                enonce: '🎨 What color is the sky?',
                choices: ['red', 'green', 'blue', 'yellow'],
                correct: 2,
                points: 1,
                hint: 'Look up!',
                feedback: {
                    success: 'Correct! The sky is blue',
                    error: 'The sky is blue'
                }
            },
            {
                id: 5,
                enonce: '👶 Plural of "child" is:',
                choices: ['childs', 'children', 'childes', 'child'],
                correct: 1,
                points: 2,
                hint: 'Irregular plural',
                feedback: {
                    success: 'Perfect! Children is the plural of child',
                    error: '"Child" has an irregular plural: children'
                }
            },
            {
                id: 6,
                enonce: ' Complete: "She ...... to school every day."',
                choices: ['go', 'goes', 'going', 'gone'],
                correct: 1,
                points: 2,
                hint: 'Present simple with "she"',
                feedback: {
                    success: 'Correct! She goes to school',
                    error: 'With he/she/it we add "s" or "es": goes'
                }
            }
        ]
    };
    
    // إرجاع أسئلة المادة المطلوبة، أو أسئلة الحساب كـ fallback
    const questions = allQuestions[subjectId];
    
    if (questions && questions.length > 0) {
        console.log(`✅ Found ${questions.length} questions for ${subjectId}`);
        return questions;
    } else {
        console.warn(`️ No questions found for ${subjectId}, falling back to calcul`);
        return allQuestions['calcul'] || [];
    }
}

// جعل الدالة متاحة عالمياً
window.getQuestionsBySubject = getQuestionsBySubject;