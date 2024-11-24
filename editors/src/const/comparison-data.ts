import paths from "@/routes/paths";
import { CompareType } from "@/types";

const data:CompareType[] =  [
    {
        "url": paths.tipTapPage,
        "title": "TipTap",
        "description": "A Light weight and customizable editor. Uses plugin system add functionality.",
        "docs": "",
        "stylingMethod": "Passing Custom class names",
        example_url: paths.tipTapExamplesPage
    },
    {
        "url": "quillPage",
        "title": "Quill",
        "description": "",
        "stylingMethod": "",
        "docs": "",
        example_url: paths.quillExamplesPage
    },
    {
        "url": "tinyMce",
        "title": "TinyMCE",
        "description": "",
        "stylingMethod": "",
        "docs": "",
        example_url: paths.tinyMCEExamplesPage
    },
    {
        "url": "ckeditor",
        "title": "CKEditor",
        "description": "",
        "stylingMethod": "",
        "docs": "https://ckeditor.com/docs/ckeditor5/latest/getting-started/index.html",
        example_url: paths.ckEditorPage
    }
]

export default data;