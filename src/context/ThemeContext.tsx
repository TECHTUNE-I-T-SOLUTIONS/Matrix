import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

export type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    // Optionally, read the system color scheme on app launch.
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setThemeState('dark');
    }
  }, []);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
