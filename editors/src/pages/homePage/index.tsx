import { Link } from "react-router-dom";
//
import paths from "@/routes/paths";
import EditorData from "@/const/comparison-data";

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
                                <Link className="text-sm underline" to={editorValue.docs}>Open</Link>
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
                    <tr>
                        <td className="px-4 py-2">Examples</td>
                        {
                            EditorData.map(editorValue => <td key={editorValue.title} className="text-blue-400 underline underline-offset-2 hover:text-blue-600">
                                <Link to={editorValue.example_url}>
                                    Examples
                                </Link>
                            </td>)
                        }
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-center items-center">
                <Link to={paths.comparisonPage} className="text-blue-400 underline underline-offset-2 hover:text-blue-600">See All Feature Comparison</Link>
            </div>
        </div>
    </div>
}