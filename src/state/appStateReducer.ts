import { nanoid } from 'nanoid';
import { ActionT } from './actions';
import { findItemIndexById } from '../utils/arrayUtils';

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

//renamed state to 'draft' - we can now mutate it with ImmerJS. (union type void is used to reset state to initial
// value)
export const appStateReducer = (draft: AppStateType, action: ActionT): AppStateType | void => {
    switch (action.type) {
        case "ADD_LIST": {
            draft.lists.push({
                id: nanoid(),
                title: action.payload,
                tasks: []
            })
            break;
        }
        case "ADD_TASK": {
            const { text, listId } = action.payload;
            const targetListIndex = findItemIndexById(draft.lists, listId);
            draft.lists[targetListIndex].tasks.push({
                id: nanoid(),
                text
            });
            break;
        }

        default: {
            break;
        }
    }
};
