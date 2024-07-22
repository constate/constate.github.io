import React from 'react';
import styled from 'styled-components';
import useLanguage from 'hooks/language/useLanguage';
import { useTranslation } from 'react-i18next';

export const ToggleLanguage: React.FC = () => {
    const { t } = useTranslation();
    const { currentLanguage, toggleLanguage } = useLanguage();

    return (
        <ToggleWrapper
            style={{ width: 'max-content' }}
            onClick={toggleLanguage}
        >
            {t(`${currentLanguage}`)}
        </ToggleWrapper>
    );
};
const ToggleWrapper = styled.button`
    width: max-content;
    color: ${({ theme }) => theme.colors.textDefault};
    cursor: pointer;
`;
