// Site-wide settings.

// Free, privacy-friendly visitor counter (https://www.goatcounter.com).
// Create a free account, then put your site code here, e.g. 'hossamemad'.
// Leave empty to disable analytics.
export const goatcounterCode = 'hossamemad';

export const contact = {
  email: 'hossam.emad.5566@gmail.com',
  whatsapp: 'https://wa.me/201015891738?text=Hi%20Hossam%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  linkedin: 'https://linkedin.com/in/hossamemad5566',
  github: 'https://github.com/hossamemad5566',
};

export const metrics = [
  { value: '120+', label: 'tracker units moved to production V2' },
  { value: '~200', label: 'field units diagnosed for the V2 redesign' },
  { value: '3× CAN', label: 'automotive telematics ECU, hardware lead' },
  { value: '4-layer', label: 'impedance-controlled PCB designs' },
  { value: '7', label: 'boards designed end-to-end' },
];

export const certifications = [
  { title: 'High-Speed Board Design — System on Module', org: 'EsteemPCB · Udemy', date: 'Oct 2026', url: 'https://ude.my/UC-f81f84ff-96dd-420b-ac97-c30e4c504b81' },
  { title: 'Stateflow Onramp', org: 'MathWorks', date: 'Sep 2026', url: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=f94ad780-be14-42cf-acb5-5294132abbeb' },
  { title: 'Simulink Onramp', org: 'MathWorks', date: 'Aug 2026', url: 'https://matlabacademy.mathworks.com/progress/share/report.html?id=ba69a983-9170-4c4f-be01-89cfeb77fe7a' },
  { title: 'MATLAB Onramp', org: 'MathWorks', date: 'Aug 2026', url: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=69df688a-66ec-4616-a059-52e30a2238c5' },
  { title: 'Arduino: Electronics Circuit, PCB Design & IoT Programming', org: 'Udemy', date: 'Mar 2026', url: 'https://ude.my/UC-8d8edff4-78ea-4c54-a64a-4b07c3b0807' },
  { title: 'Crash Course Electronics & PCB Design (112 h)', org: 'Udemy', date: 'Jan 2026', url: 'https://ude.my/UC-e857f8d9-f60c-4224-9807-6b52ecce28f3' },
];

// Recommendations shown on the home page. The section stays hidden while this list is empty.
// Add real quotes only, e.g. copied from LinkedIn recommendations, with the person's permission:
// { quote: '…', name: 'Full Name', role: 'Senior Embedded Engineer, Company' },
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const lab = [
  {
    title: 'Smart Wi-Fi Switch',
    status: 'Own product · 30 units built',
    body: '3-channel ESP8266 switch for AC loads that works locally without internet or remotely over Wi-Fi. Isolated mains section, KiCad design, tested over 5 months.',
    href: '/projects/smart-wifi-switch',
    tags: ['ESP8266', 'AC isolation', 'KiCad'],
  },
  {
    title: 'Smart AC Controller',
    status: 'In design',
    body: 'ESP32 controller for occupancy-aware air conditioning: PIR occupancy sensing, universal IR control generated with the RMT peripheral, FreeRTOS tasks, and MQTT reporting.',
    href: '',
    tags: ['ESP32', 'IR / RMT', 'MQTT', 'FreeRTOS'],
  },
];
