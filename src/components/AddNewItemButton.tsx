import React, { useState } from 'react';
import { AddNewItemButtonContainer } from '../layouts/styles';
import { Form } from './Form';


type AddNewItemButtonPropsType = {
    onAdd(text: string): void;  // onClick callback when we click Create Item Button
    toggleButtonText: string;
    dark?: boolean;
}

export const AddNewItemButton = (props: AddNewItemButtonPropsType) => {
    const [showForm, setShowForm] = useState<boolean>(false); //unnecessary type boolean - it will provide automatically
    const { onAdd, toggleButtonText, dark } = props;

    const showFormHandle = () => {
        setShowForm(true);
    };

    const onFormSubmit = (text: string) => {
        setShowForm(false);
        onAdd(text);
    };

    if (showForm) {
        return <Form onFormSubmit={onFormSubmit}/>;
    }

    return (
        <AddNewItemButtonContainer dark={dark} onClick={showFormHandle}>
            {toggleButtonText}
        </AddNewItemButtonContainer>
    )
};
