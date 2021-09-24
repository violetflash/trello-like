import React from 'react';
import { CardContainer } from '../layouts/styles';

type CardPropsType = {
    text: string;
}

export const Card = ({ text }: CardPropsType) => {
    return (
        <CardContainer>
            {text}
        </CardContainer>
    )
};
