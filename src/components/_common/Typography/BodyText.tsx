import styled from 'styled-components';

export interface BodyTextProps {
    $colorName?: string;
    $size?: 'S' | 'M' | 'L';
}

const getFontSize = (props: BodyTextProps) => {
    switch (props.$size) {
        case 'S':
            return '1.4rem';
        case 'M':
            return '1.6rem';
        case 'L':
            return '1.8rem';
        default:
            return '1.6rem';
    }
};

export const BodyText = styled.p<BodyTextProps>`
    font-family: 'BROJSans-Medium';
    font-weight: 500;
    font-size: ${(props) => getFontSize(props)};
    color: ${(props) =>
        props.$colorName
            ? props.theme.colors[props.$colorName]
            : props.theme.colors.textInfo};
`;
