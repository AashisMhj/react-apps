import Nestable, { Item } from "react-nestable";
import 'react-nestable/dist/styles/index.css';

interface ItemType{
    id: number,
    text: string,
    children?: Array<ItemType>
}

const NestableJs = () =>{
    const items:Array<ItemType> = [
        {
            id: 0, text: 'Item 1', 
            children: [
                {
                    id: 12, text: "Child 1 1", 
                    children: [
                        {id: 13, text: "Child 1 1 1 "},
                        {id: 14, text: "Child 1 1 2 "},
                        {id: 15, text: "Child 1 1 3 "},
                    ]
                }
            ]
        },
        {id: 1, text: 'Item 2'},
        {id: 2, text: 'Item 3'},
        {id: 3, text: 'Item 4'},
        {id: 4, text: 'Item 5'},
        {id: 5, text: 'Item 6'},
        {id: 6, text: 'Item 7'},
        {
            id: 7, text: 'Item 8',
            children: [
                {
                    id: 71, text: "Child 8 1", 
                    children: [
                        {id: 72, text: "Child 8 1 1 "},
                        {id: 73, text: "Child 8 1 2 "},
                        {id: 74, text: "Child 8 1 3 "},
                    ]
                }
            ]
        },
        {id: 8, text: 'Item 9'},
        {id: 9, text: 'Item 10'},
    ]

    const handleChange = (arg:{
        items: Item[];
        dragItem: Item;
        targetPath: number[];
    })=>{
        console.log(arg);
    }
    
    const renderItem = ({item}:{item:Item}) => <div className="list-item">{item.text}</div>;
    // const renderItem = ({item}:{item:Item}) => <div>{item.text}</div>
    return (
        <div className="list-container">
            <Nestable 
                maxDepth={3}  
                items={items} 
                handler={<span>handler</span>}
                renderItem={renderItem} 
                onChange={handleChange} 
            />
        </div>
    )
}

export default NestableJs;