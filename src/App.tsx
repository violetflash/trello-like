import {AppContainer, ColumnContainer, ColumnTitle } from './styles';

export const App = () => {
    return (
        <AppContainer>
            <ColumnContainer>
                <ColumnTitle>Column 1</ColumnTitle>
            </ColumnContainer>

            <ColumnContainer>
                <ColumnTitle>Column 2</ColumnTitle>
            </ColumnContainer>
        </AppContainer>
    );
}
