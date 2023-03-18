import {useState} from 'react';
import styles from './expandable-tile.module.css';

export default function ExpandableTile({items, title}: {items: Array<string>, title: string}){
    const [is_expanded, setIsExpanded] = useState(false);
    const currentArrow = () => is_expanded ? '\&\#8595': '\&\#8594';
    return (
        <div className={styles.box} onClick={() => setIsExpanded(!is_expanded)}>
            <div className={styles.title}>
                {title}
                <span dangerouslySetInnerHTML={{__html: currentArrow()}}></span>
            </div>
            <div className={`${styles['items-box']} ${is_expanded ? '' : styles.hide}`}>
                {
                    items.map((item) => <span key={item} className={styles.items}>{item}</span>)
                }
            </div>
        </div>
    )
}