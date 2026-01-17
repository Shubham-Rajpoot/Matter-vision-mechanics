
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
│   │   ├── ServicesSection.tsx    # Services showcase
│   │   ├── IndustriesSection.tsx  # Industries served
│   │   ├── ProductsSection.tsx    # Products and platforms
│   │   └── InnovationSection.tsx  # Research & innovation
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

## Customization

All components use mock/static data and can be easily customized:
- Replace video source in `Hero.tsx`
- Update navigation items in `Navbar.tsx`
- Modify section content in respective section components
- Adjust colors in `tailwind.config.ts`

## Notes

- This is a **frontend-only** project; backend integration can be added later
- Video source uses a placeholder URL; replace with your own video
- All links and forms are placeholders for now
- Fully production-ready frontend code with TypeScript

## License

MIT
