import { EditorContent, EditorProvider, useCurrentEditor, useEditor } from "@tiptap/react";
import ListItem from '@tiptap/extension-list-item';
import TextStyle from "@tiptap/extension-text-style";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import BulletList from "@tiptap/extension-bullet-list";

const extensions = [
    TextStyle
];

const TipTapBulletsOnlyEditor = () => {
    const editor = useEditor({
        extensions: [Document, Paragraph, Text, ListItem, BulletList],
        content: `Hi `
    });

    function handleBlur(){
        // editor?.chain().focus().toggleBulletList().run();
    }

    function handleFocus(){
        editor?.chain().focus().toggleBulletList().run();
    }

    return <div className="h-screen w-full border-2 border-green-200 p-4">
        <div className="max-w-7xl">
            <EditorContent colSpan={10} className="w-full border-blue-500 border h-32" editor={editor} onBlur={handleBlur} onFocus={handleFocus} />
        </div>
    </div>
}

const MenuBar = () => {
    const { editor } = useCurrentEditor();
    if (!editor) return <></>;
    return <div></div>
}

// Using Provider
export const TipTapBulletsOnlyEditorProvider = () => {
    const content = `This is the content`;
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="max-w-7xl bg-slate-300 border-2 border-green-400">
                <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}  > </EditorProvider>
            </div>
        </div>
    )
}

export default TipTapBulletsOnlyEditor;