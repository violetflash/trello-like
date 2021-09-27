type ItemType = {
    id: string;
}

export const findItemIndexById = <TItem extends ItemType>(items: TItem[], id: string) => {
    return items.findIndex((item: TItem ) => item.id === id);
};
