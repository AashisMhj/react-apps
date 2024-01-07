import { Routes, Route } from "react-router-dom";
//
import HomePage from "../pages/homePage";
import QuillReactPage from "../pages/quillReactPage";
import TinyMCEPage from "../pages/tinyMCEPage";
import TipTapEditorPage from "../pages/tiptapEditorPage";


export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={
                <HomePage />
            } />
            <Route path="/quill" element={

                <QuillReactPage />
            }/>
            <Route path="tip-tap" element={
                <TipTapEditorPage />
            }/>
            <Route path="tiny-mce" element={
                <TinyMCEPage />
            }/>
        </Routes>
    )
}