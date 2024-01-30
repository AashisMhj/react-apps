import MainLayout from "@/layouts/MainLayouts";
import HomePage from "@/pages/main-pages/Home.page";

const PageRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <HomePage />
        }
    ]
}

export default PageRoutes;