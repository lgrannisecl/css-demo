import { ThemeType} from "./global/ThemeType";

export default (currentTheme: ThemeType, func: (theme: ThemeType) => any): any => {
  console.log('themeBuilder', currentTheme);
  return func(currentTheme);
}
