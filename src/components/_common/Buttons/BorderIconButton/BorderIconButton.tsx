import React from 'react';
import styled from 'styled-components';

interface Props {
    onClick?: () => void;
    src: string;
    alt?: string;
}

export const BorderIconButton = ({ onClick, src, alt }: Props) => {
    return (
        <FeatureIconBox onClick={onClick}>
            <FeatureIcon src={src} alt={alt} />
        </FeatureIconBox>
    );
};

const FeatureIconBox = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border: 0.2rem solid #eeeeee;
    border-radius: 0.8rem;
    background-color: #ffffff;
`;

const FeatureIcon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;
