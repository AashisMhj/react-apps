import { lazy } from "react";
import Loadable from "@/utils/Lodable";
import GoogleChartLayout from "@/layouts/GoogleChartsLayouts";

const AreaChartPage = Loadable(lazy(() => import('@/pages/google-charts/AreaChart')));
const LineChartPage = Loadable(lazy(() => import('@/pages/google-charts/LineChart')));

const GoogleChartRoutes = {
    path: "/google",
    element: <GoogleChartLayout />,
    children: [
        {
            path: "area-chart",
            element: <AreaChartPage />
        },
        {
            path: "line-chart",
            element: <LineChartPage />
        }
    ]
}

export default GoogleChartRoutes;