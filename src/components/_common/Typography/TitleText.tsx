import styled from 'styled-components';

export interface TitleTextProps {
    $colorName?: string;
    $size?: 'S' | 'M' | 'L';
}

const getFontSize = (props: TitleTextProps) => {
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

export const TitleText = styled.p<TitleTextProps>`
    font-family: 'BROJSans-Semibold';
    font-weight: 600;
    font-size: ${(props) => getFontSize(props)};
    color: ${(props) =>
        props.$colorName
            ? props.theme.colors[props.$colorName]
            : props.theme.colors.textInfo};
`;
