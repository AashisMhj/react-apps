import Draggable from "react-draggable";
const BasicExample = () =>{
    return <div>
        <Draggable >
            <div className="p-8 bg-yellow-200 cursor-move">
                drag me
            </div>
        </Draggable>
    </div>
}

export default BasicExample;