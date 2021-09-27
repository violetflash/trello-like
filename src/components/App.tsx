import React from 'react';
import { AppContainer } from '../layouts/styles';
import { Column } from "./Column";
import { useAppState } from '../state/AppStateContext';
import { AddNewItemButton } from "./AddNewItemButton";

import { addList } from "../state/actions";

export const App = () => {
    const { lists, dispatch } = useAppState();

    const addColumnHandler = (text: string) => {
        dispatch(addList(text));
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
