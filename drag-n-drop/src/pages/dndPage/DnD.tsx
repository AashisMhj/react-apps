import { useRef, useState } from "react";
import { useDrag, DndProvider, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { moveElementInArray } from "../../helper/array.helper";

interface ItemType {
    text: string,
    index: number
}

function Card({ text, index, moveItem }: { isDragging?: boolean, text: string, index:number, moveItem:(dargIndex:number, hoverIndex:number) => void }) {
    const ref = useRef<HTMLDivElement>(null);
    const [{ opacity }, dragRef] = useDrag(() => ({
        type: 'card',
        item: { text, index },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })

    }), []);

    const [, drop] = useDrop({
        accept: 'card',
        hover(item:ItemType) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex){
                return;
            }
        },
        drop(item:ItemType){
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex){
                console.log(dragIndex, hoverIndex);
                console.log('same index');
                return;
            }
            moveItem(dragIndex, hoverIndex);
        }
    })

    dragRef(drop(ref));

    return (
        <div ref={ref} className="list-item" style={{ opacity }}>
            <span className="grip">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z" /></svg>
            </span>
            {text}
        </div>
    )
}


export default function DnDPage() {
    const [items,setItems] = useState<ItemType[]>([
        { index: 1, text: "Item One" },
        { index: 2, text: "Item Two" },
        { index: 3, text: "Item Threee" }
    ]);

    function moveItem(dragIndex:number, hoverIndex:number){
        const element_index = items.findIndex(el => el.index === dragIndex);
        const target_index = items.findIndex(el => el.index === hoverIndex)
        const new_items = moveElementInArray(items, element_index, target_index) as Array<ItemType>;
        setItems([...new_items]);
    }
    return (
        <div className="list-container">
            <DndProvider backend={HTML5Backend}>
                {
                    items.map((el,) => <Card key={el.text} text={el.text} index={el.index} moveItem={moveItem} />)
                }
            </DndProvider>
        </div>
    )
}