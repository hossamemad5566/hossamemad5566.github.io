import type { Lang } from '../i18n';

const skills = {
  hw: ['Multi-layer PCB design (up to 4 layers)', 'Stackup planning & controlled impedance (USB, CAN, RF)', 'EMI mitigation', 'RF subsystem design', 'Battery Management Systems (3-cell)', 'Board bring-up & field debugging', 'Gerber / BOM / CPL preparation', 'Fab coordination (JLCPCB)'],
  fw: ['Embedded C (production-grade)', 'FreeRTOS', 'Python (prototyping & validation)', 'SMS / MQTT / HTTP', 'GPS data processing', 'FOTA', 'Geofencing algorithms', 'Root-cause analysis'],
  mcu: ['STM32 (F4)', 'ESP32 / ESP32-S3', 'ESP8266', 'SIMCom 4G modules', 'AVR'],
  proto: ['CAN (High-Speed, SWCAN)', 'USB', 'UART / SPI / I²C', 'RS232 / RS485', 'Ethernet', 'Wi-Fi / BLE', '4G (SIMCom)', 'ADC / GPIO'],
  tools: ['Altium Designer', 'KiCad', 'EAGLE', 'EasyEDA Pro', 'Autodesk Fusion 360', 'LTspice', 'MATLAB / Simulink'],
};

const skillsAr = {
  hw: ['تصميم PCB متعدد الطبقات (حتى 4 طبقات)', 'تخطيط الطبقات والمعاوقة المتحكَّم بها (USB وCAN وRF)', 'الحد من التداخل الكهرومغناطيسي EMI', 'تصميم دوائر الترددات الراديوية RF', 'أنظمة إدارة البطاريات (3 خلايا)', 'التشغيل الأولي للوحات وتتبع الأعطال الميدانية', 'تجهيز ملفات Gerber وBOM وCPL', 'التنسيق مع مصانع اللوحات (JLCPCB)'],
  fw: ['لغة C للأنظمة المدمجة (مستوى إنتاج)', 'FreeRTOS', 'Python (للنماذج الأولية والتحقق)', 'SMS / MQTT / HTTP', 'معالجة بيانات GPS', 'التحديث عن بُعد FOTA', 'خوارزميات السياج الجغرافي', 'تحليل الأسباب الجذرية'],
  mcu: skills.mcu,
  proto: skills.proto,
  tools: skills.tools,
};

export const skillGroups = (lang: Lang) => {
  const s = lang === 'ar' ? skillsAr : skills;
  const L = lang === 'ar'
    ? ['الهاردوير وتصميم PCB', 'البرمجيات المدمجة', 'المتحكمات والمنصات', 'البروتوكولات والواجهات', 'الأدوات']
    : ['Hardware & PCB', 'Firmware & Software', 'Microcontrollers & Platforms', 'Protocols & Interfaces', 'Tools'];
  return [
    { label: L[0], skills: s.hw },
    { label: L[1], skills: s.fw },
    { label: L[2], skills: s.mcu },
    { label: L[3], skills: s.proto },
    { label: L[4], skills: s.tools },
  ];
};

type Item = { period: string; title: string; org: string; body: string };

const expEn: Item[] = [
  { period: 'Feb 2026 — Present', title: 'Hardware Engineer', org: 'SEITech Solutions (Acquired by T&S Group), Smart Village, Cairo', body: 'Own hardware from concept through manufacturing and field support for automotive telematics and industrial IoT products, including Ethernet/RS485 industrial controllers and an STM32F407 + ESP32-S3 controller platform.' },
  { period: 'Jul 2024 — Feb 2026', title: 'Embedded Systems Engineer', org: 'SEITech Solutions (Acquired by T&S Group), Smart Village, Cairo', body: 'Redesigned the SEIFence IoT tracker (V1 field issues across ~200 units → 4-layer V2, 120+ units in production), led ForWheelz automotive telematics ECU hardware, and redesigned the SEITech Box industrial gateway with its 3-cell BMS backup module.' },
  { period: 'Oct 2026 — Present', title: 'Freelance Hardware Designer', org: 'Remote · client projects', body: 'Designed an ESP32-C6 + W5500 Ethernet node for a client: architecture, design notes with review checklists, hierarchical KiCad schematic, BOM and PCB layout.' },
  { period: 'Jan 2024 — Feb 2024', title: 'Embedded Systems Engineer (Short-term contract)', org: 'Noziqs Medical, Nasr City', body: 'Developed embedded firmware for operating tables, improving system functionality by 30% and reducing device downtime by 20% through board-level troubleshooting and root-cause analysis.' },
];
const expAr: Item[] = [
  { period: 'فبراير 2026 — حتى الآن', title: 'مهندس هاردوير', org: 'SEITech Solutions (استحوذت عليها T&S Group)، القرية الذكية، القاهرة', body: 'مسؤول عن الهاردوير من الفكرة حتى التصنيع والدعم الميداني لمنتجات التليماتكس للسيارات وإنترنت الأشياء الصناعي، ومنها وحدات تحكم صناعية بواجهات Ethernet وRS485، ومنصة تحكم مبنية على STM32F407 وESP32-S3.' },
  { period: 'يوليو 2024 — فبراير 2026', title: 'مهندس أنظمة مدمجة', org: 'SEITech Solutions (استحوذت عليها T&S Group)، القرية الذكية، القاهرة', body: 'أعدت تصميم جهاز التتبع SEIFence (مشكلات ميدانية في الإصدار الأول عبر نحو 200 وحدة ← إصدار ثانٍ بلوحة رباعية الطبقات وأكثر من 120 وحدة في الإنتاج)، وقدت تصميم هاردوير وحدة التليماتكس ForWheelz للسيارات، وأعدت تصميم البوابة الصناعية SEITech Box مع وحدة الطاقة الاحتياطية BMS ثلاثية الخلايا.' },
  { period: 'أكتوبر 2026 — حتى الآن', title: 'مصمم هاردوير مستقل', org: 'عن بُعد · مشاريع لعملاء', body: 'صمّمت لعميل وحدة Ethernet مبنية على ESP32-C6 وW5500: البنية، ووثيقة التصميم بقوائم المراجعة، والمخطط الهرمي على KiCad، وقائمة المكونات، وتخطيط اللوحة.' },
  { period: 'يناير 2024 — فبراير 2024', title: 'مهندس أنظمة مدمجة (عقد قصير المدة)', org: 'Noziqs Medical، مدينة نصر', body: 'طوّرت البرمجيات المدمجة لطاولات العمليات الجراحية، ما حسّن أداء النظام بنسبة 30% وقلّل توقف الأجهزة بنسبة 20% عبر تتبع الأعطال على مستوى اللوحة وتحليل أسبابها الجذرية.' },
];

