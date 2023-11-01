import { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import styles from "./sortable.module.css";

interface ItemType {
    id: number;
    name: string
}


const SortableJS: FC = () => {
    const [state, setState] = useState<ItemType[]>([
        { id: 1, name: "one" },
        { id: 2, name: "two" },
        { id: 3, name: "Three" },
        { id: 4, name: "Four" },
        { id: 5, name: "Five" },
        { id: 6, name: "Six" },
        { id: 7, name: "Seven" },
        { id: 8, name: "Eight" },
        { id: 9, name: "Nine" },
        { id: 10, name: "Ten" },
        { id: 11, name: "Eleven" },
        { id: 12, name: "Twelve" },
    ]);

    return (
        <div className={styles.list}>
            <ReactSortable list={state} setList={setState} animation={200} ghostClass="ghost-class" chosenClass="chosen-class">
                {
                    state.map(item => <div key={item.id} className={styles.item} >{item.name}</div>)
                }
            </ReactSortable>
        </div>
    )
}

export default SortableJS;
