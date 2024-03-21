import { EditorContent, useEditor } from "@tiptap/react";
import { mergeAttributes } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import { useEffect } from "react";

type Levels = 1 | 2 | 3 | 4 | 5 | 6;

const classes: Record<Levels, string> = {
    1: 'text-8xl',
    2: 'text-6xl',
    3: 'text-4xl',
    4: 'text-3xl',
    5: 'text-2xl',
    6: 'text-lg'
}

export default function TipTapHeadingExample(){
    const content = 'Just some text to show';
    const editor =  useEditor({
        editorProps: {
            attributes: {
                class: "h-full w-full focus:border-blue-200"      
            }
        },
        content,
        extensions: [
            Document,
            Paragraph,
            Text, 
            Heading.configure({
                levels: [1, 2, 3, 4, 5, 6]
            }).extend({
                renderHTML({node, HTMLAttributes}){
                    const hasLevel = this.options.levels.includes(node.attrs.level);
                    const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0];
                    return [
                        `h${level}`,
                        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                            class: `${classes[level]}`,
                        }),
                        0
                    ]
                }
            })
        ]
    });
    useEffect(()=>{
        if(editor){
            editor.commands.focus('end');
        }
    }, [editor])
    return (
        <div className="h-screen">
            <div className="flex gap-2 m-2">
                <button className={`p-1 rounded border-2 border-black ${editor?.isActive('heading', {level: 1}) ? 'bg-blue-100': ''}`} onClick={() => editor?.chain().focus().toggleHeading({level: 1}).run()} >H1</button>
                <button className={`p-1 rounded border-2 border-black ${editor?.isActive('heading', {level: 2}) ? 'bg-blue-100': ''}`} onClick={() => editor?.chain().focus().toggleHeading({level: 2}).run()} >H2</button>
                <button className={`p-1 rounded border-2 border-black ${editor?.isActive('heading', {level: 3}) ? 'bg-blue-100': ''}`} onClick={() => editor?.chain().focus().toggleHeading({level: 3}).run()} >H3</button>
                <button className={`p-1 rounded border-2 border-black ${editor?.isActive('heading', {level: 4}) ? 'bg-blue-100': ''}`} onClick={() => editor?.chain().focus().toggleHeading({level: 4}).run()} >H4</button>
                <button className={`p-1 rounded border-2 border-black ${editor?.isActive('heading', {level: 5}) ? 'bg-blue-100': ''}`} onClick={() => editor?.chain().focus().toggleHeading({level: 5}).run()} >H5</button>
                <button className={`p-1 rounded border-2 border-black ${editor?.isActive('heading', {level: 6}) ? 'bg-blue-100': ''}`} onClick={() => editor?.chain().focus().toggleHeading({level: 6}).run()} >H6</button>
            </div>
            <EditorContent editor={editor} />
        </div>
    )
}