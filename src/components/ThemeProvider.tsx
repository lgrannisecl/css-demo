import React, { useState, useEffect } from 'react';

import { ThemeType } from '../styles/global/ThemeType';

import themeImporter from '../styles/themeImporter';
import setGlobalCss from '../styles/global/globals';

type AllowedThemeKeys = 'default' | 'dark';

type Props = {
  isDarkTheme: boolean;
  children: React.ReactNode | null;
}

const defaultThemeKey: AllowedThemeKeys = 'default';

const initTheme = themeImporter(defaultThemeKey);
setGlobalCss(initTheme);

export const ThemeContext: React.Context<ThemeType | null> = React.createContext<ThemeType | null>(initTheme);

const Provider = (props: Props) => {
  const { children, isDarkTheme } = props;

  const [themeKey, setThemeKey ] = useState<AllowedThemeKeys>(defaultThemeKey);
  const [theme, setTheme] = useState<ThemeType>(initTheme);

  console.log('theme', theme);

  useEffect(() => {
    if (isDarkTheme && themeKey !== 'dark') {
      setThemeKey('dark');
      const t = themeImporter('dark');
      setTheme(t);
      setGlobalCss(t)
    } else if (!isDarkTheme && themeKey === 'dark') {
      setThemeKey('default');
      const t = themeImporter('default');
      setTheme(t);
      setGlobalCss(t);
    }
  }, [themeKey, isDarkTheme]);

  if(theme === null) return null;

  return (
    <ThemeContext.Provider value={theme}>{ children }</ThemeContext.Provider>
  )
}

export default Provider;
