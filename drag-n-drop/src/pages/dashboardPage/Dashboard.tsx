import Card from "../../components/Card"
import styles from "./dashboard.module.css";

const data = [
    
    {
        title: "React Nestable",
        package_name: 'react-nestable',
        url: "/nestable",
        description: "A Package that allows to have nestable dragable items",
        npm: "https://www.npmjs.com/package/react-nestable",
        features: [
            "Nestable Items",
            "Customizable Design ",
            "Collapsable"
        ],
        issues: []
    },
    {
        title: "React DnD",
        package_name: 'react-dnd',
        url: "/dnd",
        description: "",
        npm: "https://www.npmjs.com/package/react-dnd",
        features: [

        ],
        issues: []
    },
    {
        title: "React Sortable JS",
        package_name: 'react-sortable',
        url: "/sortable_js",
        description: "Package Built on top of sortablejs",
        npm: "https://www.npmjs.com/package/react-sortablejs",
        features: [
            "Customizable"
        ],
        issues: ["Abandoned"]
    },
    {
        title: "React Draggable",
        package_name: 'react-draggable',
        url: "/draggable",
        description: "For Making Dragable Elements",
        npm: "https://www.npmjs.com/package/react-draggable",
        features: [

        ],
        issues: []
    }
]
interface Props {
    navigate: (path: string) => void
}
export default function DashboardPage({ navigate }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                Comparing the Different drag and drop packages for react. This aims to highlight all the features of each packages and it issues.
            </div>
            <div className={styles.packages}>
                {
                    data.map(el => <Card 
                        key={el.url} 
                        title={el.title} 
                        features={el.features} 
                        description={el.description} 
                        issues={el.issues} 
                        link={() => navigate(el.url)} 
                        npm={el.npm}
                        package_name={el.package_name}
                    />)
                }
            </div>
        </div>
    )
}