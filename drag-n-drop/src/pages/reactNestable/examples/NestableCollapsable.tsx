import Nestable, { Item } from "react-nestable";
import { AiOutlineDrag, AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
//
import { ItemType } from "../types";
import { ReactNode, useState } from "react";

interface Props {
    items: Array<ItemType>
}


const NestableCollapsableExample = ({ items }: Props) => {
    const [collapseAll, setCollapseAll] = useState(false);
    const Handler = () => {
        return <span className="grip py-2">
            <AiOutlineDrag />
        </span>
    }
    const Collapser = ({ isCollapsed }: { isCollapsed: boolean }) => {
        return (
            <div className="cursor-pointer">
                {isCollapsed ? <AiFillCaretRight /> : <AiFillCaretDown />}
            </div>
        )
    }
    const renderItem = ({ item, handler, collapseIcon }: { item: Item, handler: ReactNode, collapseIcon: ReactNode }) => {
        return (
            <div className="flex items-center gap-2 bg-blue-400 rounded py-2">
                {handler}
                {collapseIcon}
                <div>
                    {item.text}
                </div>
            </div>
        )
    }
    return (
        <div className="h-full w-full">
            <div className="flex gap-2 mt-1 mb-4 items-center">
                <button className="py-1 px-4 rounded bg-sky-600 hover:bg-sky-800 text-white" onClick={() => setCollapseAll(!collapseAll)}>{collapseAll ? "Exapnd All" : "Collapse All"}</button>
            </div>
            <div className="overflow-y-auto h-full">
                <div className="list-contianer w-full">
                    <Nestable
                        maxDepth={3}
                        items={items}
                        renderItem={renderItem}
                        handler={<Handler />}
                        renderCollapseIcon={({ isCollapsed }: { isCollapsed: boolean }) => <Collapser isCollapsed={isCollapsed} />}
                        collapsed={collapseAll}
                    />
                </div>
            </div>
        </div>
    )
}

export default NestableCollapsableExample;