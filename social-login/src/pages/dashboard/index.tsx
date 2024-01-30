

import Navbar from "../../components/shared/Navbar";
import DashboardCarousel from "./components/Carousel";

export default function DashboardPage(){
    
    return (
        <div>
            <Navbar />
            <div className="m-5">
                <DashboardCarousel />
            </div>
        </div>

    )
}