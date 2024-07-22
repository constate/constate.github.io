import { useCallback, useContext } from 'react';
import { ThemeContext, ThemeModeType } from 'context/ThemeModeProvider';

type UseThemeProps = [themeMode: ThemeModeType, toggleTheme: () => void];

function useTheme(): UseThemeProps {
    const { themeMode, setThemeMode } = useContext(ThemeContext);
    const toggleTheme = useCallback(() => {
        if (themeMode === 'light') {
            localStorage.setItem('broj_theme', 'dark');
            setThemeMode('dark');
        } else {
            localStorage.setItem('broj_theme', 'light');
            setThemeMode('light');
        }
    }, [themeMode]);
    return [themeMode, toggleTheme];
}

export { useTheme };
