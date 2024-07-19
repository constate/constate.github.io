import styled, { css } from 'styled-components';

export interface CallOutTextProps {
    $colorName?: string;
    $size?: 'XS' | 'S';
}

const getFontStyle = (props: CallOutTextProps) => {
    switch (props.$size) {
        case 'XS':
            return css`
                font-family: 'BROJSans-Medium';
                font-weight: 500;
            `;
        case 'S':
            return css`
                font-family: 'BROJSans-Semibold';
                font-weight: 600;
            `;
        default:
            return css`
                font-family: 'BROJSans-Medium';
                font-weight: 500;
            `;
    }
};

export const CallOutText = styled.p<CallOutTextProps>`
    font-size: 1.2rem;
    ${(props) => getFontStyle(props)};
    color: ${(props) =>
        props.$colorName
            ? props.theme.colors[props.$colorName]
            : props.theme.colors.textInfo};
`;