const eduEn: Item[] = [
  { period: 'Feb 2024 — Jul 2024', title: 'Automotive Embedded Systems Diploma', org: 'NTI, New Capital', body: 'Embedded C, RTOS, STM32 & AVR, CAN/LIN/UART/SPI/I²C, bootloader/FOTA. Graduation project: a custom STM32F407 + ESP32-S3 industrial IoT controller platform.' },
  { period: 'Sep 2017 — Jul 2022', title: 'B.Sc. Electronics and Control Engineering', org: 'Menoufia University — Grade: Very Good', body: '' },
];
const eduAr: Item[] = [
  { period: 'فبراير 2024 — يوليو 2024', title: 'دبلومة الأنظمة المدمجة للسيارات', org: 'المعهد القومي للاتصالات (NTI)، العاصمة الإدارية الجديدة', body: 'لغة C للأنظمة المدمجة، وRTOS، وSTM32 وAVR، وCAN/LIN/UART/SPI/I²C، وbootloader/FOTA. مشروع التخرج: منصة تحكم صناعية لإنترنت الأشياء مبنية على STM32F407 وESP32-S3.' },
  { period: 'سبتمبر 2017 — يوليو 2022', title: 'بكالوريوس هندسة الإلكترونيات والتحكم', org: 'جامعة المنوفية — التقدير: جيد جداً', body: '' },
];

export const experience = (lang: Lang) => (lang === 'ar' ? expAr : expEn);
export const education = (lang: Lang) => (lang === 'ar' ? eduAr : eduEn);

export const metricsAr = [
  { value: '120+', label: 'وحدة تتبع انتقلت إلى الإنتاج بالإصدار الثاني' },
  { value: '~200', label: 'وحدة ميدانية جرى تشخيصها لإعادة التصميم' },
  { value: '3× CAN', label: 'وحدة تليماتكس للسيارات بقيادتي لتصميم الهاردوير' },
  { value: '4', label: 'طبقات في تصميمات PCB بمعاوقة متحكَّم بها' },
  { value: '7', label: 'لوحات صمّمتها من البداية حتى النهاية' },
];

export const labAr = [
  {
    title: 'مفتاح Wi-Fi ذكي',
    status: 'منتجي الخاص · 30 وحدة مُصنّعة',
    body: 'مفتاح بثلاث قنوات مبني على ESP8266 للتحكم في الأحمال الكهربائية محلياً دون إنترنت أو عن بُعد عبر Wi-Fi. قسم جهد عالٍ معزول، وتصميم على KiCad، واختبار استمر 5 أشهر.',
    href: '/ar/projects/smart-wifi-switch',
    tags: ['ESP8266', 'AC isolation', 'KiCad'],
  },
  {
    title: 'وحدة تحكم ذكية في التكييف',
    status: 'قيد التصميم',
    body: 'وحدة تحكم مبنية على ESP32 لتشغيل التكييف حسب وجود الأشخاص: استشعار الحركة PIR، وتحكم عام بالأشعة تحت الحمراء عبر وحدة RMT، ومهام FreeRTOS، وإرسال البيانات عبر MQTT.',
    href: '',
    tags: ['ESP32', 'IR / RMT', 'MQTT', 'FreeRTOS'],
  },
];
