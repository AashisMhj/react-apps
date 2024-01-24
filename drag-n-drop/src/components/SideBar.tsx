import { ReactNode } from "react";
import { useURLContext } from "../context/URLContext";

interface Props {
    children: ReactNode
}

const SideBar = ({ children }: Props) => {
    const {navigate} = useURLContext();
    return (
        <nav className="h-full w-[300px] bg-green-500">
            <ul className="flex gap-4 flex-col p-4">
                <li onClick={() => navigate('/')} className={` p-2 font-medium rounded cursor-pointer  bg-green-700 text-white hover:text-gray-300`}>Home</li>
                {children}
            </ul>
        </nav>
    )
}

export default SideBar;