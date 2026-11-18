import {
  availableCommands,
  portfolioCommandData,
  type CommandResult,
} from "./commands";
import { isThemeName, themeNames, type ThemeName } from "./themes";

export type CommandContext = {
  currentTheme: ThemeName;
  history: string[];
  startedAt: number;
};

const portfolioFiles = [
  "projects/",
  "about.txt",
  "skills.json",
  "experience.log",
  "contact.md",
];
const fileCommands: Record<
  string,
  "about" | "skills" | "experience" | "contact"
> = {
  "about.txt": "about",
  "skills.json": "skills",
  "experience.log": "experience",
  "contact.md": "contact",
};

export function parseCommand(input: string) {
  const [name = "", ...args] = input.trim().split(/\s+/);
  return { name: name.toLowerCase(), args };
}

export function handleCommand(
  input: string,
  context: CommandContext,
): CommandResult {
  const { name, args } = parseCommand(input);

  switch (name) {
    case "help":
      return { type: "help" };
    case "about":
      return { type: "about", text: portfolioCommandData.about };
    case "projects":
      return { type: "projects", projects: portfolioCommandData.projects };
    case "skills":
      return {
        type: "skills",
        technologies: portfolioCommandData.technologies,
      };
    case "experience":
      return {
        type: "experience",
        lines: [
          "Professional Experience",
          "",
          "I'm currently building my professional journey as a",
          "software developer.",
          "",
          "Although I don't have formal professional work",
          "experience to list yet, I've gained practical",
          "development experience through building personal",
          "projects.",
          "",
          "Explore my projects to see what I've built.",
        ],
      };
    case "contact":
      return {
        type: "contact",
        email: portfolioCommandData.contact.email,
        socialLinks: portfolioCommandData.contact.socialLinks,
      };
    case "clear":
      return { type: "clear" };
    case "ls":
      return { type: "ls", files: portfolioFiles };
    case "cat": {
      const file = args[0];
      if (!file)
        return { type: "cat-error", message: "cat: missing file name." };
      const mappedCommand = fileCommands[file.toLowerCase()];
      if (!mappedCommand)
        return { type: "cat-error", message: `cat: ${file}: no such file.` };
      return handleCommand(mappedCommand, context);
    }
    case "theme":
      if (!args[0])
        return {
          type: "theme-list",
          currentTheme: context.currentTheme,
          themes: themeNames,
        };
      {
        const requestedTheme = args[0].toLowerCase();
        return isThemeName(requestedTheme)
          ? { type: "theme-set", theme: requestedTheme }
          : { type: "theme-error", theme: args[0], themes: themeNames };
      }
    case "neofetch":
      return {
        type: "neofetch",
        currentTheme: context.currentTheme,
        uptime: Math.max(
          0,
          Math.floor((Date.now() - context.startedAt) / 1000),
        ),
      };
    case "whoami":
      return { type: "text", text: "visitor" };
    case "date":
      return { type: "text", text: new Date().toString() };
    case "echo":
      return { type: "text", text: args.join(" ") };
    case "history":
      return {
        type: "history",
        commands: context.history.filter((command) => command !== "history"),
      };
    default:
      return {
        type: "error",
        command: input.trim() || "(empty)",
      };
  }
}

export function getCommandSuggestions(input: string) {
  const query = input.trim().toLowerCase();

  return availableCommands
    .map((command) => command.name)
    .filter((command) => command.startsWith(query));
}

export { availableCommands };
