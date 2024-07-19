import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface Props {}

export const HomePage = (props: Props) => {
    const { t } = useTranslation();
    return (
        <HomePageWrap>
            <HeaderWrap>
                <HeaderTitle>{t('introduce_header_title')}</HeaderTitle>
                <HeaderMain>{t('introduce_header_main')}</HeaderMain>
                <HeaderLast>{t('introduce_header_last')}</HeaderLast>
            </HeaderWrap>
            <QRCodeSVG value="https://github.com/constate" />
        </HomePageWrap>
    );
};

const HomePageWrap = styled.div``;
const HeaderWrap = styled.header``;
const HeaderTitle = styled.h1``;
const HeaderMain = styled.p``;
const HeaderLast = styled.p``;
