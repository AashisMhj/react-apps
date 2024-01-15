import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
// tiptap extensions
import StarterKit from '@tiptap/starter-kit'; // Is a collection of the most popular extension, includes (blockquote, bullet list, codeblock, document, hardbreak, heading, horizontalrule, list item, orderlist, paragraph, text), marks (bold, code, italic, strike), extensions (dropcursor, gapcursor, history)
import TextAlign from '@tiptap/extension-text-align'; // help alight position of text
import Typography from '@tiptap/extension-typography'; // help with common text patterns with the correct typographic character
import Placeholder from '@tiptap/extension-placeholder'; // provide placeholder support (with css)
import BubbleMenu from '@tiptap/extension-bubble-menu';// provide bubble menu on select
//
import data from "../../../assets/data";
import "./tiptap.css";
import Button from './Button'
// define your extension array
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  TextAlign.configure({
    types: ['heading', 'paragraph'],// list of nodes where the text align attributes should be applied to
    alignments: ['left', 'right', 'center', 'justify'],
    defaultAlignment: 'left',
  }),
  Typography,
  Placeholder.configure({ emptyEditorClass: 'is-editor-empty', emptyNodeClass: 'is-node-empty', placeholder: 'My Place Holder'}),
  BubbleMenu.configure({
    element: document.querySelector('.menu') as HTMLElement // TODO fix this
  }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]

const content = data.text;



const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return <></>
  }
  const TextAlign = () => {
    return <Button onClick={() => {
      editor.commands.setTextAlign('center');
    }} >Center</Button>
  }

  return (
    <div className=' flex flex-wrap gap-2 py-2 items-center'>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        isDisabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        isActive={editor.isActive('bold')}
      >
        bold
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isDisabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        isActive={editor.isActive('italic')}
      >
        italic
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isDisabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        isActive={editor.isActive('strike')}
      >
        strike
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        isDisabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        isActive={editor.isActive('code')}
      >
        code
      </Button>
      <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </Button>
      <Button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </Button>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive('paragraph')}
      >
        paragraph
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive('heading', { level: 1 })}
      >
        h1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive('heading', { level: 2 })}
      >
        h2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive('heading', { level: 3 })}
      >
        h3
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive('heading', { level: 4 })}
      >
        h4
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive('heading', { level: 5 })}
      >
        h5
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive('heading', { level: 6 })}
      >
        h6
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
      >
        bullet list
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
      >
        ordered list
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive('codeBlock')}
      >
        code block
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive('blockquote')}
      >
        blockquote
      </Button>
      <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </Button>
      <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </Button>
      <Button
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        undo
      </Button>
      <Button
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        redo
      </Button>
      <Button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        isActive={editor.isActive('textStyle', { color: '#958DF1' })}
      >
        purple
      </Button>
    </div>
  )
}

const TipTap = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='max-w-7xl bg-slate-300 p-6 rounded-2xl'>
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content} > </EditorProvider>
      </div>
    </div>
  )
}

export default TipTap