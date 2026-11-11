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
    slug: 'delivery-secure-box',
    title: 'Delivery Secure Box (VAULTIQ) — Smart Parcel Locker Controller',
    category: 'Freelance · Client project',
    chip: 'ESP32-S3 + DVP camera',
    summary: 'A 4-layer ESP32-S3 controller for a smart parcel locker that captures a photo of every delivery over a DVP camera, reports over wired Ethernet or Wi-Fi, and drives a 12 V solenoid lock.',
    tags: ['ESP32-S3', 'Camera DVP', 'Ethernet', '4-layer PCB', 'Controlled impedance', 'KiCad', 'Power design', 'IoT'],
    href: p('delivery-secure-box'),
    image: '/images/projects/delivery-secure-box/diagram.svg',
    images: ['/images/projects/delivery-secure-box/diagram.svg'],
    specs: [
      { label: 'MCU', value: 'ESP32-S3-WROOM-1 (Wi-Fi + BLE 5), octal PSRAM' },
      { label: 'Camera', value: '24-pin DVP FPC, OV2640 / OV3660 / OV5640, 8-bit, XCLK 20 MHz' },
      { label: 'Network', value: 'ENC28J60 SPI Ethernet 10BASE-T, HR911105A RJ45' },
      { label: 'Power', value: '12 V in → TPS54360 (5 V) → SY8089A (3.3 V) → SGM2036 camera LDOs' },
      { label: 'I/O', value: 'PCA9554 I²C expander (keypad, LEDs, relay), opto-isolated prox input, 12 V lock relay' },
      { label: 'PCB', value: '4-layer, 1.6 mm, 100 × 76 mm, controlled impedance' },
      { label: 'Tools', value: 'KiCad 10, custom DRC rules, JLCPCB / LCSC BOM' },
    ],
    role: 'Freelance hardware designer: full controller PCB in KiCad 10 — architecture, power tree, schematic, 4-layer controlled-impedance layout, custom DRC rules and pre-fabrication design review.',
    overview: 'A smart parcel locker controller. It photographs every delivery over a DVP camera, reports over wired Ethernet or Wi-Fi, reads a keypad and a proximity sensor, and drives a 12 V solenoid lock. I designed the full board in KiCad 10: 12 V input protection (SMAJ15A TVS, SS54 reverse-polarity diode, PTC fuse), a 12 → 5 → 3.3 V power tree with dedicated low-noise SGM2036 LDOs for the camera analog and core rails, an ESP32-S3-WROOM-1 with octal PSRAM for frame buffers, an ENC28J60 10BASE-T port with an integrated-magnetics RJ45, a PCA9554 I²C expander for the keypad and status LEDs, an opto-isolated NPN proximity input and a flyback-protected relay driver for the lock — on a 100 × 76 mm 4-layer board built for JLCPCB controlled impedance.',
    challenge: 'This was my first DVP camera design: a 24-pin FPC supporting OV2640, OV3660 and OV5640 sensors, with a separate ferrite-filtered analog supply, an autofocus supply path and power-on reset. I validated it pin-by-pin against Seeed\'s XIAO ESP32S3 reference. The same board had to carry 100 Ω Ethernet pairs, a 20 MHz camera clock and a noisy 12 V lock driver without them disturbing each other.',
    outcome: 'The board uses the JLC04161H-3313 stack-up (signal / GND / GND / signal), with the 100 Ω differential pairs (0.13 mm / 0.20 mm) sized by a 2D field solve that includes solder mask. A custom KiCad DRC rule set enforces diff-pair geometry and skew, camera clock isolation, DVP bus length and via limits, power-rail widths and JLC fab limits, with net classes assigned by name patterns. The pre-fabrication review caught a sensor core-voltage error, an LDO sourcing mistake, missing SCCB pull-ups and an antenna-keepout gap on the inner planes.',
    lessons: [
      'For a first-time interface like DVP, check every pin against a shipping reference design before layout.',
      'Encode the layout rules as DRC rules; a checklist only works if someone remembers to read it.',
      'A deliberate review pass before fabrication is cheaper than any respin — four real errors were caught on this board.',
    ],
  },
  {
    slug: 'esp32c6-ethernet-node',
    title: 'ESP32-C6 + W5500 Ethernet Node — Freelance Board Design',
    category: 'Freelance · Client project',
    chip: 'ESP32-C6 + W5500',
    summary: 'A compact ESP32-C6 node with hardwired TCP/IP Ethernet (WIZnet W5500 over SPI), native USB-C, I²C and a protected dual 5 V input — designed for a freelance client with every connector on one board edge.',
    tags: ['ESP32-C6', 'W5500 Ethernet', 'USB-C', 'KiCad', 'Freelance'],
    href: p('esp32c6-ethernet-node'),
    image: '/images/projects/esp32c6-ethernet-node/diagram.svg',
    images: ['/images/projects/esp32c6-ethernet-node/diagram.svg'],
    specs: [
      { label: 'MCU', value: 'ESP32-C6-WROOM-1 (Wi-Fi 6, BLE 5, 802.15.4)' },
      { label: 'Ethernet', value: 'WIZnet W5500 10/100 on IO_MUX SPI, interrupt-driven RX, RJ45 with magnetics' },
      { label: 'Power', value: 'USB-C or 5 V screw terminal → fuse, TVS, Schottky ORing → 3.3 V LDO (~525 mA peak budget)' },
      { label: 'Interfaces', value: 'Native USB (flash + JTAG), JST I²C, UART header, 2 keys, 2 LEDs' },
      { label: 'Layout rules', value: '100 Ω Ethernet / 90 Ω USB differential pairs, antenna on the edge opposite the connectors' },
    ],
    role: 'Freelance hardware designer: requirements, architecture, component selection, design notes, hierarchical KiCad schematic, BOM and PCB layout.',
    overview: 'A client needed a small networked node: an ESP32-C6-WROOM-1 module with wired Ethernet, USB-C, an I²C expansion connector, two user keys, two LEDs and a programming header, with all connectors lined up on one edge at USB-C height. I chose the WIZnet W5500 hardwired TCP/IP controller on the C6\'s IO_MUX SPI pins, so the TCP/IP stack and PHY sit in hardware and the SPI bus runs fast, and wrote a full design-notes document with pin map, power budget and schematic/layout review checklists before capturing the schematic in KiCad.',
    challenge: 'Fitting a Wi-Fi module and a 10/100 Ethernet front end on one small board: keeping the module antenna clear of the RJ45, USB-C and terminal block, honouring the C6 strapping pins (IO8, IO9, IO15) and their 3 ms boot timing, copying the W5500 MDI termination and crystal network exactly, and sizing a 3.3 V rail for Wi-Fi TX peaks plus 100M Ethernet from two protected 5 V inputs.',
    outcome: 'The hierarchical schematic (MCU, Ethernet, power sheets) and BOM were released in November 2026, built on the WIZnet reference design and Espressif\'s hardware guidelines; PCB layout is in progress against a written impedance and placement checklist.',
    lessons: [
      'A written design-notes document with review checklists saves a schematic revision — decisions get made once, before capture.',
      'On a Wi-Fi board, decide the connector edge and antenna edge first; everything else follows.',
      'Copy the vendor\'s Ethernet front end exactly; that is not the place to be creative.',
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
