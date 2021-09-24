export type Action =
    { type: "ADD_LIST"; payload: string } |  //payload: list title
    { type: "ADD_TASK"; payload: { text: string; listId: string } };