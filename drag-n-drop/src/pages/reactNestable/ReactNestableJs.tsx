import { useState } from "react";
import 'react-nestable/dist/styles/index.css';
//
import './react-nestable.css';
import { ItemType } from "./types";
import NestableExample from "./examples/Nested";
import NestableCollapsableExample from "./examples/NestableCollapsable";

enum ExampleTypes {
    Nestable = "Nestable",
    Collapsable = "Collapsable"
}

const NestableJs = () => {
    const [current_example, setCurrentExample] = useState(ExampleTypes.Nestable);
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
        { id: 9, text: 'Item 10 Ten' },
    ]
    const Examples = {
        [ExampleTypes.Nestable]: <NestableExample items={items} />,
        [ExampleTypes.Collapsable]: <NestableCollapsableExample items={items} />
    }


    return (
        <div className="h-screen">
            <div className="h-full flex">
                <nav className="h-full w-[300px] bg-green-500">
                    <ul className="flex gap-4 flex-col p-4">
                        {
                            (
                                Object.keys(ExampleTypes) as Array<keyof typeof ExampleTypes>
                            ).map(el => <li key={el} className={` p-2 font-medium rounded cursor-pointer ${current_example === el ?  "bg-white shadow-2xl text-green-950 font-bold" : "bg-green-700 text-white hover:text-gray-300"}`} onClick={() => setCurrentExample(el)}>{el}</li>)
                        }
                    </ul>
                </nav>
                <div className="flex-1 flex justify-center items-center p-4">
                    {
                        Examples[current_example]
                    }
                </div>
            </div>
        </div>
    )
}

export default NestableJs;