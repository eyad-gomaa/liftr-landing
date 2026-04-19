const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const revealItems = document.querySelectorAll(".reveal");
const countUpItems = document.querySelectorAll(".count-up");
const langToggleButtons = document.querySelectorAll(".language-toggle");

const getSavedLanguage = () => {
  try {
    return localStorage.getItem("siteLanguage");
  } catch (error) {
    return null;
  }
};

const saveLanguage = (lang) => {
  try {
    localStorage.setItem("siteLanguage", lang);
  } catch (error) {
    // Ignore storage failures (private mode / blocked storage).
  }
};

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    navFeatures: "Features",
    navHighlights: "Highlights",
    navHow: "How it works",
    navTestimonials: "Testimonials",
    navFaq: "FAQ",
    navContact: "Contact",
    navDownload: "Download",
    heroEyebrow: "YOUR FITNESS COMPANION",
    heroTitle: "Workouts, nutrition, and progress all in Liftr.",
    heroText:
      "Track workouts, personalize nutrition, and stay motivated with a simple all-in-one fitness app experience.",
    heroBtnPrimary: "Get Started",
    heroBtnSecondary: "Explore Features",
    metricOne: "Workouts completed",
    metricTwo: "Active users",
    metricThree: "User rating",
    progressTitle: "Today's Progress",
    progressOneLabel: "Workout Streak",
    progressOneValue: "14 Days",
    progressTwoLabel: "Calories Goal",
    progressThreeLabel: "Hydration",
    progressThreeValue: "6 / 8 Glasses",
    featuresTitle: "Everything in one place",
    featureOneTitle: "Smart Workouts",
    featureOneText: "Personalized training plans that adapt to your goals and level.",
    featureTwoTitle: "Nutrition Tracking",
    featureTwoText: "Plan meals, monitor macros, and stay consistent with your diet.",
    featureThreeTitle: "Progress Insights",
    featureThreeText: "Visualize your achievements and keep improving every week.",
    highlightOneTitle: "AI-based plan suggestions",
    highlightOneText:
      "Liftr suggests balanced workout and meal combinations based on your selected goal and current progress.",
    highlightTwoTitle: "Daily habit reminders",
    highlightTwoText:
      "Build consistency with hydration, nutrition, and movement reminders tailored to your schedule.",
    highlightThreeTitle: "Community motivation",
    highlightThreeText:
      "Stay encouraged with progress sharing, badges, and friendly milestones that keep you moving forward.",
    highlightFourTitle: "Performance analytics",
    highlightFourText:
      "See trends for strength, endurance, and calorie balance across days, weeks, and months.",
    howTitle: "Three steps to a stronger routine",
    stepOneTitle: "Set your goal",
    stepOneText: "Choose fat loss, muscle gain, or improved endurance.",
    stepTwoTitle: "Follow your plan",
    stepTwoText: "Get daily guidance for training, meals, and routines.",
    stepThreeTitle: "Track and improve",
    stepThreeText: "See your streaks, metrics, and milestones over time.",
    weeklyEyebrow: "WEEKLY FLOW",
    weeklyTitle: "A weekly rhythm built around your life",
    weeklyText:
      "Whether you train 3 days or 6 days a week, Liftr helps you keep a clear routine with balanced training intensity and recovery.",
    dayMon: "Mon",
    dayTue: "Tue",
    dayWed: "Wed",
    dayThu: "Thu",
    dayFri: "Fri",
    planMon: "Upper Body + Core",
    planTue: "Cardio + Mobility",
    planWed: "Lower Body Strength",
    planThu: "Recovery + Nutrition Focus",
    planFri: "Full Body Conditioning",
    testimonialsTitle: "What Liftr users are saying",
    quoteOne: "\"Liftr made fitness simple for me. I finally stayed consistent.\"",
    quoteOneName: "- Eyad",
    quoteTwo: "\"I can see progress every week, and that keeps me motivated.\"",
    quoteTwoName: "- Mohamed",
    quoteThree: "\"Having my plan and meals in one place saves me time every day.\"",
    quoteThreeName: "- Ammar",
    quoteFour: "\"The workout and meal flow is very smooth. Great app design.\"",
    quoteFourName: "- Rana",
    faqTitle: "Questions, answered",
    faqOneQ: "Is Liftr suitable for beginners?",
    faqOneA:
      "Yes. You can start with beginner-friendly plans and gradually level up as your confidence and strength improve.",
    faqTwoQ: "Can I customize my nutrition preferences?",
    faqTwoA:
      "Absolutely. Liftr supports food preferences, disliked foods, and personalized nutrition goals.",
    faqThreeQ: "Does Liftr support Arabic and English?",
    faqThreeA: "Yes. The app experience supports both Arabic and English language options.",
    contactTitle: "We'd love to hear from you",
    contactText: "Questions, feedback, or partnership ideas? We would love to hear from you.",
    contactDirectLabel: "Direct",
    contactSocialLabel: "Social",
    contactEmailLabel: "Email",
    contactEmail: "support@liftr.app",
    contactPhoneLabel: "Phone",
    contactPhone: "+966 50 123 4567",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppHint: "Message us anytime",
    contactInstagram: "Instagram",
    contactInstagramHint: "Updates & community",
    contactNote: "We usually reply within 1–2 business days.",
    ctaTitle: "Download Liftr and start today",
    footerTagline: "Fitness, nutrition, and progress in one simple app.",
    footerQuickHeading: "Quick links",
    footerRights: "© <span id=\"year\"></span> Liftr. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms & Conditions",
  },
  ar: {
    navFeatures: "المميزات",
    navHighlights: "لماذا ليفتر",
    navHow: "كيف يعمل",
    navTestimonials: "آراء العملاء",
    navFaq: "الأسئلة الشائعة",
    navContact: "تواصل معنا",
    navDownload: "التحميل",
    heroEyebrow: "رفيقك اليومي للياقة",
    heroTitle: "تمرينك وتغذيتك وتقدّمك كلها في ليفتر.",
    heroText: "تابع تمارينك، خصص نظامك الغذائي، وحافظ على الحافز من خلال تجربة لياقة متكاملة وسهلة.",
    heroBtnPrimary: "ابدأ الآن",
    heroBtnSecondary: "استكشف المميزات",
    metricOne: "تمرين مكتمل",
    metricTwo: "مستخدم نشط",
    metricThree: "تقييم المستخدمين",
    progressTitle: "تقدمك اليوم",
    progressOneLabel: "سلسلة التمرين",
    progressOneValue: "14 يوم",
    progressTwoLabel: "هدف السعرات",
    progressThreeLabel: "الترطيب",
    progressThreeValue: "6 / 8 أكواب",
    featuresTitle: "كل شيء في مكان واحد",
    featureOneTitle: "تمارين ذكية",
    featureOneText: "خطط تدريب مخصصة تتكيف مع هدفك ومستواك الحالي.",
    featureTwoTitle: "متابعة التغذية",
    featureTwoText: "خطط وجباتك وتابع العناصر الغذائية وحافظ على الالتزام.",
    featureThreeTitle: "تحليلات التقدم",
    featureThreeText: "شاهد إنجازاتك بوضوح واستمر في التحسن أسبوعًا بعد أسبوع.",
    highlightOneTitle: "اقتراحات خطط بالذكاء الاصطناعي",
    highlightOneText: "يقترح ليفتر مزيجًا متوازنًا من التمارين والوجبات بناءً على هدفك وتقدمك.",
    highlightTwoTitle: "تذكيرات يومية للعادات",
    highlightTwoText: "حافظ على الاستمرارية عبر تذكيرات للترطيب والتغذية والحركة حسب جدولك.",
    highlightThreeTitle: "تحفيز المجتمع",
    highlightThreeText: "استمد الحافز من مشاركة التقدم والشارات والإنجازات المستمرة.",
    highlightFourTitle: "تحليلات الأداء",
    highlightFourText: "تابع اتجاهات القوة والتحمل وتوازن السعرات يوميًا وأسبوعيًا وشهريًا.",
    howTitle: "ثلاث خطوات لروتين أقوى",
    stepOneTitle: "حدد هدفك",
    stepOneText: "اختر خسارة الدهون أو بناء العضلات أو رفع اللياقة.",
    stepTwoTitle: "اتبع خطتك",
    stepTwoText: "احصل على إرشاد يومي للتمارين والوجبات والروتين.",
    stepThreeTitle: "تابع وتطور",
    stepThreeText: "راقب سلاسل الالتزام والمؤشرات والنتائج مع الوقت.",
    weeklyEyebrow: "خطة الأسبوع",
    weeklyTitle: "إيقاع أسبوعي يُبنى على واقعك",
    weeklyText: "سواء تتدرب 3 أو 6 أيام أسبوعيًا، يساعدك ليفتر على روتين واضح ومتوازن بين الشدة والتعافي.",
    dayMon: "الاثنين",
    dayTue: "الثلاثاء",
    dayWed: "الأربعاء",
    dayThu: "الخميس",
    dayFri: "الجمعة",
    planMon: "جزء علوي + تمارين البطن",
    planTue: "كارديو + مرونة",
    planWed: "قوة الجزء السفلي",
    planThu: "تعافي + تركيز غذائي",
    planFri: "تكييف الجسم كامل",
    testimonialsTitle: "ماذا يقول مستخدمو ليفتر",
    quoteOne: "\"ليفتر خلّاني ألتزم بالرياضة بطريقة أسهل، ولزمت على الروتين بدون تعب.\"",
    quoteOneName: "- إياد",
    quoteTwo: "\"أشوف إنجازي واضح كل أسبوع، وهالشي يعطيني حماس إني أكمل.\"",
    quoteTwoName: "- محمد",
    quoteThree: "\"إن خطتي وجباتي بمكان واحد توفّر علي وقت وايد كل يوم.\"",
    quoteThreeName: "- عمار",
    quoteFour: "\"ترابط التمارين والوجبات سلس، وتجربة التطبيق من أروع ما جربت.\"",
    quoteFourName: "- رنا",
    faqTitle: "أسئلتك بإجابات واضحة",
    faqOneQ: "هل ليفتر مناسب للمبتدئين؟",
    faqOneA: "نعم، يمكنك البدء بخطط مناسبة للمبتدئين والتطور تدريجيًا حسب مستواك.",
    faqTwoQ: "هل يمكنني تخصيص تفضيلات التغذية؟",
    faqTwoA: "أكيد، يدعم ليفتر تفضيلات الطعام والأطعمة غير المفضلة والأهداف الغذائية المخصصة.",
    faqThreeQ: "هل يدعم ليفتر العربية والإنجليزية؟",
    faqThreeA: "نعم، تجربة التطبيق والموقع تدعم اللغتين العربية والإنجليزية.",
    contactTitle: "يسعدنا سماعك",
    contactText: "عندك سؤال أو ملاحظة أو فكرة شراكة؟ يسعدنا نسمع منك.",
    contactDirectLabel: "تواصل مباشر",
    contactSocialLabel: "وسائل التواصل",
    contactEmailLabel: "البريد",
    contactEmail: "support@liftr.app",
    contactPhoneLabel: "الهاتف",
    contactPhone: "+966 50 123 4567",
    contactWhatsApp: "واتساب",
    contactWhatsAppHint: "راسلنا في أي وقت",
    contactInstagram: "إنستغرام",
    contactInstagramHint: "جديدنا ومجتمعنا",
    contactNote: "نرد عادة خلال يوم إلى يومي عمل.",
    ctaTitle: "حمّل ليفتر وابدأ اليوم",
    footerTagline: "اللياقة والتغذية والتقدم في تطبيق واحد بسيط.",
    footerQuickHeading: "روابط سريعة",
    footerRights: "© <span id=\"year\"></span> ليفتر. جميع الحقوق محفوظة.",
    footerPrivacy: "سياسة الخصوصية",
    footerTerms: "الشروط والأحكام",
  },
};

