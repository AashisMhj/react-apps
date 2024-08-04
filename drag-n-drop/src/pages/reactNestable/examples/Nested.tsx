import { ReactNode, useEffect, useState, useRef } from "react";
import Nestable, { Item } from "react-nestable";
import {
    AiOutlineDrag
} from "react-icons/ai";
//
import { ItemType } from "../types";

interface Props {
    items: Array<ItemType>
}

const SCROLL_THRESHOLD = 50;
const SCROLL_SPEED = 20;

const DepthOptions = Array(10).fill(0).map((_, index) => index + 1);

const NestedExample = ({ items }: Props) => {
    const [max_depth, setMaxDepth] = useState(DepthOptions[2]);
    const containerRef = useRef<HTMLDivElement>(null);
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
    const handleDrag = (e:DragEvent) => {
        console.log('handling drag');
        const container = containerRef.current;
        if (!container) return;
    
        const { top, bottom } = container.getBoundingClientRect();
        const { clientY } = e;
    
        if (clientY - top < SCROLL_THRESHOLD) {
          // Scroll up
          container.scrollTop -= SCROLL_SPEED;
        } else if (bottom - clientY < SCROLL_THRESHOLD) {
          // Scroll down
          container.scrollTop += SCROLL_SPEED;
        }
      };

      useEffect(() => {
        if(containerRef.current){
            const container = containerRef.current;
            if (!container) return;
            console.log
        
            container.addEventListener('dragover', handleDrag);
            
            // Cleanup the event listener on component unmount
            return () => {
              container.removeEventListener('dragover', handleDrag);
            };
        }
      }, []);
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
            <div  className="overflow-y-auto" style={{height: 'calc(100vh - 100px)'}}>
                <div ref={containerRef} >
                    Drop here
                </div>
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