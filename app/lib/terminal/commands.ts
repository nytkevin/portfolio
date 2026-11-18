import {
  contactInfo,
  portfolioIntro,
  projects,
  technologies,
} from "../portfolio-data";
import type { ThemeName } from "./themes";

export const availableCommands = [
  { name: "help", description: "Display available commands" },
  { name: "about", description: "Learn more about me" },
  { name: "projects", description: "Explore my personal projects" },
  { name: "skills", description: "View my technical skills" },
  { name: "experience", description: "Explore my development experience" },
  { name: "contact", description: "Find my contact information" },
  { name: "clear", description: "Clear terminal output" },
  { name: "ls", description: "List portfolio files" },
  { name: "cat", description: "Read a portfolio file" },
  { name: "theme", description: "Change terminal theme" },
  { name: "neofetch", description: "Display system information" },
  { name: "date", description: "Display the current date" },
  { name: "history", description: "Display command history" },
] as const;

export type CommandName = (typeof availableCommands)[number]["name"];

export type CommandResult =
  | { type: "help" }
  | { type: "about"; text: string }
  | { type: "projects"; projects: typeof projects }
  | { type: "skills"; technologies: typeof technologies }
  | { type: "experience"; lines: string[] }
  | {
      type: "contact";
      email: string;
      socialLinks: typeof contactInfo.socialLinks;
    }
  | { type: "ls"; files: string[] }
  | { type: "cat-error"; message: string }
  | { type: "theme-list"; currentTheme: ThemeName; themes: ThemeName[] }
  | { type: "theme-set"; theme: ThemeName }
  | { type: "theme-error"; theme: string; themes: ThemeName[] }
  | { type: "neofetch"; currentTheme: ThemeName; uptime: number }
  | { type: "text"; text: string; muted?: boolean }
  | { type: "history"; commands: string[] }
  | { type: "error"; command: string }
  | { type: "clear" };

export type CommandEntry = {
  command: string;
  result: Exclude<CommandResult, { type: "clear" }>;
};

export const portfolioCommandData = {
  about: portfolioIntro,
  projects,
  technologies,
  contact: contactInfo,
};
