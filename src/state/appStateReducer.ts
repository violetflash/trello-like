import { Action } from './actions';

export type TaskType = {
  id: string;
  text: string;
}

export type ListType = {
  id: string;
  title: string;
  tasks: TaskType[];
}

export type AppStateType = {
  lists: ListType[]
}

export const appStateReducer = (state: AppStateType, action: Action) => {};