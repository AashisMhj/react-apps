import {Link} from 'react-router-dom';
import styles from './list-tile.module.css';
import type {PokemonIcon} from '@/types/index';
import {numberToHashNumber} from '@/helper/index';


export default function ListTile({data}: {data:PokemonIcon}) {
    function getHashNumber(){
        return numberToHashNumber(data.id);
    }
    return (
        <>
            <div className={styles['img-container']}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" />
            </div>
            <div className={styles.info}>
                <span className={styles.number}>{getHashNumber()}</span>
                <h3>{ data.name}</h3>
                <Link to={`info/${data.id}`}>
                    <button className={styles.btn}>Learn More</button>
                </Link>
            </div>
        </>
    )
}