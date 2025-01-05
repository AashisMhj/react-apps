import Header from "@/components/shared/Header";
import useLanguageDir from "@/hooks/useLanguageDir";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    const {language_dir} = useLanguageDir();
    return <div className="bg-white h-screen" dir={language_dir}>
        <Header />
        <Outlet />
    </div>
}