import { useRoutes } from "react-router-dom";

import Routes from "./page.routes";
import GoogleChartRoutes from "./google-charts.routes";

export default function PageRoutes(){
    return useRoutes([Routes, GoogleChartRoutes])
}