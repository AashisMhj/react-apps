import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Plugin, PluginKey } from "@tiptap/pm/state";

const CustomPlaceHolder = Placeholder.extend({
    addOptions(){
        return {
            ...this.parent?.(),
            placeholder: 'just some thing',
            html: '<span>this html</span>'
        }
    },
    addProseMirrorPlugins(){
        return [
            new Plugin({
                key: new PluginKey('eventHandler'),
                props: {
                    decorations: ({doc, selection}) => {
                        const decorations = [];
                        Placeholder.innerHTML = this.options.html;
                        // const htmlContent = placeholder.
                    }
                }
            })
        ]
    }

})

export default function CustomPlaceHolderEditor(){
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'some data <span>hi there</span>'
            })
        ]
    });
    return <EditorContent editor={editor} />
}