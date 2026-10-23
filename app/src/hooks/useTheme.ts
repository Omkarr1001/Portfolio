import { useEffect } from 'react';

export const useTheme = (theme: 'home' | 'hotel' | 'medicine' | 'ai') => {
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'home') {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = theme;
    }
    return () => {
      delete root.dataset.theme;
    };
  }, [theme]);
};
