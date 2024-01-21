import { ReactNode, useState } from "react";
import Nestable, { Item } from "react-nestable";
import {
    AiOutlineDrag
} from "react-icons/ai";
//
import { ItemType } from "../types";

interface Props {
    items: Array<ItemType>
}

const DepthOptions = Array(10).fill(0).map((_, index) => index + 1);

const NestedExample = ({ items }: Props) => {
    const [max_depth, setMaxDepth] = useState(DepthOptions[2]);
    const handleChange = (arg: {
        items: Item[];
        dragItem: Item;
        targetPath: number[];
    }) => {
        console.log(arg);
    }

    const renderItem = ({ item, handler }: { item: Item, handler: ReactNode }) => <div key={item.id} className="flex  items-center gap-2 bg-blue-400 rounded">
        <span className="grip p-2">
            {handler}
        </span>
        {item.text}
    </div>;
    return (
        <div className="h-full w-full">
            <div className="flex gap-2 mt-1 mb-4 items-center">
                <span className="text-xl">Controls :</span>
                <div className="flex gap-2">
                    <label htmlFor="depth-control">Max Depth</label>
                    <select name="depth-control" id="depth-control" className="px-2" onChange={(event) =>setMaxDepth(parseInt(event.target.value)) }>
                        {
                            DepthOptions.map((option) => <option key={option} value={option}>{option}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="overflow-y-auto h-full">
                <Nestable
                    maxDepth={max_depth}
                    items={items}
                    handler={<AiOutlineDrag />}
                    renderItem={renderItem}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default NestedExample;