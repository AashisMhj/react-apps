import { EditorContent, EditorProvider, useCurrentEditor, useEditor } from "@tiptap/react";
import ListItem from '@tiptap/extension-list-item';
import TextStyle from "@tiptap/extension-text-style";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import BulletList from "@tiptap/extension-bullet-list";
import { KeyboardEvent, useEffect } from "react";

const extensions = [
    TextStyle
];

const TipTapBulletsOnlyEditor = () => {
    const editor = useEditor({
        editorProps: { attributes: { class: 'focus:bg-blue-100 focus:border-blue-100 h-full border-blue-200' } },
        extensions: [Document, Paragraph, Text, ListItem, BulletList.configure({
            HTMLAttributes: {
                class: 'list-disc'
            }
        })],
        content: ``
    });

    function handleBlur() {
        if (editor?.getText().length === 0) {
            editor?.chain().focus().toggleBulletList().run();
        }
    }

    function handleFocus() {
        if (!editor?.isActive('bulletList')) {
            editor?.chain().focus().toggleBulletList().run();
        }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {

        if (event.key === 'Enter' && event.shiftKey) {
            const transaction = editor?.state.tr.insertText('\n');
            if (transaction) {
                editor?.view.dispatch(transaction);
            }
            editor?.chain().focus().sinkListItem('listItem').run()
            if (editor?.can().sinkListItem('listItem')) {
                //
            }
        }

    }

    useEffect(() => {
        if (editor) {
            editor.commands.focus();
        }
    }, [editor])

    return <div className="h-screen w-full border-2 border-green-200 p-4">
        <div className="max-w-7xl">
            <EditorContent colSpan={10} className="w-full h-full" editor={editor} onBlur={handleBlur} onFocus={handleFocus} onKeyDown={handleKeyDown} />
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
            <div className="max-w-7xl bg-slate-300 border-2">
                <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}  > </EditorProvider>
            </div>
        </div>
    )
}

export default TipTapBulletsOnlyEditor;