import { useState } from "react";
import BasicExample from "./examples/BasicExample";
import { ItemType } from "./types";
import SideBar from "../../components/SideBar";

enum DnDExampleTypes {
    Basic = "Basic",
}

export default function DnDPage() {
    const [current_example, setCurrentExample] = useState(DnDExampleTypes.Basic);

    const data:Array<ItemType> = [
        { index: 1, text: "Item One" },
        { index: 2, text: "Item Two" },
        { index: 3, text: "Item Three" },
        { index: 4, text: "Item Four" },
        { index: 5, text: "Item Five" },
        { index: 6, text: "Item Six" },
        { index: 7, text: "Item Seven" },
        { index: 8, text: "Item Eight" },
        { index: 9, text: "Item Nine" },
        { index: 10, text: "Item Ten" },
        { index: 11, text: "Item Eleven" },
    ];

    const Examples = {
        [DnDExampleTypes.Basic]: <BasicExample data={data} />
    }

    
    return (
        <div className="h-screen">
            <div className="h-full flex">
                <SideBar>
                    {
                        (
                            Object.keys(DnDExampleTypes) as Array<keyof typeof DnDExampleTypes>
                        ).map(el => <li key={el} className={` p-2 font-medium rounded cursor-pointer ${current_example === el ? "bg-white shadow-2xl text-green-950 font-bold" : "bg-green-700 text-white hover:text-gray-300"}`} onClick={() => setCurrentExample(el)}>{el}</li>)
                    }
                </SideBar>
                <div className="flex-1 flex justify-center items-center p-4">
                    {
                        Examples[current_example]
                    }
                </div>
            </div>
        </div>
    )
}