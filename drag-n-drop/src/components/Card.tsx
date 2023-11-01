import styles from "./card.module.css";

interface Props{
    title: string,
    link: () => void
}
export default function Card({title, link}:Props){
    return (
        <div onClick={link} className={styles.card}>
            <h1>{title}</h1>
            <p>
                
            </p>
        </div>
    )
}