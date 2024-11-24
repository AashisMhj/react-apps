import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo,
    AutoImage,
    LinkImage,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    PictureEditing,
    Editor,
    FileLoader,
} from 'ckeditor5';

class MyUploadAdapter {
    loader;
    constructor(loader:FileLoader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file
            .then((file) => new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append('upload', file);
                resolve({
                    default: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-05/240506-james-gunn-new-superman-suit-al-1311-d2ae80.jpg", // URL of the uploaded file
                });

                // fetch('YOUR_UPLOAD_ENDPOINT', {
                //     method: 'POST',
                //     body: formData,
                // })
                //     .then((response) => response.json())
                //     .then((data) => {
                //         resolve({
                //             default: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-05/240506-james-gunn-new-superman-suit-al-1311-d2ae80.jpg", // URL of the uploaded file
                //         });
                //     })
                //     .catch((error) => {
                //         reject(error);
                //     });
            }));
    }

    abort() {
        // Handle abort if needed
    }
}



import 'ckeditor5/ckeditor5.css';

function CKEditorPage() {
    function MyCustomUploadAdapterPlugin(editor:Editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new MyUploadAdapter(loader);
        };
    }
    return (
        <CKEditor
            editor={ClassicEditor}
            config={{
                toolbar: {
                    items: [
                        'undo',
                        'redo',
                        '|',
                        'revisionHistory',
                        'trackChanges',
                        'comment',
                        '|',
                        'aiCommands',
                        'aiAssistant',
                        '|',
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        '|',
                        'link',
                        'insertImage',
                        'insertTable',
                        'highlight',
                        'blockQuote',
                        'codeBlock',
                        '|',
                        'bulletedList',
                        'numberedList',
                        'todoList',
                        'outdent',
                        'indent'
                    ],
                },
                plugins: [
                    Bold, Essentials, Italic, Mention, Paragraph, Undo, AutoImage,
                    LinkImage,
                    ImageBlock,
                    ImageCaption,
                    ImageInline,
                    ImageInsert,
                    ImageInsertViaUrl,
                    ImageResize,
                    ImageStyle,
                    ImageTextAlternative,
                    ImageToolbar,
                    ImageUpload,
                    PictureEditing,

                ],
                initialData: '<p>Hello from CKEditor 5 in React!</p>',
            }}
        />
    );
}

export default CKEditorPage;
