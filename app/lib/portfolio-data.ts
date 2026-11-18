import type { IconType } from "react-icons";
import {
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiSupabase,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

export type TechnologyItem = {
  name: string;
  icon: IconType;
  accent: string;
};

export type TechnologyCategory = {
  title: string;
  description: string;
  items: TechnologyItem[];
};

export type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
};

export const portfolioIntro =
  "I've spent the last 2+ years building web applications, exploring new technologies, and solving problems through code. I enjoy creating responsive, intuitive experiences and turning complex ideas into software that makes people's lives easier.";

export const technologies: TechnologyCategory[] = [
  {
    title: "Frontend",
    description: "Modern UI and interactive app layers.",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss, accent: "text-cyan-300" },
      { name: "TypeScript", icon: SiTypescript, accent: "text-sky-400" },
      { name: "React JS", icon: FaReact, accent: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, accent: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side logic and APIs.",
    items: [
      { name: "Node.js", icon: SiNodedotjs, accent: "text-green-400" },
      { name: "Express.js", icon: SiExpress, accent: "text-white" },
      { name: "Python", icon: SiPython, accent: "text-blue-300" },
      { name: "Supabase", icon: SiSupabase, accent: "text-emerald-400" },
    ],
  },
  {
    title: "Database",
    description: "Data storage and retrieval.",
    items: [
      { name: "MySQL", icon: SiMysql, accent: "text-sky-300" },
      { name: "PostgreSQL", icon: SiPostgresql, accent: "text-indigo-300" },
      { name: "MongoDB", icon: SiMongodb, accent: "text-emerald-400" },
      { name: "Oracle", icon: FaDatabase, accent: "text-red-500" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Auspicious Woman",
    image: "/auspicious.png",
    description:
      "An entrepreneur learning platform offering courses from beginner to expert level, with certificates after completion. It helps women and gender-diverse learners build, scale, and grow their businesses through practical, accessible education.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "shadcn",
      "Supabase",
    ],
    link: "https://learn.auspiciousapp.com/",
    github: "",
  },
  {
    id: 2,
    name: "Loopit",
    image: "/loopit.png",
    description:
      "A movie and TV show discovery platform featuring advanced search functionality and genre filtering. Seamlessly browse through thousands of titles and click on any to view detailed information including ratings, cast, synopsis, and more.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js", "TMDB API"],
    link: "https://loopit-pi.vercel.app/",
    github: "https://github.com/nytkevin/loopit.git",
  },
  {
    id: 3,
    name: "Preston Day Clinic",
    image: "/prestondayclinic.png",
    description:
      "A fictional clinic website created to showcase frontend development and UI design skills. Features a modern healthcare interface with responsive layouts, service sections, doctor profiles, and appointment-focused user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    link: "https://prestondayclinic.vercel.app/",
    github: "https://github.com/nytkevin/preston-day-clinic.git",
  },
  {
    id: 4,
    name: "Cinepoint",
    image: "/cinepoint.png",
    description:
      "A full-stack movie booking application that lets users explore movies, browse showtimes, select seats, and book tickets securely. Features a responsive Next.js frontend, an Express REST API, PostgreSQL database integration, and Stripe payment processing.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    link: "https://cine-point-ca.vercel.app/",
    github: "https://github.com/nytkevin/cine-point",
  },
  {
    id: 5,
    name: "Spotify",
    image: "/spotify.png",
    description:
      "Music streaming integration project showcasing API integration and real-time data handling. Discover, play, and manage your favorite tracks.",
    tech: [
      "React",
      "TypeScript",
      "Spotify API",
      "Tailwind CSS",
      "SPOTIFY FREE API",
    ],
    link: "https://spotify-clone-two-fawn.vercel.app/",
    github: "https://github.com/nytkevin/spotify-clone.git",
  },
  {
    id: 6,
    name: "Rwanda Address Hub",
    image: "/rah.png",
    description:
      "An intuitive address selection tool for Rwanda. Select a province to view its districts, then progressively drill down to find your exact location. The final address is displayed in an easy-to-copy format for seamless integration.",
    tech: ["React", "TypeScript", "Rapid API", "Tailwind CSS"],
    link: "https://rwanda-address-hub.vercel.app/",
    github: "https://github.com/nytkevin/Rwanda-Address-Hub.git",
  },
  {
    id: 7,
    name: "Stock Market Stak",
    image: "/marketstack.png",
    description:
      "A market data lookup and dashboard app offering tickers, exchanges, end-of-day and historical data, splits, dividends, and currency/timezone information via internal API routes.",
    tech: ["React", "TypeScript", "redux", "MarketStack API", "Tailwind CSS"],
    link: "https://martek-stack.vercel.app/",
    github: "https://github.com/nytkevin/martek-Stack",
  },
];

export const contactInfo = {
  email: "nzayiutrikikevin@gmail.com",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kevin-nyt/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nyt_kevin/",
    },
    {
      name: "Github",
      url: "https://github.com/nytkevin",
    },
  ],
};
