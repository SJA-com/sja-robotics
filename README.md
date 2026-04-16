# SJA Robotics

Empowering Everyday Life Through Automation.

SJA Robotics is at the forefront of integrating AI and automation into everyday devices. This is the official website for SJA Robotics, showcasing our divisions, products, and vision.

## Divisions

### SJA AI — Artificial Intelligence

Pioneering AI research, building ML models, and developing intelligent software solutions.

- **Fari** — Futuristic Artificial Reasoning Intelligence, a personal AI companion
- **Mouss** — AI voice agent platform, deploy in minutes with no coding needed
- **Mari** — Smart home AI controller

### SJA Autonomous — Physical Robots & Drones

Engineering autonomous machines that operate in the real world.

- **Atiana Robot** — Flagship autonomous robot for homes, hospitals, and defense
- **Sueen Drone** — Smart household drone for delivering items around your home

### Products

- Home Security & Monitoring
- Smart Bell
- Smart Kitchen
- Health Monitoring
- Voice-Automated Weighing Scale

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

## Project Structure

```
src/
├── app/
│   ├── divisions/
│   │   ├── sja-ai/          # SJA AI division page
│   │   ├── sja-autonomous/  # SJA Autonomous division page
│   │   └── sja-tech/        # SJA Tech division page
│   ├── products/
│   │   ├── atiana/           # Atiana Robot product page
│   │   ├── sueen/            # Sueen Drone product page
│   │   ├── home-security/    # Home Security product page
│   │   ├── smart-bell/       # Smart Bell product page
│   │   ├── smart-kitchen/    # Smart Kitchen product page
│   │   ├── health-monitoring/# Health Monitoring product page
│   │   └── weighing-scale/   # Weighing Scale product page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Divisions.tsx
    ├── Footer.tsx
    ├── ProductPage.tsx
    ├── DivisionAI.tsx
    ├── DivisionAutonomous.tsx
    ├── DivisionTech.tsx
    ├── Fari.tsx
    ├── Mari.tsx
    ├── MariGenZ.tsx
    └── MoussFeatures.tsx
```
