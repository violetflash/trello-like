import React, { FC } from 'react';
import { ColumnContainer, ColumnTitle } from '../layouts/styles';
import { AddNewItemButton } from "./AddNewItemButton";
import { useAppState } from "../state/AppStateContext";
import {Card} from "./Card";

type ColumnPropsType = {
    title: string;
    id: string;
}

export const Column: FC<ColumnPropsType> = ( { title, id } ) => {
    const { getTasksByListId } = useAppState();
    const cards = getTasksByListId(id).map((task) => <Card key={task.id} id={task.id} text={task.text}/>)

    const addCardHandler = () => {};

    return (
        <ColumnContainer>
            <ColumnTitle>{title}</ColumnTitle>
            {cards}
            <AddNewItemButton onAdd={addCardHandler} toggleButtonText="+ Add new Task" dark/>
        </ColumnContainer>
    )
};
