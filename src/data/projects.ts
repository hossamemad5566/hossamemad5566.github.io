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
    title: 'SEIFence Gen2 — IoT Field Tracking Device',
    summary: 'A 4-layer RTOS-based IoT tracker with GPS, GSM, SMS/MQTT/HTTP connectivity, FOTA, and geofencing — redesigned end-to-end after Version 1 field issues.',
    tags: ['ESP32', 'FreeRTOS', 'GPS/GSM', '4-Layer PCB', 'FOTA'],
    href: '/projects/seifence',
    image: '/images/projects/seifence/hero.jpg',
    images: [
      '/images/projects/seifence/hero.jpg',
      '/images/projects/seifence/detail-1.png',
      '/images/projects/seifence/detail-2.png',
    ],
    accent: 'from-sky-500/30 to-cyan-400/10',
    overview: 'SEIFence is an IoT tracking and control device deployed across roughly 200 field units at SEITech Solutions. After Version 1 surfaced hardware, mechanical, and firmware issues during early deployment, I independently proposed, designed, and delivered a complete Hardware Version 2 on a 4-layer PCB, reducing cost while improving reliability. The firmware stack was built twice: first as a Python-based version for functional validation, then rewritten as an optimized, production-grade RTOS (FreeRTOS) firmware in C handling SMS/MQTT/HTTP communication, GPS data processing, FOTA updates, and a geofencing algorithm.',
    challenge: 'The main challenge was combining reliable positioning, cellular connectivity, and resilient RTOS-based firmware inside a compact, cost-reduced enclosure — while also tracing and fixing a GPS antenna stability problem that was affecting fielded units.',
    outcome: 'The GPS antenna issue was resolved with a post-fabrication PCB fix (drilled holes plus through-hole pads), and 120+ units were successfully transitioned to production Version 2, with ongoing aftersales hardware maintenance and debugging support for all fielded devices.',
  },
  {
    title: 'ForWheelz — Automotive Telematics ECU',
    summary: 'An STM32-based automotive telematics ECU with 3 CAN interfaces, USB, RF, and power management, built on a 2-board stacked 4-layer impedance-controlled PCB.',
    tags: ['STM32', 'CAN Bus', 'RF/GSM', 'Automotive', 'EMI Mitigation'],
    href: '/projects/forwheelz',
    image: '/images/projects/forwheelz/hero.png',
    images: [
      '/images/projects/forwheelz/hero.png',
      '/images/projects/forwheelz/detail-1.png',
      '/images/projects/forwheelz/detail-2.png',
    ],
    accent: 'from-emerald-500/30 to-lime-400/10',
    overview: 'I led the full hardware development lifecycle for this STM32-based automotive telematics ECU, which integrates 3 CAN interfaces, USB, an RF subsystem, and automotive-grade power management. The design uses a 2-board stacked, 4-layer impedance-controlled PCB with an integrated GSM antenna, matching network, and carefully constrained RF routing.',
    challenge: 'Automotive signal integrity demanded EMI mitigation techniques such as ground stitching and return path optimization, alongside compact enclosure integration under strict automotive space and thermal constraints.',
    outcome: 'The ECU reached a validated, manufacturable state with a complete production package and supplier coordination, and was supported through system validation and field optimization during deployment.',
  },
  {
    title: 'SEITech Box — Industrial IoT Gateway',
    summary: 'A reverse-engineered and redesigned industrial IoT gateway (Edge Box ESP100) built around ESP32-S3, with Wi-Fi, BLE, 4G, GPS, RS232/RS485, and full power management.',
    tags: ['ESP32-S3', 'RS485', 'Wi-Fi/BLE', '4G/GPS', 'KiCad'],
    href: '/projects/seitech-box',
    image: '/images/projects/seitech-box/hero.png',
    images: [
      '/images/projects/seitech-box/hero.png',
      '/images/projects/seitech-box/detail-1.jpg',
      '/images/projects/seitech-box/detail-2.jpg',
    ],
    accent: 'from-violet-500/30 to-fuchsia-400/10',
    overview: 'I reverse-engineered the existing Edge Box industrial gateway hardware and redesigned it around an ESP32-S3 platform, integrating Wi-Fi, BLE, SIMCom 4G, GPS, RS232/RS485, ADC, GPIO, and power management circuits into a single rugged gateway for industrial telemetry.',
    challenge: 'The project required strong industrial protocol support, long-term communications stability, and interface flexibility across multiple transport layers — all while working from an existing product to reverse-engineer and improve, rather than a clean-sheet design.',
    outcome: 'I selected the enclosure and completed schematic capture, PCB layout, and fabrication file preparation in KiCad, delivering a gateway with a strong communications foundation for remote industrial monitoring and practical field deployment.',
  },
  {
    title: '3-Cell BMS & Backup Power Module',
    summary: 'A 3-cell battery management system and DC-DC backup power module for the SEITech Box, providing seamless power during inverter outages with real-time monitoring.',
    tags: ['BMS', 'Power Electronics', 'DC-DC', 'Protection'],
    href: '/projects/seitech-bms',
    image: '/images/projects/seitech-bms/hero.png',
    images: [
      '/images/projects/seitech-bms/hero.png',
      '/images/projects/seitech-bms/detail-1.jpg',
      '/images/projects/seitech-bms/detail-2.jpg',
    ],
    accent: 'from-amber-500/30 to-orange-400/10',
    overview: 'I designed a 3-cell battery management system and backup power module for the Edge Box ESP100 industrial gateway, providing seamless backup power during inverter outages. The design implements a controlled DC-DC power path with real-time charging and discharging monitoring.',
    challenge: 'Balancing protection accuracy, high-current switching, and a practical layout for manual assembly and validation was the central constraint, since the module needed to fit within the existing gateway platform and hand off power seamlessly during outages.',
    outcome: 'I completed manual assembly, board bring-up, and full validation ahead of customer delivery, resulting in a robust, safe power stage and monitoring layer that improved the reliability of the overall gateway system.',
  },
  {
    title: 'Access Control Board — Industrial Ethernet & RS485 I/O Controller',
    summary: 'A production-ready STM32F401RCT6 controller with Ethernet, isolated RS485, dual EEPROM logging, and a multi-rail protected power architecture for industrial automation.',
    tags: ['STM32F401', 'Ethernet', 'RS485', 'I²C', 'Industrial'],
    href: '/projects/access-control-board',
    image: '/images/projects/access-control-board/hero.png',
    images: [
      '/images/projects/access-control-board/hero.png',
      '/images/projects/access-control-board/detail-1.jpg',
      '/images/projects/access-control-board/detail-2.png',
    ],
    accent: 'from-rose-500/30 to-pink-400/10',
    overview: 'This production-ready embedded controller is built around an STM32F401RCT6 (84 MHz Cortex-M4) for industrial automation and remote monitoring. It implements Ethernet connectivity via ENC28J60/RJ45 and an isolated RS485 interface (MAX3485 with optocoupler isolation) for reliable industrial networking, plus dual 24LC512 EEPROM devices over I²C for non-volatile data logging and a USB Type-C programming/debugging interface with independent power.',
    challenge: 'The design needed a multi-rail power architecture (12V input, 5V via LM2596S, 3.3V via AMS1117 LDO) with comprehensive protection — TVS, ESD, over-voltage/surge suppression, and decoupling — alongside isolated relay-driving circuitry and digital I/O monitoring with multi-LED diagnostics.',
    outcome: 'I delivered a complete production package: Gerbers, pick-and-place files, assembly drawings, an LCSC-sourced BOM, and revision-controlled design archives, ready for manufacturing and field deployment.',
  },
  {
    title: 'Smart Wi-Fi Switch — ESP8266 IoT Relay',
    summary: 'A 3-channel Wi-Fi smart switch for remote AC load control, with isolated high-voltage and low-voltage sections and full firmware/hardware bring-up.',
    tags: ['ESP8266', 'IoT', 'KiCad', 'AC Isolation'],
    href: '/projects/smart-wifi-switch',
    image: '/images/projects/smart-wifi-switch/hero.png',
    images: [
      '/images/projects/smart-wifi-switch/hero.png',
      '/images/projects/smart-wifi-switch/detail-1.jpg',
      '/images/projects/smart-wifi-switch/detail-2.png',
    ],
    accent: 'from-teal-500/30 to-emerald-400/10',
    overview: 'I designed a 3-channel Smart Wi-Fi Switch enabling remote control of AC loads via an ESP8266 (ESP-12E), with isolated high-voltage AC and low-voltage control sections for safety. I defined the system architecture, selected components, and built and validated the initial prototype on an FR4 board.',
    challenge: 'Keeping the mains-voltage switching section safely isolated from the low-voltage Wi-Fi control logic, while still fitting a compact, manufacturable single-board layout, was the key design constraint.',
    outcome: 'I completed the schematic and PCB layout in KiCad, generated Gerber/BOM manufacturing files, programmed firmware via UART, and carried the board through hardware debugging, functional validation, and end-to-end system testing.',
  },
  {
    title: 'Industrial IoT Controller & Hardware Development Platform',
    summary: 'A custom STM32F407 + ESP32-S3 industrial controller with Ethernet, CAN, RS-485, USB-C, QSPI Flash, and environmental sensors — my NTI diploma graduation project.',
    tags: ['STM32F407', 'ESP32-S3', 'CAN/RS-485', 'KiCad'],
    href: '/projects/hw-inventor',
    image: '/images/projects/hw-inventor/hero.png',
    images: [
      '/images/projects/hw-inventor/hero.png',
      '/images/projects/hw-inventor/detail-1.png',
      '/images/projects/hw-inventor/detail-2.png',
    ],
    accent: 'from-indigo-500/30 to-blue-400/10',
    overview: 'This custom Industrial IoT controller and hardware development platform is built around an STM32F407 and ESP32-S3, integrating Ethernet (ENC28J60), CAN, RS-485, USB Type-C, QSPI Flash, environmental sensors, and expansion interfaces. I designed the complete multi-sheet schematic, PCB layout, power architecture, and protection circuitry in KiCad.',
    challenge: 'Bringing together high-speed interfaces — Ethernet, CAN, RS-485, USB, SPI, and QSPI — on a single expandable development platform required careful sheet-by-sheet schematic organization and disciplined power/protection planning.',
    outcome: 'I carried the board through PCB fabrication review, assembly, firmware flashing, hardware bring-up, debugging, and system validation, delivering a working hardware development platform as my NTI Automotive Embedded Systems Diploma graduation project.',
  },
];
