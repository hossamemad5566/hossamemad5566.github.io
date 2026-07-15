export interface Project {
  title: string;
  summary: string;
  tags: string[];
  href: string;
  image: string;
  images: string[];
  accent: string;
  overview: string;
  challenge: string;
  outcome: string;
}

export const featuredProjects: Project[] = [
  {
    title: 'SEIFence Gen2',
    summary: 'A field-deployed IoT tracking device with GPS telemetry, firmware upgrades, and production support for large-scale rollout.',
    tags: ['ESP32', 'RTOS', 'GPS', 'Industrial IoT'],
    href: '/projects/seifence',
    image: '/images/projects/seifence/image (1).png',
    images: [
      '/images/projects/seifence/image (1).png',
      '/images/projects/seifence/image (2).png',
      '/images/projects/seifence/image (3).png',
      '/images/projects/seifence/shared image (2).jpg',
      '/images/projects/seifence/shared image (3).jpg',
      '/images/projects/seifence/Untitled picture.png',
      '/images/projects/seifence/buttom.png',
    ],
    accent: 'from-sky-500/30 to-cyan-400/10',
    overview: 'I joined the SEIFence program during fabrication and early deployment, diagnosed production issues, and led the transition from the first hardware revision to an improved Version 2.',
    challenge: 'The device needed reliable tracking, strong field durability, and a firmware stack that could support SMS, MQTT, HTTP, GPS processing, FOTA, and geofencing in a compact enclosure.',
    outcome: 'The upgraded system reduced cost and improved performance while supporting the deployment of 120 manufactured units with aftersales maintenance coverage.',
  },
  {
    title: 'SEITech Box',
    summary: 'An industrial gateway and backup-power platform combining BMS, power management, and embedded connectivity for edge applications.',
    tags: ['BMS', 'Power', 'ESP32-S3', 'Industrial'],
    href: '/projects/seitech-box',
    image: '/images/projects/seitech box/SmartBox_3D_top.png',
    images: [
      '/images/projects/seitech box/SmartBox_3D_top.png',
      '/images/projects/seitech box/SmartBox_3D_buttom.png',
      '/images/projects/seitech box/SmartBox_L_top.png',
      '/images/projects/seitech box/SmartBox_L_buttom.png',
      '/images/projects/seitech box/SmartBox_L_in1.png',
      '/images/projects/seitech box/SmartBox_L_in2.png',
      '/images/projects/seitech box/real PCB top.jpg',
      '/images/projects/seitech box/real PCB buttom.jpg',
    ],
    accent: 'from-emerald-500/30 to-lime-400/10',
    overview: 'This project combined embedded gateway design, battery backup power, and industrial communication to deliver a rugged edge platform for field deployment.',
    challenge: 'The design had to integrate power management, thermal stability, and a reliable firmware interface while keeping the enclosure compact and serviceable.',
    outcome: 'The completed solution validated both hardware and firmware performance and demonstrated dependable operation across real-world industrial test conditions.',
  },
  {
    title: 'SEITech Box BMS',
    summary: 'A battery management subsystem built as a slave module for intelligent power systems and SafeCharge coordination.',
    tags: ['BMS', 'Battery', 'Power Electronics', 'Embedded'],
    href: '/projects/seitech-box-bms',
    image: '/images/projects/seitech box  BMS/slave module top.png',
    images: [
      '/images/projects/seitech box  BMS/slave module top.png',
      '/images/projects/seitech box  BMS/slave module buttom.png',
      '/images/projects/seitech box  BMS/slave module fabrication .jpg',
    ],
    accent: 'from-amber-500/30 to-orange-400/10',
    overview: 'I developed the slave battery module for a wider SEITech power platform, focusing on cell-level monitoring, balancing coordination, and reliable field cabling.',
    challenge: 'The project required precise sensing, isolation, and rugged design to ensure safe operation across a range of battery states and environmental conditions.',
    outcome: 'The module was finalized with assembly documentation and test coverage to support integration into the full SEITech backup-power system.',
  },
  {
    title: 'Access Control Board',
    summary: 'A production-ready remote I/O controller designed for industrial automation with Ethernet, RS485, USB, and relay control.',
    tags: ['STM32', 'Ethernet', 'RS485', 'Industrial Automation'],
    href: '/projects/access-control-board',
    image: '/images/projects/Access control board/slave module top.png',
    images: [
      '/images/projects/Access control board/slave module top.png',
      '/images/projects/Access control board/slave module buttom.png',
      '/images/projects/Access control board/slave module fabrication .jpg',
    ],
    accent: 'from-violet-500/30 to-fuchsia-400/10',
    overview: 'I designed the complete hardware architecture around the STM32F401, integrating industrial communication interfaces, power management, and protection features for remote monitoring and control.',
    challenge: 'The module needed to operate reliably in industrial environments while supporting isolated communications, non-volatile storage, and safe relay-driven outputs.',
    outcome: 'The design was carried through schematic capture, PCB layout review, BOM preparation, and manufacturing documentation for production support.',
  },
  {
    title: 'HW Inventor Diploma Project',
    summary: 'A diploma-level hardware innovation project with 3D assemblies, hierarchical schematic design, and full fabrication documentation.',
    tags: ['Hardware Design', 'PCB', 'Assembly', 'Documentation'],
    href: '/projects/hw-inventor-diploma',
    image: '/images/projects/HW inventor diploma graduation project/top 3d.png',
    images: [
      '/images/projects/HW inventor diploma graduation project/top 3d.png',
      '/images/projects/HW inventor diploma graduation project/buttom 3D.png',
      '/images/projects/HW inventor diploma graduation project/HW_inventor__Assembly_1.png',
      '/images/projects/HW inventor diploma graduation project/HW_inventor__Assembly_2.png',
      '/images/projects/HW inventor diploma graduation project/HW_inventor__Assembly_3.png',
      '/images/projects/HW inventor diploma graduation project/HW_inventor__Assembly_4.png',
      '/images/projects/HW inventor diploma graduation project/system sch hirarical sheet.png',
    ],
    accent: 'from-slate-500/30 to-indigo-400/10',
    overview: 'This graduation project captured a complete hardware invention workflow, from system architecture through mechanical assembly and schematic documentation.',
    challenge: 'The work demanded clear hierarchy across complex circuits, mechanical packaging, and deliverables suitable for academic review and practical assembly.',
    outcome: 'The project produced a polished hardware package with assembly visuals, manufacturing-ready schematics, and supporting documentation.',
  },
  {
    title: 'Smart SW',
    summary: 'An intelligent switch controller platform with firmware-driven logic and user-friendly embedded control visuals.',
    tags: ['Embedded C', 'Firmware', 'Control Systems', 'IoT'],
    href: '/projects/smart-sw',
    image: '/images/projects/smart sw/image (1).png',
    images: [
      '/images/projects/smart sw/image (1).png',
      '/images/projects/smart sw/image (2).png',
      '/images/projects/smart sw/image (3).png',
      '/images/projects/smart sw/Untitled picture.png',
    ],
    accent: 'from-cyan-500/30 to-blue-400/10',
    overview: 'I developed a smart switch product concept with embedded firmware, input sensing, and a polished hardware layout for responsive control.',
    challenge: 'The product needed a compact PCB, reliable switching logic, and firmware support for both manual and automated operation modes.',
    outcome: 'The design was documented with board visuals and firmware-ready schematics to support prototype build and iteration.',
  },
  {
    title: 'ForWheelz',
    summary: 'An embedded hardware and telemetry interface for a mobility-focused system, optimized for sensor integration and vehicle-level diagnostics.',
    tags: ['Automotive', 'Sensors', 'PCB Design', 'Firmware'],
    href: '/projects/forwheelz',
    image: '/images/projects/forwheelz/top board .png',
    images: [
      '/images/projects/forwheelz/top board .png',
      '/images/projects/forwheelz/buttom board .png',
      '/images/projects/forwheelz/image (4).png',
      '/images/projects/forwheelz/image (5).png',
      '/images/projects/forwheelz/image (6).png',
      '/images/projects/forwheelz/image (7).png',
      '/images/projects/forwheelz/image (8).png',
      '/images/projects/forwheelz/image (9).png',
      '/images/projects/forwheelz/image (10).png',
    ],
    accent: 'from-rose-500/30 to-pink-400/10',
    overview: 'This project delivered a board-level solution for mobility electronics, with attention to signal integrity, sensor data capture, and durable assembly.',
    challenge: 'The system required clean routing for mixed-signal interfaces and a layout that supported both diagnostics and robust environmental operation.',
    outcome: 'The completed design provided a strong foundation for next-stage validation and real-world testing in mobility applications.',
  },
];
