import { useEffect, useState } from "react";
//
import {getPackageDownloadDetail, DownloadPeriods} from "../services/npm-registery";
import type { DownloadType } from "../services/npm-registery";
import styles from "./card.module.css";

interface Props{
    title: string,
    link: () => void,
    features: Array<string>,
    issues: Array<string>,
    description: string,
    npm: string,
    package_name: string
}
export default function Card({title, link, features, issues, description, npm, package_name}:Props){
    const [donwload_data, setDownloadData] = useState<DownloadType>({
        downloads: 0,
        end: '',
        start: '',
        package: ''
    });

    useEffect(()=>{
        (async ()=>{
            try {
                const data = await getPackageDownloadDetail(package_name);
                setDownloadData(data);
            } catch (error) {
                console.trace(error);
            }
        })()
    }, [])

    return (
        <div onClick={link} className={styles.card}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.npmLink}>
                <a href={npm}>NPM</a>
            </div>
            <div className={styles.downloadInfo}>
                <span>Start: {donwload_data.start}</span>
                <span>End: {donwload_data.end}</span>
                <span>Downloads: {donwload_data.downloads}</span>
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