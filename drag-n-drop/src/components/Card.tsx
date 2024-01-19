import styles from "./card.module.css";

interface Props{
    title: string,
    link: () => void,
    features: Array<string>,
    issues: Array<string>,
    description: string,
    npm: string
}
export default function Card({title, link, features, issues, description, npm}:Props){
    return (
        <div onClick={link} className={styles.card}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.npmLink}>
                <a href={npm}>NPM</a>
            </div>
            <p className={styles.description}>
                {description}
            </p>
            <hr />
            <ul className={`${styles.features} ${styles.list}`} >
                {
                    features.map((el, index) => <li key={index}>{el}</li>)
                }
            </ul>
            <ul className={`${styles.issues} ${styles.list}`}>
                {
                    issues.map((el, index) => <li key={index}>{el}</li>)
                }
            </ul>
        </div>
    )
}