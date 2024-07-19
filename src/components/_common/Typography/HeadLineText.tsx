import styled from 'styled-components';

export interface HeadLineTextProps {
    $colorName?: string;
    $size?: 'XS' | 'S' | 'M' | 'L';
}

const getFontSize = (props: HeadLineTextProps) => {
    switch (props.$size) {
        case 'XS':
            return '2rem';
        case 'S':
            return '2.4rem';
        case 'M':
            return '3.6rem';
        case 'L':
            return '4.8rem';
        default:
            return '3.6rem';
    }
};

export const HeadLineText = styled.p<HeadLineTextProps>`
    font-family: 'BROJSans-Semibold';
    font-weight: 600;
    font-size: ${(props) => getFontSize(props)};
    color: ${(props) =>
        props.$colorName
            ? props.theme.colors[props.$colorName]
            : props.theme.colors.textInfo};
`;
