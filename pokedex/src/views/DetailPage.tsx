import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { default_sprite } from '@/consts/default-values'
import type { Ability,Move, Type } from '@/types/index';
//

import styles from './detail-page.module.css'
import Network from '@/services/network/index';
import ExpandableTile from '@/components/ExpandableTile';
import InfoTable from '@/components/InfoTable';
import typeMapping from '@/consts/type-mapping';

export default function DetailPage() {
    const [current_tab, setCurrentTab] = useState(0);
    const [pokemonData, setPokemonData] = useState({
        id: 0,
        name: '-',
        is_default: false,
        location_area_encounters: '-',
        order: 0,
        weight: 0,
        base_experience: 0,
        height: 0,
        abilities: [],
        forms: [],
        game_indices: [],
        held_items: [],
        moves: [],
        past_type: [],
        species: {
            name: '-',
            url: '-'
        },
        sprites: default_sprite,
        stats: [],
        types: []
    });
    // const [currentImageRef, setCurrentImageRef] = useState(null);
    const [currentImage, setCurrentImage] = useState('');
    // values
    const { id } = useParams();
    const pokemonId = Array.isArray(id) ? id.join() : id;

    function getSprites(obj: object | Array<any>): Array<String> {
        let allSprites: String[] = [];
        const values = Object.values(obj);
        values.forEach((sprite) => {
            if (typeof sprite === 'string') {
                allSprites.push(sprite);
            }
            else if (typeof sprite === 'object') {
                if (sprite) {
                    getSprites(sprite);
                    allSprites = allSprites.concat(getSprites(sprite));
                }
            }
        });
        return allSprites;
    }
    function changeCurrentImage(image: string) {
        setCurrentImage(image);
    }

    function getTypeImage(type:Type){

        // const temp = typeMapping[type as keyof (typeof typeMapping)]
        const keyArray = Object.keys(typeMapping);
        const valuesArray = Object.values(typeMapping);
        const index = keyArray.indexOf(type.type.name);
        if(index > -1){
            return `/images/${valuesArray[index]}`;
        }else{
            return 'default';
        }
    }

    const getAllSprites = () => {
        return getSprites(pokemonData.sprites);
    }
    useEffect(() => {
        Network.getPokemonById(parseInt(pokemonId || ''))
            .then((data) => {
                if (data) {
                    setPokemonData(data.data);
                    setCurrentImage(data.data?.sprites?.front_default || 'default.png')
                }
            })
    }, [id, pokemonId])
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={` ${styles['head-block']} ${styles['main-image']}`}>
                    <img src={currentImage} alt="pokemon" />
                </div>
                <div className={` ${styles['head-block']} ${styles['type']}`}>
                    {
                        pokemonData.types.map((type_data:Type,index) => <span key={`${index}-${type_data.type.url}`} className={styles['type-icon']}>
                            <img src={getTypeImage(type_data)} alt="" />
                        </span>)
                    }
                </div>
            </div>
            <div className={styles['tab-container']}>
                <div className={styles['tab-buttons']}>
                    <button className={`${current_tab == 0 ? 'active' : ''}`} onClick={() => setCurrentTab(0)}>Images</button>
                    <button className={`${current_tab == 1 ? 'active' : ''}`} onClick={() => setCurrentTab(1)}>Info</button>
                    <button className={`${current_tab == 2 ? 'active' : ''}`} onClick={() => setCurrentTab(2)}>Extra</button>

                </div>
                {
                    current_tab === 0 && (
                        <div className={styles.spite}>
                            {
                                getAllSprites().map((spite) => <span key={spite.toString()}>
                                    {typeof spite === 'string' && (
                                        <img className={styles['spite-image']} src={spite.toString()} alt="" onClick={() => setCurrentImage(spite)} />
                                    )}
                                </span>)
                            }
                        </div>
                    )
                }
                {
                    current_tab === 1 && (
                        <div>
                            <InfoTable base_experience={pokemonData.base_experience} height={pokemonData.height} name={pokemonData.name} weight={pokemonData.weight} />
                        </div>
                    )
                }
                {
                    current_tab === 2 && (
                        <div>
                            <ExpandableTile title="Abilities" items={pokemonData.abilities.map((item:Ability) => item.ability.name)} />
                            <ExpandableTile title="Moves" items={pokemonData.moves.map((item:Move) => item.move.name)} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}