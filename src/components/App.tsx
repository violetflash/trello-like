import React from 'react';
import { AppContainer } from '../layouts/styles';
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItemButton } from "./AddNewItemButton";

export const App = () => {
    const addColumnHandler = (text: string) => {
        console.log(text);
    };

    return (
        <AppContainer>
            <Column title="Column title">
                <Card text="First Card"/>
            </Column>
            <AddNewItemButton onAdd={addColumnHandler} toggleButtonText="+ Add new Column"/>
        </AppContainer>
    );
}
