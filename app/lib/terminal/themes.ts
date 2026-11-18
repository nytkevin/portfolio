export type ThemeName = "ice" | "mint" | "amber" | "violet" | "rose";

export type ThemeDefinition = {
  accent: string;
  accent2: string;
};

export const THEMES: Record<ThemeName, ThemeDefinition> = {
  ice: { accent: "#7cc7ff", accent2: "#ffb86b" },
  mint: { accent: "#6ee7b7", accent2: "#f5d06f" },
  amber: { accent: "#ffb454", accent2: "#8fd3ff" },
  violet: { accent: "#b79cff", accent2: "#7ee2a8" },
  rose: { accent: "#ff8fab", accent2: "#9ad7ff" },
};

export const themeNames = Object.keys(THEMES) as ThemeName[];

export function isThemeName(value: string): value is ThemeName {
  return themeNames.includes(value as ThemeName);
}
