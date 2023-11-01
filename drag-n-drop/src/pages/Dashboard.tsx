import Card from "../components/Card"
import styles from "./dahsboard.module.css";

const data = [
    {
        title: "Sortable JS",
        url: "/sortable_js"
    },
    {
        title: "React Nestable",
        url: "/nestable"
    }
]
interface Props{
    navigate: (path:string) => void
}
export default function DashboardPage({navigate}:Props){
    return (
        <div className={styles.container}>
            {
                data.map(el => <Card title={el.title} link={() => navigate(el.url)} />)
            }
        </div>
    )
}