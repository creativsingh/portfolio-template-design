# 🎨 CreativSingh — Modern Product Designer Portfolio & Case Study Template

A premium, interactive, and fully responsive Product Designer portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed specifically for B2B/B2C SaaS Product Designers, UX Engineers, and Digital Creators to showcase featured work, case studies, and design philosophy.

---

## ✨ Features

- **🚀 Next.js 16 App Router & React 19**: Built with modern web standards, server-side performance, and clean route management.
- **🌗 Light / Dark / System Theme Toggle**: Native theme switching with continuous state persistence and theme-aware CSS custom variables.
- **🎯 Dynamic Case Study Engine**: Rich, structured case study pages dynamically loaded at `/case-study/[slug]` with interactive metrics, problem/solution breakdowns, and image galleries.
- **✨ Fluid Micro-Animations & Interactivity**:
  - Custom magnetic buttons with mouse tracking.
  - Interactive smooth custom cursor component.
  - Scroll-triggered reveal animations powered by Framer Motion.
  - Interactive contact modal with instant email copy capabilities.
- **📱 Fully Responsive Design**: Built mobile-first for flawless performance across smartphones, tablets, and desktop displays.
- **🔍 SEO & Social Sharing Optimized**: Complete metadata configuration with OpenGraph tags, semantic HTML tags, and optimized performance.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Directory Structure

```text
portfolio-template-design/
├── src/
│   ├── app/
│   │   ├── case-study/
│   │   │   ├── [slug]/          # Dynamic case study detail route
│   │   │   └── data.ts          # Central data source for portfolio projects & case studies
│   │   ├── globals.css          # Global design system, CSS variables, and utility classes
│   │   ├── layout.tsx           # Root layout, font definitions & provider wrappers
│   │   └── page.tsx             # Main portfolio homepage layout
│   └── components/
│       ├── AboutSection.tsx     # Background, experience, and PixelPeps community section
│       ├── Companies.tsx        # Client showcase & brand logo marquee
│       ├── ContactModal.tsx     # Interactive contact form / modal overlay
│       ├── CustomCursor.tsx     # Smooth animated custom cursor element
│       ├── Footer.tsx           # Portfolio footer with dynamic links and social links
│       ├── Hero.tsx             # Hero section with status badges & main call-to-actions
│       ├── MagneticButton.tsx   # Reusable magnetic motion button wrapper
│       ├── Navbar.tsx           # Responsive sticky navigation bar with active scroll spy
│       ├── ScrollReveal.tsx     # Animated reveal container wrapper
│       ├── ThemeProvider.tsx    # Light/Dark/System theme context wrapper
│       ├── ThingsToKnow.tsx     # Key principles and quick facts section
│       └── WorkSection.tsx      # Portfolio project grid with category filters
├── public/                      # Static assets, logos, and project media
├── package.json                 # Node dependencies and project scripts
├── tsconfig.json                # TypeScript compiler configuration
└── next.config.mjs              # Next.js configuration settings
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/creativsingh/portfolio-template-design.git
   cd portfolio-template-design
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view your site live.

---

## ✏️ Customization Guide

### 1. Updating Projects & Case Studies
All project items and detailed case study content live in [`src/app/case-study/data.ts`](file:///Users/ajeetsingh/Desktop/Code/portfolio-template-design/src/app/case-study/data.ts). 
You can edit, add, or remove items in the `CASE_STUDIES` dictionary to immediately update both the homepage portfolio grid and individual case study detail pages.

### 2. Updating Personal Info & Metadata
To change site titles, SEO keywords, social links, or author names:
- Edit metadata in [`src/app/layout.tsx`](file:///Users/ajeetsingh/Desktop/Code/portfolio-template-design/src/app/layout.tsx).
- Update section text and personal details inside [`src/components/Hero.tsx`](file:///Users/ajeetsingh/Desktop/Code/portfolio-template-design/src/components/Hero.tsx) and [`src/components/AboutSection.tsx`](file:///Users/ajeetsingh/Desktop/Code/portfolio-template-design/src/components/AboutSection.tsx).

### 3. Modifying Color Schemes & Styles
Global styling, custom scrollbars, and color tokens are managed inside [`src/app/globals.css`](file:///Users/ajeetsingh/Desktop/Code/portfolio-template-design/src/app/globals.css).

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode with Hot Module Replacement (HMR).
- `npm run build`: Builds the production-ready bundle.
- `npm run start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint to check for code style and syntax issues.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
