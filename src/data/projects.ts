export interface Project {
  title: string;
  summary: string;
  tags: string[];
  href: string;
  image: string;
  accent: string;
}

export const featuredProjects: Project[] = [
  {
    title: 'SEIFence Gen2',
    summary: 'An IoT tracker platform combining ESP32, GPS, GSM, and RTOS-driven firmware for connected field devices.',
    tags: ['ESP32', 'RTOS', 'Manufacturing', 'GPS'],
    href: '/projects/seifence',
    image: '/images/projects/seifence.jpg',
    accent: 'from-sky-500/30 to-cyan-400/10',
  },
  {
    title: 'Battery Management System',
    summary: 'A 3-cell battery management system with charger control, protection logic, and power-stage design.',
    tags: ['BMS', 'Power', 'Protection', 'DC/DC'],
    href: '/projects/bms',
    image: '/images/projects/bms.jpg',
    accent: 'from-emerald-500/30 to-lime-400/10',
  },
  {
    title: 'Industrial IoT Gateway',
    summary: 'A rugged gateway for industrial telemetry with RS485, BLE, Wi-Fi, and 4G connectivity.',
    tags: ['ESP32-S3', 'RS485', 'Wi-Fi', 'BLE'],
    href: '/projects/industrial-iot-gateway',
    image: '/images/projects/seitech.jpg',
    accent: 'from-violet-500/30 to-fuchsia-400/10',
  },
];
