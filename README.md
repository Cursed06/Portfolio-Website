# Personal Portfolio Website — Hybrid CS & Design

A production-quality personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, communicating a dual competence in **Computer Science / Software Engineering** and **Graphic Design / Visual Communication**.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, fully typed data schemas)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Space Grotesk (Headlines), Hanken Grotesk (Body), JetBrains Mono (Meta / Code)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## ✨ Features

- **Dual-Focus Hero**: Clear communication of engineering rigor and visual design craft with high-impact badges and CTA buttons.
- **Data-Driven Architecture**: Structured schemas for projects (`src/data/projects.ts`), designs (`src/data/designs.ts`), experience (`src/data/experience.ts`), and skills (`src/data/skills.ts`) — easily swappable with a headless CMS in the future.
- **Dynamic Case Study Routes**: Full case studies (`/projects/[slug]`) with system architecture diagrams, benchmark metrics, key features, and challenge breakdowns.
- **Interactive Multi-Category Filtering**: Instant category filtering across Software, AI, Web, and Mobile projects with live counter badges.
- **Visual Design Gallery & Lightbox**: Interactive design portfolio (`/design`) with modal inspection for typographic posters, event branding, and editorial publications.
- **Experience Timeline**: Chronological track record spanning software engineering internships, technical teaching, and student leadership.
- **Accessible & Responsive**: Fully responsive across Mobile (390px), Tablet (768px), and Desktop (1280px+), adhering to semantic HTML and visible keyboard focus states.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx             # Root layout with fonts, metadata, global styles
│   ├── page.tsx               # Main home page (Hero, About, Skills, Projects, Design, Experience, Contact)
│   ├── about/page.tsx         # Dedicated About & Philosophy page
│   ├── projects/
│   │   ├── page.tsx           # Projects archive with category filter
│   │   └── [slug]/page.tsx   # Dynamic in-depth project case study
│   ├── design/page.tsx        # Dedicated design gallery with Lightbox
│   ├── experience/page.tsx    # Experience and leadership trajectory
│   └── contact/page.tsx       # Contact and inquiry page
│
├── components/
│   ├── layout/                # Navbar, Footer, SectionHeader
│   ├── hero/                  # Hero section with dual badges and code card
│   ├── about/                 # Engineering & Design duality split cards
│   ├── skills/                # Categorized technical & creative stack grid
│   ├── projects/              # Project cards, category filter tabs
│   ├── design/                # Design cards, interactive Lightbox modal
│   ├── experience/            # Chronological experience timeline
│   ├── contact/               # Contact form with validation + Resume CTA
│   └── ui/                    # Reusable Button, Badge, Modal primitives
│
├── data/
│   ├── profile.ts             # Personal bio, social links, resume URL
│   ├── projects.ts            # Software & AI projects (SkillUp, Nutrition AI, WWIMS)
│   ├── designs.ts             # Graphic design and branding pieces
│   ├── experience.ts          # Career & leadership items
│   └── skills.ts              # Categorized engineering & design skills
│
├── types/
│   └── index.ts               # Shared TypeScript interfaces
│
└── lib/
    └── utils.ts               # Tailwind class merging utility
```

---

## 🚀 Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

---

## 🚢 Deployment (Vercel)

This application is ready for direct deployment to Vercel:

1. Push your code to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js and builds the project with zero configuration required.

---

## 📄 License

MIT © Rama Prodjowijono
