import { createContext, useContext, FC, Dispatch } from 'react';
import { useImmerReducer } from 'use-immer';
import { ListType, TaskType, AppStateType, appStateReducer } from './appStateReducer';
import { ActionT } from './actions';


type AppStateContextType = {
  lists: ListType[];
  getTasksByListId(id: string): TaskType[];
  dispatch: Dispatch<ActionT>;
}

const AppStateContext = createContext<AppStateContextType>({} as AppStateContextType); //trick that makes typescript
// think that our EMPTY object actually has this type



export const appData: AppStateType = {
  lists: [
    {
      id: "0",
      title: "Done",
      tasks: [{id: "t0", text: "Done text 1"}]
    },
    {
      id: "1",
      title: "Todo",
      tasks: [{id: "g1", text: "Todo Task 1"}]
    },
    {
      id: "2",
      title: "Plans",
      tasks: [{id: "j0", text: "Plans text 1"}, {id: "j1", text: "Plans text 2"}, {id: "j2", text: "Plans text 3"}]
    }
  ]
}

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find(list => list.id === id)?.tasks || [];
  };

  const value = { lists, getTasksByListId, dispatch };

  return (
      <AppStateContext.Provider value={value}>
        {children}
      </AppStateContext.Provider>
  )
}

export const useAppState = () => useContext(AppStateContext);
