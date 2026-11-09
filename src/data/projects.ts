export interface Spec {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  chip: string;
  summary: string;
  tags: string[];
  href: string;
  image: string;
  images: string[];
  specs: Spec[];
  role: string;
  overview: string;
  challenge: string;
  outcome: string;
  lessons: string[];
  lab?: boolean;
}

const p = (slug: string) => `/projects/${slug}`;

export const allProjects: Project[] = [
  {
    slug: 'seifence',
    title: 'SEIFence Gen2 — IoT Field Tracking Device',
    category: 'IoT · Hardware + Firmware',
    chip: 'Cellular + GNSS SoC',
    summary: 'A 4-layer RTOS-based IoT tracker with GPS, GSM, SMS/MQTT/HTTP connectivity, FOTA, and geofencing — redesigned end-to-end after Version 1 field issues.',
    tags: ['Cellular IoT', 'FreeRTOS', 'GPS/GSM', '4-Layer PCB', 'FOTA'],
    href: p('seifence'),
    image: '/images/projects/seifence/diagram.svg',
    images: ['/images/projects/seifence/diagram.svg'],
    specs: [
      { label: 'PCB', value: '4-layer, Hardware V2' },
      { label: 'Firmware', value: 'FreeRTOS in C (Python prototype first)' },
      { label: 'Connectivity', value: 'GSM — SMS / MQTT / HTTP, GPS' },
      { label: 'Features', value: 'FOTA, geofencing' },
      { label: 'Scale', value: '~200 V1 units diagnosed → 120+ V2 units in production' },
    ],
    role: 'Diagnosed the V1 field failures, proposed and designed Hardware V2, wrote the production firmware, and continue to support every fielded unit.',
    overview: 'SEIFence is an IoT tracking and control device deployed across roughly 200 field units at SEITech Solutions. After Version 1 surfaced hardware, mechanical, and firmware issues during early deployment, I independently proposed, designed, and delivered a complete Hardware Version 2 on a 4-layer PCB, reducing cost while improving reliability. The firmware stack was built twice: first as a Python-based version for functional validation, then rewritten as an optimized, production-grade RTOS (FreeRTOS) firmware in C handling SMS/MQTT/HTTP communication, GPS data processing, FOTA updates, and a geofencing algorithm.',
    challenge: 'The main challenge was combining reliable positioning, cellular connectivity, and resilient RTOS-based firmware inside a compact, cost-reduced enclosure — while also tracing and fixing a GPS antenna stability problem that was affecting fielded units.',
    outcome: 'The GPS antenna issue was resolved with a post-fabrication PCB fix (drilled holes plus through-hole pads), and 120+ units were successfully transitioned to production Version 2, with ongoing aftersales hardware maintenance and debugging support for all fielded devices.',
    lessons: [
      'Prove the behaviour in a fast prototype first; the production C rewrite then has a clear reference to test against.',
      'RF problems can look like firmware bugs — measure the antenna path before rewriting code.',
      'A planned rework can rescue a built batch, but the real fix belongs in the next layout revision.',
    ],
  },
  {
    slug: 'forwheelz',
    title: 'ForWheelz — Automotive Telematics ECU',
    category: 'Automotive · Hardware lead',
    chip: 'STM32',
    summary: 'An STM32-based automotive telematics ECU with 3 CAN interfaces, USB, RF, and power management, built on a 2-board stacked 4-layer impedance-controlled PCB.',
    tags: ['STM32', 'CAN Bus', 'RF/GSM', 'Automotive', 'EMI Mitigation'],
    href: p('forwheelz'),
    image: '/images/projects/forwheelz/diagram.svg',
    images: ['/images/projects/forwheelz/diagram.svg'],
    specs: [
      { label: 'MCU', value: 'STM32' },
      { label: 'PCB', value: '2-board stack, 4-layer, impedance-controlled' },
      { label: 'Interfaces', value: '3× CAN (High-Speed / SWCAN), USB' },
      { label: 'RF', value: 'GSM antenna, matching network, constrained RF routing' },
      { label: 'EMC', value: 'Ground stitching, return-path optimisation' },
    ],
    role: 'Hardware lead for the full lifecycle: architecture, schematic, layout, enclosure integration, manufacturing package, supplier communication and field optimisation.',
    overview: 'I led the full hardware development lifecycle for this STM32-based automotive telematics ECU, which integrates 3 CAN interfaces, USB, an RF subsystem, and automotive-grade power management. The design uses a 2-board stacked, 4-layer impedance-controlled PCB with an integrated GSM antenna, matching network, and carefully constrained RF routing.',
    challenge: 'Automotive signal integrity demanded EMI mitigation techniques such as ground stitching and return path optimization, alongside compact enclosure integration under strict automotive space and thermal constraints.',
    outcome: 'The ECU reached a validated, manufacturable state with a complete production package and supplier coordination, and was supported through system validation and field optimization during deployment.',
    lessons: [
      'Decide the stack-up and return paths before routing CAN and RF, not after.',
      'In a compact automotive enclosure, mechanical fit is part of the electrical design.',
    ],
  },
  {
    slug: 'seitech-box',
    title: 'SEITech Box — Industrial IoT Gateway',
    category: 'Industrial IoT · Redesign',
    chip: 'ESP32-S3',
    summary: 'A reverse-engineered and redesigned industrial IoT gateway (Edge Box ESP100) built around ESP32-S3, with Wi-Fi, BLE, 4G, GPS, RS232/RS485, and full power management.',
    tags: ['ESP32-S3', 'RS485', 'Wi-Fi/BLE', '4G/GPS', 'KiCad'],
    href: p('seitech-box'),
    image: '/images/projects/seitech-box/diagram.svg',
    images: ['/images/projects/seitech-box/diagram.svg'],
    specs: [
      { label: 'MCU', value: 'ESP32-S3' },
      { label: 'Connectivity', value: 'Wi-Fi, BLE, SIMCom 4G, GPS' },
      { label: 'Industrial I/O', value: 'RS232, RS485, ADC, GPIO' },
      { label: 'Power', value: 'Power management + 3-cell BMS backup' },
      { label: 'Tools', value: 'KiCad' },
    ],
    role: 'Reverse-engineered the existing gateway, defined the ESP32-S3 architecture, selected the enclosure, and completed schematic, layout and fabrication files.',
    overview: 'I reverse-engineered the existing Edge Box industrial gateway hardware and redesigned it around an ESP32-S3 platform, integrating Wi-Fi, BLE, SIMCom 4G, GPS, RS232/RS485, ADC, GPIO, and power management circuits into a single rugged gateway for industrial telemetry.',
    challenge: 'The project required strong industrial protocol support, long-term communications stability, and interface flexibility across multiple transport layers — all while working from an existing product to reverse-engineer and improve, rather than a clean-sheet design.',
    outcome: 'I selected the enclosure and completed schematic capture, PCB layout, and fabrication file preparation in KiCad, delivering a gateway with a strong communications foundation for remote industrial monitoring and practical field deployment.',
    lessons: [
      'Reverse-engineering first shows what the old design got right — keep those parts.',
      'Industrial boards fail at the connectors, so that is where protection belongs.',
    ],
  },
  {
    slug: 'seitech-bms',
    title: '3-Cell BMS & Backup Power Module',
    category: 'Power · BMS',
    chip: '3S Li-ion BMS',
    summary: 'A 3-cell battery management system and DC-DC backup power module for the SEITech Box, providing seamless power during inverter outages with real-time monitoring.',
    tags: ['BMS', 'Power Electronics', 'DC-DC', 'Protection'],
    href: p('seitech-bms'),
    image: '/images/projects/seitech-bms/diagram.svg',
    images: ['/images/projects/seitech-bms/diagram.svg'],
    specs: [
      { label: 'Pack', value: '3 cells in series' },
      { label: 'Power path', value: 'Controlled DC-DC, seamless switchover' },
      { label: 'Monitoring', value: 'Real-time charge / discharge' },
      { label: 'Use', value: 'Backup for an industrial gateway during inverter outages' },
      { label: 'Build', value: 'Manual assembly, bring-up and full validation' },
    ],
    role: 'Designed the power path and BMS, assembled the boards by hand, and validated the module before customer delivery.',
    overview: 'I designed a 3-cell battery management system and backup power module for the Edge Box ESP100 industrial gateway, providing seamless backup power during inverter outages. The design implements a controlled DC-DC power path with real-time charging and discharging monitoring.',
    challenge: 'Balancing protection accuracy, high-current switching, and a practical layout for manual assembly and validation was the central constraint, since the module needed to fit within the existing gateway platform and hand off power seamlessly during outages.',
    outcome: 'I completed manual assembly, board bring-up, and full validation ahead of customer delivery, resulting in a robust, safe power stage and monitoring layer that improved the reliability of the overall gateway system.',
    lessons: [
      'Test every transition — mains off, mains back, battery low — not only the steady state.',
      'Protection belongs in the BMS hardware, not in firmware.',
    ],
  },
  {
    slug: 'access-control-board',
    title: 'Access Control Board — Industrial Ethernet & RS485 I/O Controller',
    category: 'Industrial control',
    chip: 'STM32F401',
    summary: 'A production-ready STM32F401RCT6 controller with Ethernet, isolated RS485, dual EEPROM logging, and a multi-rail protected power architecture for industrial automation.',
    tags: ['STM32F401', 'Ethernet', 'RS485', 'I²C', 'Industrial'],
    href: p('access-control-board'),
    image: '/images/projects/access-control-board/diagram.svg',
    images: ['/images/projects/access-control-board/diagram.svg'],
    specs: [
      { label: 'MCU', value: 'STM32F401RCT6, Cortex-M4 @ 84 MHz' },
      { label: 'Networking', value: 'Ethernet (ENC28J60), isolated RS485 (MAX3485 + optocouplers)' },
      { label: 'Storage', value: '2× 24LC512 EEPROM over I²C' },
      { label: 'Power', value: '12 V → 5 V (LM2596S) → 3.3 V (AMS1117), TVS / ESD / surge' },
      { label: 'Deliverables', value: 'Gerber, pick-and-place, assembly drawings, LCSC BOM' },
    ],
    role: 'Designed the controller from schematic capture through layout review, BOM and the complete production package.',
    overview: 'This production-ready embedded controller is built around an STM32F401RCT6 (84 MHz Cortex-M4) for industrial automation and remote monitoring. It implements Ethernet connectivity via ENC28J60/RJ45 and an isolated RS485 interface (MAX3485 with optocoupler isolation) for reliable industrial networking, plus dual 24LC512 EEPROM devices over I²C for non-volatile data logging and a USB Type-C programming/debugging interface with independent power.',
    challenge: 'The design needed a multi-rail power architecture (12V input, 5V via LM2596S, 3.3V via AMS1117 LDO) with comprehensive protection — TVS, ESD, over-voltage/surge suppression, and decoupling — alongside isolated relay-driving circuitry and digital I/O monitoring with multi-LED diagnostics.',
    outcome: 'I delivered a complete production package: Gerbers, pick-and-place files, assembly drawings, an LCSC-sourced BOM, and revision-controlled design archives, ready for manufacturing and field deployment.',
    lessons: [
      'Spend the protection budget where cables enter the board.',
      'Isolation on the field bus keeps ground differences away from the logic.',
    ],
  },
  {
    slug: 'hw-inventor',
    title: 'Industrial IoT Controller & Hardware Development Platform',
    category: 'NTI graduation project',
    chip: 'STM32F407 + ESP32-S3',
    summary: 'A custom STM32F407 + ESP32-S3 industrial controller with Ethernet, CAN, RS-485, USB-C, QSPI Flash, and environmental sensors — my NTI diploma graduation project.',
    tags: ['STM32F407', 'ESP32-S3', 'CAN/RS-485', 'KiCad'],
    href: p('hw-inventor'),
    image: '/images/projects/hw-inventor/hero.webp',
    images: [
      '/images/projects/hw-inventor/hero.webp',
      '/images/projects/hw-inventor/detail-1.png',
      '/images/projects/hw-inventor/detail-2.png',
      '/images/projects/hw-inventor/gallery-1.png',
      '/images/projects/hw-inventor/gallery-2.png',
      '/images/projects/hw-inventor/gallery-3.png',
      '/images/projects/hw-inventor/gallery-4.png',
    ],
    specs: [
      { label: 'MCUs', value: 'STM32F407 + ESP32-S3' },
      { label: 'Interfaces', value: 'Ethernet (ENC28J60), CAN, RS-485, USB Type-C, SPI, QSPI flash' },
      { label: 'Extras', value: 'Environmental sensors, expansion headers' },
      { label: 'Design', value: 'Multi-sheet hierarchical schematic in KiCad' },
      { label: 'Context', value: 'NTI Automotive Embedded Systems Diploma, 2024' },
    ],
    role: 'Designed the whole platform — schematic, layout, power and protection — then assembled, flashed and brought it up.',
    overview: 'This custom Industrial IoT controller and hardware development platform is built around an STM32F407 and ESP32-S3, integrating Ethernet (ENC28J60), CAN, RS-485, USB Type-C, QSPI Flash, environmental sensors, and expansion interfaces. I designed the complete multi-sheet schematic, PCB layout, power architecture, and protection circuitry in KiCad.',
    challenge: 'Bringing together high-speed interfaces — Ethernet, CAN, RS-485, USB, SPI, and QSPI — on a single expandable development platform required careful sheet-by-sheet schematic organization and disciplined power/protection planning.',
    outcome: 'I carried the board through PCB fabrication review, assembly, firmware flashing, hardware bring-up, debugging, and system validation, delivering a working hardware development platform as my NTI Automotive Embedded Systems Diploma graduation project.',
    lessons: [
      'Hierarchical sheets keep a many-interface board reviewable.',
      'Bring up one interface at a time and log every fix — the log becomes the Rev B list.',
    ],
  },
  {
    slug: 'smart-wifi-switch',
    title: 'Smart Wi-Fi Switch — ESP8266 IoT Relay',
    category: 'Own product',
    chip: 'ESP8266',
    summary: 'My own 3-channel smart switch: controls AC loads locally without internet, or remotely over Wi-Fi — 30 units built and tested over 5 months.',
    tags: ['ESP8266', 'IoT', 'KiCad', 'AC Isolation'],
    href: p('smart-wifi-switch'),
    image: '/images/projects/smart-wifi-switch/hero.png',
    images: [
      '/images/projects/smart-wifi-switch/hero.png',
      '/images/projects/smart-wifi-switch/detail-1.webp',
      '/images/projects/smart-wifi-switch/detail-2.png',
    ],
    specs: [
      { label: 'MCU', value: 'ESP8266 (ESP-12E)' },
      { label: 'Loads', value: '3 AC channels' },
      { label: 'Control', value: 'Local without internet, remote over Wi-Fi' },
      { label: 'Safety', value: 'Isolated high-voltage and low-voltage sections' },
      { label: 'Status', value: '30 units built, tested over 5 months' },
    ],
    role: 'Product owner and designer: architecture, components, KiCad schematic and layout, firmware, prototype and testing.',
    overview: 'I designed a 3-channel Smart Wi-Fi Switch enabling remote control of AC loads via an ESP8266 (ESP-12E), with isolated high-voltage AC and low-voltage control sections for safety. I defined the system architecture, selected components, and built and validated the initial prototype on an FR4 board.',
    challenge: 'Keeping the mains-voltage switching section safely isolated from the low-voltage Wi-Fi control logic, while still fitting a compact, manufacturable single-board layout, was the key design constraint.',
    outcome: 'I completed the schematic and PCB layout in KiCad, generated Gerber/BOM manufacturing files, programmed firmware via UART, and carried the board through hardware debugging, functional validation, and end-to-end system testing. 30 units of the manufactured PCB have been built and tested over 5 months.',
    lessons: [
      'Mains isolation decides the layout before anything else does.',
      'A switch must keep working when the internet does not.',
    ],
    lab: true,
  },
];

export const featuredProjects = allProjects.filter((x) => !x.lab);
