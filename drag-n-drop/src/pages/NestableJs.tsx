import { ReactNode } from "react";
import Nestable, { Item } from "react-nestable";
import 'react-nestable/dist/styles/index.css';

interface ItemType {
    id: number,
    text: string,
    children?: Array<ItemType>
}

const NestableJs = () => {
    const items: Array<ItemType> = [
        {
            id: 0, text: 'Item 1',
            children: [
                {
                    id: 12, text: "Child 1 1",
                    children: [
                        { id: 13, text: "Child 1 1 1 " },
                        { id: 14, text: "Child 1 1 2 " },
                        { id: 15, text: "Child 1 1 3 " },
                    ]
                }
            ]
        },
        { id: 1, text: 'Item 2' },
        { id: 2, text: 'Item 3' },
        { id: 3, text: 'Item 4' },
        { id: 4, text: 'Item 5' },
        { id: 5, text: 'Item 6' },
        { id: 6, text: 'Item 7' },
        {
            id: 7, text: 'Item 8',
            children: [
                {
                    id: 71, text: "Child 8 1",
                    children: [
                        { id: 72, text: "Child 8 1 1 " },
                        { id: 73, text: "Child 8 1 2 " },
                        { id: 74, text: "Child 8 1 3 " },
                    ]
                }
            ]
        },
        { id: 8, text: 'Item 9' },
        { id: 9, text: 'Item 10' },
    ]

    const handleChange = (arg: {
        items: Item[];
        dragItem: Item;
        targetPath: number[];
    }) => {
        console.log(arg);
    }

    const renderItem = ({ item, handler }: { item: Item, handler: ReactNode }) => <div key={item.id} className="list-item">
        <span className="grip">
            {handler}
        </span>
        {item.text}
    </div>;
    return (
        <div className="list-container">
            <Nestable
                maxDepth={3}
                items={items}
                handler={
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z" /></svg>
                }
                renderItem={renderItem}
                onChange={handleChange}
            />
        </div>
    )
}

export default NestableJs;