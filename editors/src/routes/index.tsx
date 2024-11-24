import { Routes, Route } from "react-router-dom";
//
import { homePage, quillPage, tinyMce, tipTapPage, tipTapExamplesPage, ckEditorPage } from "./paths";
import HomePage from "../pages/homePage";
import QuillReactPage from "../pages/quillReactPage";
import TinyMCEPage from "../pages/tinyMCEPage";
import TipTapEditorPage from "../pages/tiptapEditorPage";
import TipTapExamples from "../pages/tiptapexamples";
import CKEditor from "@/pages/ckEditorPage";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path={homePage} element={<HomePage />} />
            <Route path={quillPage} element={<QuillReactPage />} />
            <Route path={tipTapPage} element={<TipTapEditorPage />} />
            <Route path={tipTapExamplesPage} element={<TipTapExamples />} />
            <Route path={tinyMce} element={<TinyMCEPage />} />
            <Route path={ckEditorPage} element={<CKEditor />} />
        </Routes>
    )
}