import { createContext } from 'react';

type AppStateContextType = {
  lists: ListType[];
  getTasksById(id: number): TaskType[];
}

const AppStateContext = createContext<AppStateContextType>({} as AppStateContextType);



export type TaskType = {
  id: string;
  text: string;
}

export type ListType = {
  id: string;
  title: string;
  tasks: TaskType[];
}

export type AppDataType = {
  lists: ListType[]
}

export const AppData: AppDataType = {
  lists: [
    {
      id: "0",
      title: "Done",
      tasks: [{id: "t0", text: "Todo text 1"}]
    },
    {
      id: "1",
      title: "Todo",
      tasks: [{id: "g1", text: "Todo Task 1"}]
    },
    {
      id: "2",
      title: "Plans",
      tasks: [{id: "j0", text: "Plans text 1"}, {id: "j1", text: "Plans text 2"}]
    }
  ]
}