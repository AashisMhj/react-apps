import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return <div className="bg-white h-screen">
        <Header />
        <Outlet />
    </div>
}