import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
//
import { Button } from "../../components";

export default function TinyMCEPage() {
    const editorRef = useRef(null);
    const log = () => {
        console.log('logging');
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }
    return <div className="flex justify-center flex-col gap-2 p-0 lg:p-8">
        <Editor
            onInit={(evt, editor) => editorRef.current}
            initialValue="<p>This is the initial content of the eidtor </p>"
            tinymceScriptSrc="/tinymce/js/tinymce/tinymce.min.js"
            init={{
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
        <Button text="Print Value" clickHandler={() => log()} />
    </div>
}