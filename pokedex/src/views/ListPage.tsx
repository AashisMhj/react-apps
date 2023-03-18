import { useState, useEffect} from 'react';
//
import type {PokemonIcon} from '@/types/index';
import styles from './list-page.module.css';
import Network from '@/services/network/index';
import { getId } from '@/helper/index';
import ListTile from '@/components/ListTile';


export default function ListPage(){
    const [pokemonList, setPokemonList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function getComputedList(){
        return pokemonList.map((item:PokemonIcon)=>{
            return {
                name: item.name,
                url: item.url,
                id: getId(item.url)
            }
        })
    }

    function prevPage(){
        setPage(page-1);
    }

    function nextPage(){
        setPage(page +1);
    }

    useEffect(()=>{
        setLoading(true);
        Network.getPokemonList(page)
            .then((data) =>{
                setPokemonList(data?.results || []);
                setLoading(false);
            })
    }, [page]);


    if(loading){
        return <></>
    }else{
        return (
            <div className={styles.container}>
                <h1>PokeDex</h1>
                <div className={styles.pagination}>
                    {page !== 1 && <button onClick={() => prevPage()}>Prev</button>}
                    <button onClick={() => nextPage()}>Next</button>
                </div>
                <div className={styles['poke-container']}>
                    {
                        getComputedList().map((item:PokemonIcon) =><div key={item.id} className={styles.pokemon}  ><ListTile data={item}/></div>)
                    }
                </div>
                <div className={styles.pagination}>
                    {page !== 1 && <button onClick={() => prevPage()}>Prev</button>}
                    <button onClick={() => nextPage()}>Next</button>
                </div>
            </div>
        )
    }
}