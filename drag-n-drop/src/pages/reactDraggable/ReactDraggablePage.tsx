import { useState } from "react";
//
import SideBar from "../../components/SideBar";
import BasicExample from "./examples/BasicExample";

enum ReactDraggableExample {
    Basic = "Basic"
}

const ReactDraggablePage = () => {
    const [current_example, setCurrentExample] = useState(ReactDraggableExample.Basic);

    const Examples = {
        [ReactDraggableExample.Basic]: <BasicExample />
    }

    return (

        <div className="h-screen">
            <div className="h-full flex">
                <SideBar>
                    {
                        (
                            Object.keys(ReactDraggableExample) as Array<keyof typeof ReactDraggableExample>
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

export default ReactDraggablePage;