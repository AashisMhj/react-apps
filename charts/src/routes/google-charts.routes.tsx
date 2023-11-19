import { lazy } from "react";
import Loadable from "@/utils/Lodable";
import GoogleChartLayout from "@/layouts/GoogleChartsLayouts";

const AreaChartPage = Loadable(lazy(() => import('@/pages/google-charts/AreaChart')))

const GoogleChartRoutes = {
    path: "/google",
    element: <GoogleChartLayout />,
    children: [
        {
            path: "area-chart",
            element: <AreaChartPage />
        }
    ]
}

export default GoogleChartRoutes;