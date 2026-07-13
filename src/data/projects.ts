export interface Project {
  title: string;
  summary: string;
  tags: string[];
  href: string;
}

export const featuredProjects: Project[] = [
  {
    title: 'SEIFence Gen2',
    summary: 'An IoT tracker platform combining ESP32, GPS, GSM, and RTOS-driven firmware for connected field devices.',
    tags: ['ESP32', 'RTOS', 'Manufacturing', 'GPS'],
    href: '/projects/seifence',
  },
  {
    title: 'ForWheelz Automotive ECU',
    summary: 'Automotive electronics development for a multi-CAN embedded controller with RF and USB interfaces.',
    tags: ['STM32', 'CAN', 'Automotive', 'RF'],
    href: '/projects/forwheelz',
  },
  {
    title: 'Industrial IoT Gateway',
    summary: 'A rugged gateway for industrial telemetry with RS485, BLE, Wi-Fi, and 4G connectivity.',
    tags: ['ESP32-S3', 'RS485', 'Wi-Fi', 'BLE'],
    href: '/projects/industrial-iot-gateway',
  },
];
