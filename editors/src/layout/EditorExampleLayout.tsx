import { ReactNode } from "react"
export default function EditorExampleLayout({children}:{children:ReactNode}){
    return <div className="ml-[250px] bg-gray-200">
        {children}
    </div>
}