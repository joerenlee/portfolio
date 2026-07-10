# Joeren Lee — Portfolio

Personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/
    layout.tsx        # root layout, font, metadata, pre-paint theme script
    page.tsx          # composes the sections
    globals.css       # Tailwind + solid colour tokens (no opacity)
  components/
    Nav.tsx           # top bar + animated hamburger (client)
    ThemeToggle.tsx   # system / light / dark (client)
    Chip.tsx          # bordered tag/skill pill
    ProjectCard.tsx
    SectionLabel.tsx
    Cursor.tsx        # blinking hero cursor
    sections/
      Hero.tsx
      Work.tsx
      Experience.tsx
      Skills.tsx
      Footer.tsx
  data/
    portfolio.ts      # all content (projects, experience, skills, certs)
public/

## Notes
- Replace `public/CV2026.pdf` with the real resume file.
