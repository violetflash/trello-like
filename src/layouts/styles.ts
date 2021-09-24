import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: #3179ba;
`;

export const ColumnContainer = styled.div`
  flex-grow: 0;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  width: 300px;
  min-height: 40px;
  background-color: #ebecf0;
`;

export const ColumnTitle = styled.h1`
  padding: 6px 16px 12px;
  font-weight: bold;
  font-size: 18px;
`;

export const CardContainer = styled.div`
    margin-bottom: 0.5rem;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    max-width: 300px;
    background-color: #fff;
    box-shadow: #091e4240 0 1px 0 0;
    cursor: pointer;
`;

type AddNewItemButtonContainerPropsType = {
    dark?: boolean;
}

export const AddNewItemButtonContainer = styled.button<AddNewItemButtonContainerPropsType>`
  background-color: ${props => props.dark ? "#dedede" : "#ffffff3d"};
  border-radius: 3px;
  border: none;
  color: ${props => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;

  &:hover {
    background-color: ${props => props.dark ? "#ccc" : "#ffffff52"};
  }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 300px;
    width: 100%;
`;

export const FormButtonContainer = styled.button`
    background-color: #5aac44;
    border-radius: 3px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 6px 12px;
    text-align: center;
`;

export const FormInput = styled.input`
    border-radius: 3px;
    border: none;
    box-shadow: #091e4240 0 1px 0 0;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`;

