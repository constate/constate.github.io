import styled from 'styled-components';

export const MainBackgroundComponent = () => {
    return <MainBackgroundWrap></MainBackgroundWrap>;
};

const MainBackgroundWrap = styled.section`
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 60px;
    background-color: chocolate;
`;
