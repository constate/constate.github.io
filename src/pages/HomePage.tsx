import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';

interface Props {}

export const HomePage = (props: Props) => {
    return (
        <HomePageWrap>
            <QRCodeSVG value="https://github.com/constate" />
        </HomePageWrap>
    );
};

const HomePageWrap = styled.div``;
