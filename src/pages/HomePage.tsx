import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface Props {}

export const HomePage = (props: Props) => {
    return (
        <>
            <QRCodeSVG value="https://github.com/constate" />
        </>
    );
};
