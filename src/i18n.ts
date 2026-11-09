export type Lang = 'en' | 'ar';

/** Language of the current page, from its URL. */
export const getLang = (url: URL): Lang => (url.pathname === '/ar' || url.pathname.startsWith('/ar/') ? 'ar' : 'en');

/** Localise an internal path: '/resume' → '/ar/resume', '/#contact' → '/ar/#contact'. */
export const lp = (lang: Lang, path: string): string => {
  if (lang === 'en') return path;
  if (path === '/' ) return '/ar/';
  if (path.startsWith('/#')) return '/ar/' + path.slice(1);
  return '/ar' + path;
};

/** The same page in the other language. */
export const altPath = (url: URL): string => {
  const p = url.pathname;
  if (getLang(url) === 'ar') {
    const rest = p.replace(/^\/ar/, '');
    return rest === '' ? '/' : rest;
  }
  return lp('ar', p);
};

const waText = {
  en: 'Hi Hossam, I found your portfolio and would like to discuss a project.',
  ar: 'مرحباً حسام، وجدت معرض أعمالك وأود مناقشة مشروع.',
};
export const whatsappUrl = (lang: Lang) => `https://wa.me/201015891738?text=${encodeURIComponent(waText[lang])}`;
export const gmailUrl = (lang: Lang) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=hossam.emad.5566@gmail.com&su=${encodeURIComponent(
    lang === 'ar' ? 'استفسار عن مشروع هاردوير' : 'Hardware project enquiry',
  )}&body=${encodeURIComponent(lang === 'ar' ? `مرحباً حسام،\n\nوجدت معرض أعمالك وأود مناقشة مشروع.\n\n` : `Hi Hossam,\n\nI found your portfolio and would like to discuss a project.\n\n`)}`;

export const ui = {
  en: {
    siteTitle: 'Hossam Emad | Hardware Engineer — PCB, BMS & Embedded Firmware',
    siteDescription: 'Hardware Engineer in Giza, Egypt: 4-layer PCB design, high-speed & RF layout, BMS, and FreeRTOS firmware for automotive and industrial IoT. Available for roles and freelance PCB design.',
    name: 'Hossam Emad',
    fullName: 'Hossam Emad Mohamed Osman',
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', notes: 'Notes', resume: 'Resume', contact: 'Contact' },
    switchLabel: 'العربية',
    switchAria: 'اقرأ الموقع بالعربية',
    openMenu: 'Open menu',
    role: 'Hardware Engineer',
    backTop: 'Back to top ↑',
    email: 'Email',
    whatsapp: 'WhatsApp',
    gmailAria: 'Email Hossam via Gmail',
    waAria: 'Chat with Hossam on WhatsApp',
    // home
    eyebrow: 'Hardware Engineer · Embedded Systems',
    h1: 'Designing dependable electronics from idea to production.',
    heroP: '2+ years turning field problems into shipped hardware — 4-layer PCB design, RTOS firmware, EMI mitigation and BMS for automotive and industrial IoT, with ownership from concept through manufacturing and deployment.',
    viewProjects: 'View projects',
    workWithMe: 'Work with me',
    heroMeta: 'Giza, Egypt · Open to roles & freelance projects',
    focus: ['4-layer PCB & signal integrity', 'RTOS firmware (FreeRTOS)', 'BMS & power electronics', 'Automotive & industrial IoT'],
    highlights: 'Highlights',
    aboutEyebrow: 'About',
    aboutH: 'From field problem to shipped board',
    aboutP: [
      "I'm a Hardware Engineer with 2+ years of hands-on work in hardware design, PCB layout, firmware and production support. I find issues in fielded devices, propose the fix, and deliver the improved hardware and firmware revision end-to-end.",
      'My work spans automotive telematics and industrial IoT: 4-layer impedance-controlled PCBs, EMI mitigation, RF layout, battery management and FreeRTOS firmware — from the first schematic to manufacturing files, bring-up and field support.',
    ],
    skillsEyebrow: 'Skills',
    skillsH: 'Core capabilities',
    projectsEyebrow: 'Projects',
    projectsH: 'Engineering case studies',
    projectsNote: 'Company projects are shown as simplified block diagrams and specifications.',
    readCase: 'Read case study →',
    labEyebrow: 'Lab',
    labH: 'Personal projects',
    expEyebrow: 'Experience',
    expH: 'Career',
    eduEyebrow: 'Education',
    eduH: 'Education',
    certsH: 'Certifications',
    showCred: 'Show credential ↗',
    recEyebrow: 'Recommendations',
    recH: 'What colleagues say',
    notesEyebrow: 'Notes',
    notesH: 'Lessons from the bench',
    allNotes: 'All notes →',
    contactEyebrow: 'Contact',
    contactH: 'Have a board to design or review?',
    contactP: "I'm open to hardware and embedded roles (remote or relocation) and to freelance PCB design, design review, and firmware projects. Send a short description of what you're building.",
    emailMe: 'Email me',
    messageLinkedIn: 'Message on LinkedIn',
    resume: 'Resume',
    contactMeta: 'Giza, Egypt',
    // project page
    allProjects: '← All projects',
    myRole: 'My role',
    overview: 'Overview',
    challenge: 'Challenge',
    outcome: 'Outcome',
    lessons: 'Lessons learned',
    keySpecs: 'Key specs',
    gallery: 'Gallery',
    prev: '← Previous',
    next: 'Next →',
    discuss: 'Discuss a project',
    viewResume: 'View resume',
    diagramAlt: 'simplified block diagram',
    diagramCaption: 'Simplified block diagram. Board photos and layouts are not published for company projects.',
    moreProjects: 'More projects',
    // notes
    notesPageTitle: 'Notes | Hossam Emad',
    notesPageDesc: 'Short engineering notes on PCB design, bring-up, firmware and hardware product development.',
    notesIntro: 'Short notes from real projects: PCB design, bring-up, firmware and taking hardware to production.',
    allNotesBack: '← All notes',
    noteCtaH: 'Working on hardware like this?',
    noteCtaP: 'I take on PCB design, design review and firmware projects.',
    getInTouch: 'Get in touch',
    dateLocale: 'en-GB',
    // resume
    resumeTitle: 'Resume | Hossam Emad',
    resumeEyebrow: 'Resume',
    resumeH: 'Hardware Engineer · Embedded Systems',
    resumeP: '2+ years of hands-on experience in hardware design, PCB layout, firmware development, and production support — across automotive telematics, industrial IoT, BMS, and RTOS-based firmware, with full product lifecycle ownership from concept through manufacturing and deployment.',
    downloadCv: 'Download CV (PDF)',
    resumeEduH: 'Education & Certifications',
  },
  ar: {
    siteTitle: 'حسام عماد | مهندس هاردوير — تصميم PCB وأنظمة BMS والبرمجيات المدمجة',
    siteDescription: 'مهندس هاردوير في الجيزة، مصر: تصميم لوحات PCB رباعية الطبقات، وتخطيط الدوائر عالية السرعة والترددات الراديوية، وأنظمة إدارة البطاريات، وبرمجيات FreeRTOS لتطبيقات السيارات وإنترنت الأشياء الصناعي. متاح للوظائف ولمشاريع تصميم PCB الحرة.',
    name: 'حسام عماد',
    fullName: 'حسام عماد محمد عثمان',
    nav: { about: 'نبذة', projects: 'المشاريع', experience: 'الخبرات', notes: 'مقالات', resume: 'السيرة الذاتية', contact: 'تواصل' },
    switchLabel: 'English',
    switchAria: 'Read this site in English',
    openMenu: 'فتح القائمة',
    role: 'مهندس هاردوير',
    backTop: 'العودة للأعلى ↑',
    email: 'البريد',
    whatsapp: 'واتساب',
    gmailAria: 'راسل حسام عبر Gmail',
    waAria: 'تحدث مع حسام على واتساب',
    eyebrow: 'مهندس هاردوير · أنظمة مدمجة',
    h1: 'أصمّم إلكترونيات يُعتمد عليها، من الفكرة حتى الإنتاج.',
    heroP: 'أكثر من عامين في تحويل مشكلات الأجهزة في الميدان إلى منتجات هاردوير تُشحن فعلاً — تصميم PCB رباعي الطبقات، وبرمجيات RTOS، والحد من التداخل الكهرومغناطيسي (EMI)، وأنظمة إدارة البطاريات (BMS) لتطبيقات السيارات وإنترنت الأشياء الصناعي، مع مسؤولية كاملة من الفكرة حتى التصنيع والتشغيل.',
    viewProjects: 'عرض المشاريع',
    workWithMe: 'لنعمل معاً',
    heroMeta: 'الجيزة، مصر · متاح للوظائف والمشاريع الحرة',
    focus: ['PCB رباعي الطبقات وسلامة الإشارة', 'برمجيات RTOS ‏(FreeRTOS)', 'BMS وإلكترونيات القدرة', 'السيارات وإنترنت الأشياء الصناعي'],
    highlights: 'أبرز الأرقام',
    aboutEyebrow: 'نبذة',
    aboutH: 'من مشكلة في الميدان إلى لوحة جاهزة للشحن',
    aboutP: [
      'أنا مهندس هاردوير بخبرة عملية تزيد على عامين في تصميم الهاردوير وتخطيط لوحات PCB والبرمجيات المدمجة ودعم الإنتاج. أكتشف المشكلات في الأجهزة العاملة في الميدان، وأقترح الحل، وأسلّم الإصدار المحسّن من الهاردوير والبرمجيات من البداية إلى النهاية.',
      'يمتد عملي بين التليماتكس في السيارات وإنترنت الأشياء الصناعي: لوحات PCB رباعية الطبقات بمعاوقة متحكَّم بها، والحد من التداخل الكهرومغناطيسي، وتخطيط دوائر الترددات الراديوية، وإدارة البطاريات، وبرمجيات FreeRTOS — من أول مخطط كهربائي حتى ملفات التصنيع والتشغيل الأولي والدعم الميداني.',
    ],
    skillsEyebrow: 'المهارات',
    skillsH: 'القدرات الأساسية',
    projectsEyebrow: 'المشاريع',
    projectsH: 'دراسات حالة هندسية',
    projectsNote: 'تُعرض مشاريع الشركة في صورة مخططات كتلية مبسّطة ومواصفات فقط.',
    readCase: 'اقرأ دراسة الحالة ←',
    labEyebrow: 'المختبر',
    labH: 'مشاريع شخصية',
    expEyebrow: 'الخبرات',
    expH: 'المسيرة المهنية',
    eduEyebrow: 'التعليم',
    eduH: 'التعليم',
    certsH: 'الشهادات',
    showCred: 'عرض الشهادة ↗',
    recEyebrow: 'التوصيات',
    recH: 'ماذا يقول الزملاء',
    notesEyebrow: 'مقالات',
    notesH: 'دروس من طاولة العمل',
    allNotes: 'كل المقالات ←',
    contactEyebrow: 'تواصل',
    contactH: 'لديك لوحة تحتاج إلى تصميم أو مراجعة؟',
    contactP: 'أنا متاح لوظائف الهاردوير والأنظمة المدمجة (عن بُعد أو مع الانتقال)، وللمشاريع الحرة في تصميم PCB ومراجعة التصميمات والبرمجيات المدمجة. أرسل وصفاً مختصراً لما تعمل عليه.',
    emailMe: 'راسلني بالبريد',
    messageLinkedIn: 'راسلني على LinkedIn',
    resume: 'السيرة الذاتية',
    contactMeta: 'الجيزة، مصر',
    allProjects: '→ كل المشاريع',
    myRole: 'دوري',
    overview: 'نظرة عامة',
    challenge: 'التحدي',
    outcome: 'النتيجة',
    lessons: 'الدروس المستفادة',
    keySpecs: 'المواصفات الرئيسية',
    gallery: 'معرض الصور',
    prev: '→ السابق',
    next: 'التالي ←',
    discuss: 'ناقش مشروعاً',
    viewResume: 'عرض السيرة الذاتية',
    diagramAlt: 'مخطط كتلي مبسّط',
    diagramCaption: 'مخطط كتلي مبسّط. لا تُنشر صور اللوحات أو تخطيطاتها لمشاريع الشركة.',
    moreProjects: 'مشاريع أخرى',
    notesPageTitle: 'مقالات | حسام عماد',
    notesPageDesc: 'مقالات هندسية قصيرة عن تصميم PCB والتشغيل الأولي للوحات والبرمجيات المدمجة وتطوير منتجات الهاردوير.',
    notesIntro: 'مقالات قصيرة من مشاريع حقيقية: تصميم PCB، والتشغيل الأولي، والبرمجيات المدمجة، والانتقال بالهاردوير إلى الإنتاج.',
    allNotesBack: '→ كل المقالات',
    noteCtaH: 'تعمل على هاردوير مشابه؟',
    noteCtaP: 'أتولى مشاريع تصميم PCB ومراجعة التصميمات والبرمجيات المدمجة.',
    getInTouch: 'تواصل معي',
    dateLocale: 'ar-EG',
    resumeTitle: 'السيرة الذاتية | حسام عماد',
    resumeEyebrow: 'السيرة الذاتية',
    resumeH: 'مهندس هاردوير · أنظمة مدمجة',
    resumeP: 'خبرة عملية تزيد على عامين في تصميم الهاردوير وتخطيط لوحات PCB وتطوير البرمجيات المدمجة ودعم الإنتاج — في التليماتكس للسيارات وإنترنت الأشياء الصناعي وأنظمة إدارة البطاريات وبرمجيات RTOS، مع مسؤولية كاملة عن دورة حياة المنتج من الفكرة حتى التصنيع والتشغيل.',
    downloadCv: 'تحميل السيرة الذاتية (PDF، بالإنجليزية)',
    resumeEduH: 'التعليم والشهادات',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
