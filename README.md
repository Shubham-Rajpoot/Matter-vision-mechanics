# MATTER VISION MECHANICS - Research Company Website

A modern, enterprise-grade research company website built with Next.js App Router and Tailwind CSS, showcasing active research across ten cutting-edge domains.

## About MATTER VISION MECHANICS

MATTER VISION MECHANICS is a pioneering research company advancing humanity through cutting-edge innovation. We conduct active research across ten key domains:

1. **Robotics** - Advanced robotics research for industrial automation and autonomous systems
2. **Artificial Intelligence** - AI research including machine learning, computer vision, and assistive AI
3. **Rural Engineering** - Engineering solutions tailored for rural communities
4. **Sustainable Ceramics** - Innovative ceramic materials and sustainable manufacturing
5. **Bio Remediation Technology** - Environmental biotechnology for ecological restoration
6. **Agrotech** - Agricultural technology innovations and sustainable farming
7. **Consumer Products** - Research and development of innovative consumer solutions
8. **Healthcare Technology** - IoT-based health monitoring and medical device innovation
9. **Assistive Technology** - Specialized assistive technologies including AI-powered sign language recognition
10. **Industrial Design** - Product design, ergonomics, and manufacturing processes

## Key Research Projects

- **AI Sign Language Recognition** - Real-time sign language recognition and translation system
- **Clean Air Solutions** - Portable air purifiers and advanced mask technology
- **Sustainable Agriculture Systems** - Ceramic micro furnaces and hydroponic setups
- **IoT Health Monitoring Device** - Two-in-one health monitoring solution
- **Bovidae Health & Tracking System** - Livestock monitoring through advanced tracking
- **Educational Gaming Platform** - Online, offline, and Montessori-inspired games
- **Artisan Home Decor** - Premium wood and acrylic art pieces

## Features

- ✨ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** with custom design system
- 📱 **Fully Responsive** (mobile, tablet, desktop)
- 🧩 **Component-Based Architecture** with micro-components
- 🎭 **Soft Clay/Neumorphism Design** with rounded corners and soft shadows
- 🎬 **Video Hero Section** with autoplay background video
- 📋 **Multi-Level Dropdown Menus** for navigation
- 🍔 **Mobile Hamburger Menu** with accordion dropdowns
- ⚡ **Smooth Animations** and transitions
- 🏢 **Enterprise-Style Footer** with multi-column layout

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── navbar/
│   │   ├── Navbar.tsx      # Main navigation component
│   │   ├── NavDropdown.tsx # Desktop dropdown menu
│   │   └── MobileMenu.tsx  # Mobile hamburger menu
│   ├── hero/
│   │   └── Hero.tsx        # Full-screen hero with video background
│   ├── sections/
│   │   ├── ServicesSection.tsx    # Research Areas showcase (10 domains)
│   │   ├── IndustriesSection.tsx  # Research Applications & Impact
│   │   ├── ProductsSection.tsx    # Research Projects & Products
│   │   └── InnovationSection.tsx  # Research Infrastructure
│   └── footer/
│       └── Footer.tsx      # Enterprise footer
├── tailwind.config.ts      # Tailwind configuration with custom theme
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Design System

### Colors
- **Primary**: Blue gradient (primary-400 to primary-700)
- **Dark**: Dark theme (dark-700 to dark-900)
- **Accent**: Various gradients for different sections

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes
- **Body**: Medium weight, readable sizes

### Shadows & Effects
- **Soft Shadow**: Subtle depth effect
- **Neumorphism**: Soft clay-like appearance
- **Gradients**: Smooth color transitions

### Components
- **Rounded Corners**: rounded-2xl, rounded-3xl
- **Transitions**: Smooth hover effects
- **Animations**: Fade-in, slide-up, slide-down

## Research Areas

The website showcases our ten active research domains, each with dedicated sections highlighting:
- Research focus and objectives
- Key projects and innovations
- Industry applications
- Impact and outcomes

## Customization

All components use structured data and can be easily customized:
- Replace video source in `Hero.tsx`
- Update navigation items in `Navbar.tsx`
- Modify section content in respective section components
- Adjust colors in `tailwind.config.ts`
- Update research areas and projects in section components

## Notes

- This is a **frontend-only** project; backend integration can be added later
- Video source uses a placeholder URL; replace with your own video
- All links and forms are placeholders for now
- Fully production-ready frontend code with TypeScript
- Designed for industrial/research company presentation

## License

MIT
