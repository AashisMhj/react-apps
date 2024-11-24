import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Editor, FileLoader } from 'ckeditor5';

class MyUploadAdapter {
    loader;
    constructor(loader:FileLoader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file
            .then((file) => new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append('upload', file as File);

                resolve({
                    default: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-05/240506-james-gunn-new-superman-suit-al-1311-d2ae80.jpg"
                });

                // fetch('YOUR_UPLOAD_ENDPOINT', {
                //     method: 'POST',
                //     body: formData,
                // })
                //     .then((response) => response.json())
                //     .then((data) => {
                //         resolve({
                //             default: data.url, // URL of the uploaded file
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



const MyEditor = () => {
    function MyCustomUploadAdapterPlugin(editor:Editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new MyUploadAdapter(loader);
        };
    }
    return (
        <div>
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                config={{
                    extraPlugins: [MyCustomUploadAdapterPlugin], // Add the custom upload adapter
                }}
                onReady={(editor) => {
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </div>
    );
};

export default MyEditor;
