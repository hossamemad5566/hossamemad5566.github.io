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
    image: '/images/projects/seifence/hero.jpg',
    images: ['/images/projects/seifence/hero.jpg', '/images/projects/seifence/detail-1.jpg', '/images/projects/seifence/detail-2.jpg'],
    accent: 'from-sky-500/30 to-cyan-400/10',
    overview: 'I joined the SEIFence program during fabrication and early deployment, diagnosed production issues, and led the transition from the first hardware revision to an improved Version 2.',
    challenge: 'The device needed reliable tracking, strong field durability, and a firmware stack that could support SMS, MQTT, HTTP, GPS processing, FOTA, and geofencing in a compact enclosure.',
    outcome: 'The upgraded system reduced cost and improved performance while supporting the deployment of 120 manufactured units with aftersales maintenance coverage.',
  },
  {
    title: 'SEITech Box',
    summary: 'An industrial gateway and backup-power platform combining BMS, power management, and embedded connectivity for edge applications.',
    tags: ['BMS', 'Power', 'ESP32-S3', 'Industrial'],
    href: '/projects/smart-box',
    image: '/images/projects/smart-box/hero.jpg',
    images: ['/images/projects/smart-box/hero.jpg', '/images/projects/smart-box/detail-1.jpg', '/images/projects/smart-box/detail-2.jpg'],
    accent: 'from-emerald-500/30 to-lime-400/10',
    overview: 'This work involved reverse engineering existing hardware, redesigning the PCB around modern connectivity, and validating a robust platform for industrial operation and backup support.',
    challenge: 'The project required balancing power electronics, charging and discharging monitoring, and reliable communications in a compact, production-ready enclosure.',
    outcome: 'The solution was assembled, validated, and delivered to the customer as a practical and reliable edge hardware platform.',
  },
  {
    title: 'Access Control Board',
    summary: 'A production-ready remote I/O controller designed for industrial automation with Ethernet, RS485, USB, and relay control.',
    tags: ['STM32', 'Ethernet', 'RS485', 'Industrial Automation'],
    href: '/projects/access-control',
    image: '/images/projects/access-control/hero.jpg',
    images: ['/images/projects/access-control/hero.jpg', '/images/projects/access-control/detail-1.jpg', '/images/projects/access-control/detail-2.jpg'],
    accent: 'from-violet-500/30 to-fuchsia-400/10',
    overview: 'I designed the complete hardware architecture around the STM32F401, integrating industrial communication interfaces, power management, and protection features for remote monitoring and control.',
    challenge: 'The module needed to operate reliably in industrial environments while supporting isolated communications, non-volatile storage, and safe relay-driven outputs.',
    outcome: 'The design was carried through schematic capture, PCB layout review, BOM preparation, and manufacturing documentation for production support.',
  },
];
