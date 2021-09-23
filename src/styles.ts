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
`

