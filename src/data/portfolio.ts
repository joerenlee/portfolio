export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
}

export interface Project {
  no: string;
  year: string;
  name: string;
  url: string;
  desc: string;
  tags: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  detail: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Cert {
  name: string;
  year: string;
}

export const nav: NavItem[] = [
  { label: "about", href: "#about" },
  { label: "work", href: "#work" },
  { label: "experience", href: "#exp" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export const hero = {
  prompt: "$ whoami",
  name: "Joeren Lee",
  tagline: "Full Stack Developer / AI Engineer",
  cv: "/CV2026.pdf",
};

export const socials: Social[] = [
  { label: "Linkedin", href: "https://www.linkedin.com/in/joeren-lee-7523371bb/" },
  { label: "Github", href: "https://github.com/joerenlee" },
  { label: "Gitlab", href: "https://gitlab.com/joerenlee" },
];

export const about: string[] = [
  "Full Stack Developer with 4 years shipping production web applications. I own features end to end: frontend, backend, database, and deployment. I have worked in agile Scrum teams, modernized legacy systems, and lately have been building with AI.",
  "In my current role I also run sales — so I translate fluently between technical work and business outcomes.",
];

export const projects: Project[] = [
  {
    no: "01",
    year: "2023",
    name: "Go-El Electrical Products Trading Website",
    url: "https://www.go-elshop.com/",
    desc: "Company static website for Go-El Electrical Products Trading.",
    tags: ["WordPress", "E-commerce", "Shopify"],
  },
  {
    no: "02",
    year: "2026",
    name: "Go-El Inventory & Sales Management System",
    url: "https://go-el-inventory.onrender.com/",
    desc: "Inventory and sales management system for Go-El: tracks stock, records sales, and gives the team a single operational dashboard.",
    tags: [
      "React 18",
      "Vite 5",
      "React-Router-Dom 6",
      "Axios",
      "Recharts",
      "Lucide-React",
      "ESLint",
      "Render",
      "MongoDB Atlas",
      "Git/GitHub",
      "REST API",
      "JWT",
    ],
  },
  {
    no: "03",
    year: "2021",
    name: "JetTrack",
    url: "https://capstone3-client-murex.vercel.app/login",
    desc: "A full MERN budget and expense tracker web application with authentication and CRUD functionality with Graphs and Nodemailer, deployed on Vercel.",
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Google Auth",
      "Nodemailer",
      "Vercel",
    ],
  },
  {
    no: "04",
    year: "2021",
    name: "CodeMuster Bookings",
    url: "https://joerenlee.gitlab.io/capstone2-lee/",
    desc: "Course booking web application with complete authentication and CRUD functionality built and deployed on GitLab Pages.",
    tags: [
      "MongoDB",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "JQuery",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "Aug 2023 — now",
    role: "Sales Executive / Web Developer",
    company: "Go-El Electrical Products Trading",
    detail:
      "Launched and managed the company's online presence: built go-elshop.com on WordPress, stood up a Shopify e-commerce store, and ran the Shopee storefront. Created an Inventory and Sales Management System to ease the pain of certain business processes.",
  },
  {
    period: "Jan 2023 — Jun 2023",
    role: "Full Stack Developer",
    company: "Global Mobility Service Inc",
    detail:
      "Built and maintained a web portal for internal and external users, integrating existing IoT-device APIs. Delivered milestones on a Scrum team alongside senior developers, PM, and QA.",
  },
  {
    period: "Jan 2022 — Jan 2023",
    role: "Full Stack Java Developer",
    company: "Collabera Digital",
    detail:
      "Developed and deployed a new page of the Accenture site with AngularJS, Node.js, and PostgreSQL. Migrated legacy VB/.NET/MySQL to a modern TypeScript stack, and built AWS Lambda functions and APIs.",
  },
  {
    period: "May 2021 — Jan 2022",
    role: "Software Developer",
    company: "Proxa Limited",
    detail:
      "Built an e-commerce site (20price.com) for a Hong Kong client on the MERN stack, and wrote automated Cypress test scripts to safeguard UI/UX quality.",
  },
];

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "AngularJS",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "ESLint",
      "Prettier",
      "Vite",
      "Next.js",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "AWS Lambda",
      "OAuth",
      "MySQL",
      "Java",
    ],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "GitLab", "Cypress.js", "Shopify", "WordPress", "Scrum"],
  },
  {
    group: "AI & Machine Learning",
    items: [
      "Claude Code",
      "Claude Design",
      "Codex",
      "Anthropic",
      "OpenAI",
      "Hugging Face",
      "Gemini",
      "Elementor AI",
    ],
  },
];

export const certs: Cert[] = [
  {
    name: "Computer Programming Certification — Zuitt Coding Bootcamp",
    year: "2021",
  },
];
