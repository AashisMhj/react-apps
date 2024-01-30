import { HTML5Backend } from "react-dnd-html5-backend"
import { useRef, useState } from "react";
import { useDrag, DndProvider, useDrop } from "react-dnd";
import {
    AiOutlineDrag
} from "react-icons/ai"
//
import { moveElementInArray } from "../../../helper/array.helper";
import { ItemType } from "../types";

interface Props {
    data: Array<ItemType>
}

const Card = ({ text, index, moveItem }: { isDragging?: boolean, text: string, index: number, moveItem: (dargIndex: number, hoverIndex: number) => void }) => {
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
        hover(item: ItemType) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }
        },
        drop(item: ItemType) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
        }
    })

    dragRef(drop(ref));

    return (
        <div ref={ref} className="flex gap-2 w-full items-center bg-blue-500 text-white mb-2 p-2" style={{ opacity }}>
            <span className="grip">
                <AiOutlineDrag />
            </span>
            {text}
        </div>
    )
}

const BasicExample = ({ data }: Props) => {
    const [items, setItems] = useState<ItemType[]>(data);

    function moveItem(dragIndex: number, hoverIndex: number) {
        const element_index = items.findIndex(el => el.index === dragIndex);
        const target_index = items.findIndex(el => el.index === hoverIndex)
        const new_items = moveElementInArray(items, element_index, target_index) as Array<ItemType>;
        setItems([...new_items]);
    }

    return (
        <div className="w-full">
            <DndProvider backend={HTML5Backend}>
                {
                    items.map((el,) => <Card key={el.text} text={el.text} index={el.index} moveItem={moveItem} />)
                }
            </DndProvider>
        </div>
    )
}

export default BasicExample;