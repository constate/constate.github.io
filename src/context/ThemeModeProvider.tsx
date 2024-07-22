import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DARK_THEME, LIGHT_THEME } from 'styles/theme/theme';

type Props = {
    children?: ReactNode;
};

export type ThemeModeType = 'light' | 'dark';

type ThemeContextProps = {
    themeMode: ThemeModeType;
    setThemeMode: React.Dispatch<React.SetStateAction<ThemeModeType>>;
};

let initTheme: ThemeModeType =
    (localStorage.getItem('broj_theme') as ThemeModeType) || 'dark';
const ThemeContext = createContext<ThemeContextProps>({
    themeMode: initTheme,
    setThemeMode: () => {},
});

export default function ThemeModeProvider({ children }: Props) {
    const [themeMode, setThemeMode] = useState<ThemeModeType>(initTheme);
    const targetTheme = themeMode === 'light' ? LIGHT_THEME : DARK_THEME;

    return (
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
            <ThemeProvider theme={targetTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}

export { ThemeContext };
