import { Link } from "react-router-dom";
//
import paths from "../../routes/paths";

import EditorData from "../../const/comparison-data";

// type CompareValueType = {
//     value: boolean | null,
//     remarks: string | null
// }

// type CompareType = {
//     title: string,
//     url: string,
//     description: string,
//     docs: string,
//     plugin: CompareValueType,
//     bubbleMenu: CompareValueType,
//     textAlignMent: CompareValueType,
//     customization: CompareValueType,
//     preview: CompareValueType,
//     syntaxHighlight: CompareValueType,
//     stylingMethod: string
// }

// const dummyCompareValue = { value: null, remarks: null }


// type EditorTypes = keyof typeof compareData;
// type CompareKeys = keyof CompareType;

export default function HomePage() {
    return <div className="h-screen bg-slate-300 flex justify-center p-4">
        <div className="max-w-7xl w-full bg-white p-4 rounded-lg shadow">
            <table className="table-fixed border w-full">
                <thead>
                    <tr className="bg-slate-200">
                        <td className="px-4 py-2">Editor</td>
                        {
                            EditorData.map(editorValue => <td key={editorValue.url}>
                                <Link className="text-xl underline text-sky-500" to={editorValue.url}>
                                    {editorValue.title}
                                </Link>
                            </td>)
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2">Docs</td>
                        {
                            EditorData.map(editorValue => <td key={editorValue.title}>
                                <Link className="text-sm underline" to={editorValue.docs}>Docs</Link>
                            </td>)
                        }
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Description</td>
                        {
                            EditorData.map(editorValue => <td key={editorValue.title}>
                                {editorValue.description}
                            </td>)
                        }
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-center items-center">
                <Link to={paths.comparisonPage}>See All Feature Comparison</Link>
            </div>
        </div>
    </div>
}