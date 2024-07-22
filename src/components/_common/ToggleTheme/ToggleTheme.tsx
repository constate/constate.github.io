import styled from 'styled-components';
import { useTheme } from 'hooks/theme/useTheme';
import { useTranslation } from 'react-i18next';

function ToggleTheme() {
    const { t } = useTranslation();
    const [themeMode, toggleTheme] = useTheme();

    return (
        <ToggleWrapper onClick={toggleTheme}>{t(`${themeMode}`)}</ToggleWrapper>
    );
}
export default ToggleTheme;

const ToggleWrapper = styled.button`
    width: 6rem;
    color: ${({ theme }) => theme.colors.textDefault};
    cursor: pointer;
`;
