import styled from 'styled-components';
import { useTheme } from 'hooks/theme/useTheme';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTranslation } from 'react-i18next';

function ToggleTheme() {
    const { t } = useTranslation();
    const [themeMode, toggleTheme] = useTheme();

    return (
        <DarkModeSwitch
            checked={themeMode === 'dark'}
            onChange={() => {
                toggleTheme();
            }}
        />
    );
}
export default ToggleTheme;

const ToggleWrapper = styled.button`
    width: 6rem;
    cursor: pointer;
`;
