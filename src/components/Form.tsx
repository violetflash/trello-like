import React, { useState } from 'react';
import { FormButtonContainer, FormInput, FormContainer } from '../layouts/styles';
import { UseFocus } from '../utils/useFocus';

type FormPropsType = {
    onFormSubmit(text: string): void;

}

export const Form = ({ onFormSubmit }: FormPropsType) => {
    const [text, setText] = useState("");
    const inputRef = UseFocus();

    const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value);
    };

    const keyPressHandle:  React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key !== 'Enter') return;

        onFormSubmit(text);
    }

    return (
        <FormContainer>
            <FormInput ref={inputRef} value={text} onChange={inputHandler} onKeyPress={keyPressHandle}/>
            <FormButtonContainer onClick={() => onFormSubmit(text)}>
                Create
            </FormButtonContainer>
        </FormContainer>
    )
};
