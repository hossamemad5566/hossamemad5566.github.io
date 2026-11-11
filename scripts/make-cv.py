# Source of the CV PDF (public/Hossam_Emad_Mohamed_Osman.pdf). Edit here, then: python3 scripts/make-cv.py (needs reportlab + Carlito font)
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, HRFlowable, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
from reportlab.lib import colors
d='/usr/share/fonts/truetype/crosextra/'
for n,f in [('C','Carlito-Regular'),('C-B','Carlito-Bold'),('C-I','Carlito-Italic'),('C-BI','Carlito-BoldItalic')]:
    pdfmetrics.registerFont(TTFont(n,d+f+'.ttf'))
addMapping('C',0,0,'C');addMapping('C',1,0,'C-B');addMapping('C',0,1,'C-I');addMapping('C',1,1,'C-BI')
B=ParagraphStyle('b',fontName='C',fontSize=9.2,leading=11.1)
name=ParagraphStyle('n',fontName='C-B',fontSize=18,leading=22,alignment=1)
cen=ParagraphStyle('c',parent=B,alignment=1)
H=ParagraphStyle('h',fontName='C-B',fontSize=11.5,leading=13.5,spaceBefore=4)
P=ParagraphStyle('p',parent=B,spaceBefore=3)
sm=ParagraphStyle('s',parent=B,spaceBefore=2)
def sec(t): return [Paragraph(t,H),HRFlowable(width='100%',thickness=0.8,color=colors.black,spaceBefore=1,spaceAfter=3)]
def bl(items): return ListFlowable([ListItem(Paragraph(i,B),leftIndent=10,value='•') for i in items],bulletType='bullet',start='•',leftIndent=10,bulletFontSize=7,spaceBefore=1)
def proj(t,items): return [Paragraph(f'<b>{t}</b>',P),bl(items)]
s=[]
s+= [Paragraph('HOSSAM EMAD MOHAMED OSMAN',name),Paragraph('<i>Hardware Engineer | Embedded Systems</i>',cen),
 Paragraph('Giza, Egypt | hossam.emad.5566@gmail.com | +20 101 589 1738',cen),
 Paragraph('LinkedIn: linkedin.com/in/hossamemad5566 | Portfolio: hossamemad5566.github.io',cen)]
s+=sec('PROFESSIONAL SUMMARY')
s.append(Paragraph('Hardware Engineer with 2+ years of hands-on experience in hardware design, PCB layout, firmware development, and production support. Proven ability to independently identify field issues, propose solutions, and deliver improved hardware and firmware revisions end-to-end. Experienced in automotive and industrial IoT systems, 4-layer high-speed PCB design, EMI mitigation, controlled impedance routing, BMS, and RTOS-based firmware — with full product lifecycle ownership from concept through manufacturing and deployment.',B))
s+=sec('TECHNICAL SKILLS')
for k,v in [('Firmware &amp; Software','Embedded C (production-grade), Python (prototyping &amp; validation), RTOS (FreeRTOS), SMS/MQTT/HTTP, GPS data processing, FOTA, Geofencing algorithms, Embedded debugging, Root-cause analysis'),
('Hardware &amp; PCB','Multi-layer PCB design (up to 4 layers), Stackup planning &amp; controlled impedance routing (USB, CAN, RF, Ethernet), High-speed design, EMI mitigation (ground stitching, return path optimization), RF subsystem design (antenna placement &amp; impedance matching), Power electronics, Battery Management Systems (BMS — 3-cell), Board bring-up, soldering &amp; field debugging, Full manufacturing file preparation (Gerber, BOM, CPL), Fab coordination (JLCPCB)'),
('Protocols &amp; Interfaces','CAN (High-Speed, SWCAN, scanning), USB, UART/SPI/I2C, RS232/RS485, Ethernet (W5500, ENC28J60), Camera DVP, Wi-Fi/BLE, 4G (SIMCom), ADC/GPIO'),
('System &amp; Product Engineering','Full product lifecycle ownership (concept → design → manufacturing → deployment), Reverse engineering &amp; hardware redesign, Mechanical integration &amp; enclosure selection, Automotive telematics &amp; Industrial IoT gateways'),
('Tools','Altium Designer (advanced schematic &amp; layout, actively upskilling), EAGLE, EasyEDA Pro, KiCad, Autodesk Fusion 360, LTspice, MATLAB/Simulink, JLCPCB manufacturing')]:
    s.append(Paragraph(f'<b>{k}:</b> {v}',P))
