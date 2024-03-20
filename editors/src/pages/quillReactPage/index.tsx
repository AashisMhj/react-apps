import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function QuillReactPage(){
    const [value, setValue] = useState('');
    return <div className="flex items-center justify-center mt-10">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
}
