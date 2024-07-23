import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import ToggleTheme from 'components/_common/ToggleTheme/ToggleTheme';

interface Props {}

export const Layout = (props: Props) => {
    return (
        <LayoutWrap>
            <Header>
                <ToggleTheme />
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
    width: 100%;
    height: 6rem;
    background-color: ${({ theme }) => theme.colors.common};
`;
