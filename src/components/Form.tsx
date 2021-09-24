import React, { useState } from 'react';
import { FormButtonContainer, FormInput, FormContainer } from '../layouts/styles';

type FormPropsType = {
    onFormSubmit(text: string): void;
}

export const Form = ({ onFormSubmit }: FormPropsType) => {
    const [text, setText] = useState("");

    const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value);
    };

    return (
        <FormContainer>
            <FormInput value={text} onChange={inputHandler}/>
            <FormButtonContainer onClick={() => onFormSubmit(text)}>
                Create
            </FormButtonContainer>
        </FormContainer>
    )
};