const applyTranslations = (lang) => {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dictionary[key]) {
      node.innerHTML = dictionary[key];
    }
  });

  if (yearEl) {
    const currentYear = new Date().getFullYear();
    const renderedYear = document.getElementById("year");
    if (renderedYear) renderedYear.textContent = currentYear;
  }

  langToggleButtons.forEach((button) => {
    const nextLang = lang === "ar" ? "en" : "ar";
    button.dataset.nextLang = nextLang;
    button.textContent = nextLang.toUpperCase();
  });
};

if (langToggleButtons.length) {
  const savedLang = getSavedLanguage() || document.documentElement.lang || "ar";
  applyTranslations(savedLang);

  langToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = button.dataset.nextLang || "en";
      saveLanguage(nextLang);
      applyTranslations(nextLang);
    });
  });
}

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });

  document.querySelectorAll('.footer-nav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });
}

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px 12% 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

if (countUpItems.length) {
  const animateCount = (element) => {
    const target = Number(element.dataset.target || 0);
    const suffix = target >= 10 ? "k+" : "";
    const duration = 1200;
    const start = performance.now();

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      element.textContent = `${value}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = `${target}${suffix}`;
      }
    };

    requestAnimationFrame(update);
  };

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  countUpItems.forEach((item) => countObserver.observe(item));
}
