export interface IList {
    type: "ADD_LIST";
    payload: string //type for list title
}

export interface ITask {
    type: "ADD_TASK";
    payload: { text: string; listId: string }
}

export interface IMove {
  type: "MOVE_LIST";
  payload: { draggedId: string, hoverId: string }
}

export type ActionT = IList | ITask | IMove;


//Action creators
export const addTask = (
    text: string,
    listId: string
): ActionT => ({
    type: "ADD_TASK",
    payload: { text, listId }
});

export const addList = (
    title: string
): ActionT => ({
    type: "ADD_LIST",
    payload: title
})

export const moveList = (
  draggedId: string,
  hoverId: string
): ActionT => ({
  type: "MOVE_LIST",
  payload: { draggedId, hoverId }
})
