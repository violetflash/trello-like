export interface IList {
    type: "ADD_LIST";
    payload: string //type for list title
}

export interface ITask {
    type: "ADD_TASK";
    payload: { text: string; listId: string }
}

export type Action = IList | ITask;


//Action creators
export const AddTask = (
  text: string,
  listId: string
): Action => ({
  type: "ADD_TASK",
  payload: { text, listId }
});

export const AddList = (
  title: string
): Action => ({
  type: "ADD_LIST",
  payload: title
})