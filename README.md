# SJA Robotics

Empowering Everyday Life Through Automation.

SJA Robotics is at the forefront of integrating AI and automation into everyday devices. This is the official website for SJA Robotics, showcasing our divisions, products, and vision.

## Divisions

### SJA AI — Artificial Intelligence

Pioneering AI research, building ML models, and developing intelligent software solutions.

- **Fari** — Futuristic Artificial Reasoning Intelligence, a personal AI companion — [Demo](https://fari.sja-affu765.workers.dev/)
- **MOUS** — Multilingual Omnipresent Unified System, AI voice agent platform — [Demo](https://mous.sja-affu765.workers.dev/)
- **SAM** — Smart Automated Manager (smart home AI controller) — [Demo](https://sam.sja-affu765.workers.dev/)

### SJA Autonomous — Physical Robots & Drones

Engineering autonomous machines that operate in the real world.

- **Atiana Robot** — Flagship autonomous robot for homes, hospitals, and defense — [Demo](https://atiana.sja-affu765.workers.dev/)
- **Sueen Drone** — Smart household drone for delivering items around your home — [Demo](https://sueen.pages.dev/)

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
    ├── SAM.tsx
    ├── SAMGenZ.tsx
    └── MoussFeatures.tsx
```
