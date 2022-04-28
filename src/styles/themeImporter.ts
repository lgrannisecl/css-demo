import { ThemeType } from "./global/ThemeType";

export default function(themeKey: string): ThemeType {
  const theme: ThemeType = require(`./theme-${themeKey}`).default as ThemeType;
  return theme;
}