s+=sec('PROFESSIONAL EXPERIENCE')
s.append(Paragraph('<b>SEITech Solutions</b> <i>(Acquired by T&amp;S Group) — Smart Village, Cairo</i>',sm))
s.append(Paragraph('<b>Hardware Engineer</b> <i>Feb 2026 – Present</i>',B))
s.append(Paragraph('<b>Embedded Systems Engineer</b> <i>Jul 2024 – Feb 2026</i>',B))
s+=proj('SEIFence — IoT Tracking &amp; Control Device (Hardware &amp; Firmware Version 2)',[
'Identified hardware, mechanical, and firmware issues in Version 1 during early field deployment across ~200 units.',
'Independently proposed, designed, and developed a complete improved Hardware Version 2 (4-layer PCB), reducing costs and enhancing reliability.',
'Designed and implemented full RTOS-based production firmware in C: SMS/MQTT/HTTP, GPS processing, FOTA, and geofencing algorithm.',
'Built the firmware stack twice — an initial Python-based version for functional validation, followed by an optimized, production-grade version in C.',
'Resolved GPS antenna stability issues with post-fab PCB fixes (drilled holes + through-hole pads); successfully transitioned 120+ units to production Version 2.',
'Provided ongoing aftersales hardware maintenance and debugging for all fielded units.'])
s+=proj('ForWheelz — Automotive Telematics Device',[
'Led full hardware development lifecycle for STM32-based automotive telematics ECU with 3 CAN interfaces, USB, RF, and power management.',
'Designed 2-board stacked 4-layer impedance-controlled PCB with integrated RF subsystem (GSM antenna, matching network, RF routing constraints).',
'Applied EMI mitigation techniques including ground stitching and return path optimization for automotive signal integrity.',
'Managed compact enclosure integration under automotive constraints and coordinated full manufacturing package and supplier communication.',
'Supported system validation and field optimization through deployment.'])
s+=proj('SEITech Box — Industrial IoT Gateway &amp; Power Backup System',[
'Designed a 3-cell BMS and backup power module for the Edge Box ESP100 industrial gateway, providing seamless backup power during inverter outages.',
'Implemented a controlled DC-DC power path with real-time charging/discharging monitoring; completed manual assembly, board bring-up, and full validation ahead of customer delivery.',
'Reverse-engineered existing Edge Box hardware and redesigned it around an ESP32-S3 platform, integrating Wi-Fi, BLE, SIMCom 4G, GPS, RS232/RS485, ADC, GPIO, and power management circuits.',
'Selected enclosure and completed schematic capture, PCB layout, and fabrication file preparation using KiCad.'])
s+=proj('Access Control Board — Industrial Ethernet &amp; RS485 Remote I/O Controller',[
'Designed a production-ready embedded controller around an STM32F401RCT6 (84 MHz Cortex-M4) for industrial automation and remote monitoring applications.',
'Implemented Ethernet connectivity (ENC28J60, RJ45) and an isolated RS485 interface (MAX3485 with optocoupler isolation) for reliable industrial networking.',
'Integrated dual 24LC512 EEPROM devices over I²C for non-volatile data logging, plus a USB Type-C programming/debugging interface with independent power.',
'Developed a multi-rail power architecture (12V input, 5V via LM2596S, 3.3V via AMS1117 LDO) with comprehensive protection: TVS, ESD, over-voltage/surge suppression, and decoupling networks.',
'Designed digital I/O monitoring and isolated relay-driving circuitry with multi-LED diagnostics; completed schematic capture, layout review, and BOM preparation.',
'Delivered a complete production package: Gerbers, pick-and-place files, assembly drawings, LCSC-sourced BOM, and revision-controlled design archives.'])
s+=proj('Smart Wi-Fi Switch — ESP8266-Based IoT Smart Home Device',[
'Designed a 3-channel Smart Wi-Fi Switch enabling remote control of AC loads via an ESP8266 (ESP-12E), with isolated high-voltage AC and low-voltage control sections.',
'Defined system architecture, selected components, and built/validated the initial prototype on an FR4 board.',
'Completed schematic and PCB layout in KiCad, generated Gerber/BOM manufacturing files, and programmed firmware via UART.',
'Performed hardware debugging, functional validation, and end-to-end system testing.'])
s+=proj('Industrial IoT Controller &amp; Hardware Development Platform',[
'Designed and developed a custom Industrial IoT controller based on STM32F407 and ESP32-S3, integrating Ethernet (ENC28J60), CAN, RS-485, USB Type-C, QSPI Flash, environmental sensors, and expansion interfaces.',
'Designed the complete multi-sheet schematic, PCB layout, power architecture, and protection circuitry using KiCad.',
'Implemented high-speed interfaces including Ethernet, CAN, RS-485, USB, SPI, and QSPI.',
'Performed PCB fabrication review, assembly, firmware flashing, hardware bring-up, debugging, and system validation.'])
s.append(Spacer(1,2))
s.append(Paragraph('<b>Freelance Hardware Designer</b> <i>Oct 2026 – Present</i>',P))
s.append(Paragraph('<i>Remote — client projects</i>',B))
s+=proj('Delivery Secure Box (VAULTIQ) — Smart Parcel Locker Controller',[
'Designed a 4-layer, 100 × 76 mm ESP32-S3 controller in KiCad 10 that photographs every delivery over a 24-pin DVP camera (OV2640/OV3660/OV5640), reports over ENC28J60 10BASE-T Ethernet or Wi-Fi, and drives a 12 V solenoid lock.',
'Built a protected 12 V input (TVS, reverse-polarity, PTC) and a 12 → 5 → 3.3 V power tree (TPS54360, SY8089A) with dedicated low-noise SGM2036 camera LDOs; validated the camera circuit pin-by-pin against Seeed\'s XIAO ESP32S3 reference.',
'Specified the JLC04161H-3313 controlled-impedance stack-up, sized 100 Ω Ethernet pairs with a 2D field solver, and wrote a custom DRC rule set (diff-pair geometry/skew, camera clock isolation, bus length/via limits, rail widths).',
'Added industrial I/O (PCA9554 keypad/LED expander, opto-isolated proximity input, flyback-protected relay driver); pre-fab review caught a core-voltage error, an LDO sourcing error and an antenna-keepout gap.'])
s+=proj('ESP32-C6 + W5500 Ethernet Node — Client Board Design',[
'Architected an ESP32-C6-WROOM-1 node with W5500 hardwired TCP/IP Ethernet on IO_MUX SPI, native USB-C, JST I²C and a protected dual 5 V input (fuse, TVS, ORing, 3.3 V LDO), all connectors on one edge.',
'Wrote design notes and review checklists (strapping pins, antenna keep-out, 100 Ω / 90 Ω pairs); released the hierarchical KiCad schematic and BOM; PCB layout in progress.'])
s.append(Spacer(1,2))
s.append(Paragraph('<b>Embedded Systems Engineer</b> <i>Jan 2024 – Feb 2024</i>',P))
s.append(Paragraph('<i>Noziqs Medical — Nasr City (Short-term contract engagement)</i>',B))
s.append(bl(['Developed embedded firmware for operating tables, improving system functionality by 30%.','Reduced device downtime by 20% via board-level troubleshooting and root-cause analysis.']))
s+=sec('EDUCATION')
s.append(Paragraph('<b>Bachelor of Electronics and Control Engineering</b> <i>Sep 2017 – Jul 2022</i>',B))
s.append(Paragraph('<i>Menoufia University | Grade: Very Good</i>',B))
s+=sec('CERTIFICATIONS &amp; TRAINING')
for t,dsc in [('High-Speed Board Design — System on Module (EsteemPCB) — Udemy</b> <i>Oct 2026','Layer stack-up &amp; impedance control, SI/PI, LPDDR4/DDR memory interfaces, BGA fan-out &amp; placement, SoM design.'),
('MATLAB, Simulink &amp; Stateflow Onramp — MathWorks</b> <i>Aug – Sep 2026',None),('PCB Milling Workshop — AMIT Learning</b> <i>Aug 2026',None),
('Arduino: Electronics Circuit, PCB Design &amp; IoT Programming — Udemy</b> <i>Mar 2026',None),
('Crash Course Electronics &amp; PCB Design — Udemy</b> <i>Jan 2026','112 hours covering AC/DC analysis, analog/digital electronics, PCB design flow: schematic → layout → fabrication → bring-up.'),
('Automotive Embedded Systems Diploma — NTI, New Capital</b> <i>Feb 2024 – Jul 2024','Embedded C, RTOS, STM32 &amp; AVR, CAN/LIN/UART/SPI/I2C, bootloader/FOTA, automotive testing, project management.'),
('Hardware Design Mentorship</b><i>','Professional PCB design (Altium Designer), ESP32-S3 &amp; RP2040 dev boards, advanced grounding and layout practices.')]:
    s.append(Paragraph(f'<b>{t}</i>',P))
    if dsc: s.append(Paragraph(dsc,B))
s+=sec('LANGUAGES')
s.append(Paragraph('English — Professional Proficiency',B))
doc=SimpleDocTemplate('public/Hossam_Emad_Mohamed_Osman.pdf',pagesize=letter,leftMargin=44,rightMargin=44,topMargin=28,bottomMargin=22,title='Hossam Emad Mohamed Osman — CV',author='Hossam Emad Mohamed Osman')
doc.build(s)
