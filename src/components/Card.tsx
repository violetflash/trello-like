import React from 'react';
import { CardContainer } from '../layouts/styles';

type CardPropsType = {
    text: string;
    id: string;
}

export const Card = ({ id, text }: CardPropsType) => {

    return (
        <CardContainer>
            {text}
        </CardContainer>
    )
};
