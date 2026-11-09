export interface Note {
  slug: string;
  title: string;
  date: string; // ISO
  summary: string;
  tags: string[];
  // Simple blocks so notes stay plain data: paragraphs, headings, lists.
  body: ({ p: string } | { h: string } | { ul: string[] } | { ol: string[] })[];
}

export const notes: Note[] = [
  {
    slug: 'board-bring-up-checklist',
    title: 'My first-power-on bring-up checklist',
    date: '2026-11-09',
    summary: 'The checklist I follow before, during and after the first power-on of a new board.',
    tags: ['Bring-up', 'PCB', 'Hardware'],
    body: [
      { p: 'The first power-on of a new board is where you can lose a week or save one. This is the checklist I follow on every new design.' },
      { h: 'Before power' },
      { ul: [
        'Visual check under magnification: solder bridges, missing parts, polarity of diodes and electrolytic capacitors.',
        'Resistance from each rail to ground — no shorts.',
        'Check that the regulator part numbers on the board actually match the BOM.',
      ] },
      { h: 'First power' },
      { ul: [
        'Use a bench supply with a current limit, not the real battery or adapter.',
        'Bring up one rail at a time if you can, and measure each voltage.',
        'Feel or thermal-camera the board for hot parts in the first 30 seconds.',
        'Write down the idle current — it is your baseline for later.',
      ] },
      { h: 'Then' },
      { ul: [
        'Clock running? Reset line correct? Debugger connects?',
        'Blink an LED, then test each interface one by one: UART, I²C, SPI, CAN, RF.',
        'Log every fix in a bring-up log; it becomes the change list for Rev B.',
      ] },
    ],
  },
  {
    slug: 'firmware-twice',
    title: 'Why I wrote the same firmware twice',
    date: '2026-11-09',
    summary: 'A Python prototype first, then production C on FreeRTOS — and when that is worth it.',
    tags: ['Firmware', 'FreeRTOS', 'Python'],
    body: [
      { p: 'I wrote the firmware for our IoT tracker twice, on purpose. Version 1 was in Python. Version 2 was production C on FreeRTOS.' },
      { h: 'Why not go straight to C?' },
      { ul: [
        'The hardware was new, and so were the requirements. Python let me prove the logic fast: SMS commands, MQTT/HTTP reporting, GPS parsing, geofencing.',
        'Every bug I found in Python was a requirements or hardware bug, not a pointer bug.',
        'Once the behaviour was right, the C version became a translation job with a clear reference to test against.',
      ] },
      { p: 'The C version added real-time tasks, FOTA updates, and the reliability needed for 120+ units in the field.' },
      { h: 'Would I do it again?' },
      { p: 'For a new product with unclear requirements, yes. For a small change to a known product, no — straight to C.' },
    ],
  },
  {
    slug: 'v1-to-v2-lessons',
    title: '7 lessons from redesigning a device already in the field',
    date: '2026-11-09',
    summary: 'What I learned taking an IoT tracker from a V1 with field issues to a V2 in production.',
    tags: ['Product development', 'IoT', 'PCB'],
    body: [
      { p: 'Redesigning a device that is already in customers’ hands is a different job from designing a new one. Our IoT tracker V1 had hardware, mechanical and firmware issues across about 200 deployed units. I proposed and built V2. Seven lessons:' },
      { ol: [
        'Collect field data before you touch the schematic. Every V2 change should trace back to a real failure.',
        'Fix the root cause, not the symptom you saw first.',
        'Mechanical problems are hardware problems. The enclosure belongs in the design review.',
        'A move to 4 layers can lower total cost when it removes reworks and returns.',
        'FOTA is not optional for anything you cannot reach with a cable.',
        'Plan how fielded V1 units will be supported while V2 rolls out.',
        'Keep a bring-up log and a field log. Together they are your V3 specification.',
      ] },
      { p: '120+ units later, V2 is in production — and the logs are already filling up for the next revision.' },
    ],
  },
  {
    slug: 'kicad-or-altium',
    title: 'KiCad or Altium for a small hardware team?',
    date: '2026-11-09',
    summary: 'I use both. Here is when each one makes sense.',
    tags: ['Tools', 'KiCad', 'Altium'],
    body: [
      { h: 'KiCad' },
      { ul: [
        'Free, with no licence limits — easy to share with clients and freelancers.',
        'Good enough for most 2–4 layer boards; I have shipped industrial and IoT designs with it.',
        'Library work is on you.',
      ] },
      { h: 'Altium' },
      { ul: [
        'Stronger for complex, high-speed and multi-board work.',
        'Better rules, length tuning and collaboration features.',
        'The licence cost is real for a small team.',
      ] },
      { h: 'My rule' },
      { p: 'Start in KiCad; move to Altium when the board’s complexity or the customer requires it.' },
    ],
  },
];
