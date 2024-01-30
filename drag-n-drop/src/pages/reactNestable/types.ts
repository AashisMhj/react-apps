export type ItemType = {
    id: number,
    text: string,
    children?: Array<ItemType>
}