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
            <Column title="Column title # 1">
                <Card text="First Card"/>
            </Column>
            <Column title="Column title # 2">
                <Card text="First Card"/>
            </Column>
            <Column title="Column title # 3">
                <Card text="First Card"/>
                <Card text="Second Card"/>
            </Column>
            <AddNewItemButton onAdd={addColumnHandler} toggleButtonText="+ Add new List"/>
        </AppContainer>
    );
}
