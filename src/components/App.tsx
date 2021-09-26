import React from 'react';
import { AppContainer } from '../layouts/styles';
import { Column } from "./Column";
import { useAppState } from '../state/AppStateContext';
import { AddNewItemButton } from "./AddNewItemButton";

export const App = () => {
    const { lists } = useAppState();

    const addColumnHandler = (text: string) => {
        console.log(text);
    };

    const columns = lists.map(list => {
        const { id, title } = list;
        return <Column key={id} title={title} id={id}/>;
    })

    return (
        <AppContainer>
            {columns}
            <AddNewItemButton onAdd={addColumnHandler} toggleButtonText="+ Add new List"/>
        </AppContainer>
    );
}
