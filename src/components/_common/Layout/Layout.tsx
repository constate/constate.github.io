import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import ToggleTheme from 'components/_common/ToggleTheme/ToggleTheme';
import { ToggleLanguage } from '../ToggleLanguage/ToggleLanguage';

interface Props {}

export const Layout = (props: Props) => {
    return (
        <LayoutWrap>
            <Header>
                <LeftSection></LeftSection>
                <RightSection>
                    <ToggleLanguage />
                    <ToggleTheme />
                </RightSection>
            </Header>
            <Outlet />
        </LayoutWrap>
    );
};

const LayoutWrap = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: #ffffff;
`;
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6rem;
    background-color: ${({ theme }) => theme.colors.common};
    padding: 0 2.4rem;
`;

const LeftSection = styled.section`
    display: flex;
    align-items: center;
`;
const RightSection = styled.section`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;
