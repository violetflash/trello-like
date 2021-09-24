import React, { FC } from 'react';
import { ColumnContainer, ColumnTitle } from '../layouts/styles';
import { AddNewItemButton } from "./AddNewItemButton";

type ColumnPropsType = {
    title: string;
    // children: React.ReactNode;
}

export const Column: FC<ColumnPropsType> = ( { title, children } ) => {
    const addCardHandler = () => {};

    return (
        <ColumnContainer>
            <ColumnTitle>{title}</ColumnTitle>
            {children}
            <AddNewItemButton onAdd={addCardHandler} toggleButtonText="+ Add new Task" dark/>
        </ColumnContainer>
    )
};
