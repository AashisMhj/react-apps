export interface PokemonIcon {
    name: string,
    url: string,
    id: number | undefined
}

export interface Ability {
    ability: {

        name: string,
        url: string,
    }
    is_hidden: boolean,
    slot: number
}
export interface Form {
    name: string,
    url: string
}
export interface GameIndices {
    game_index: number,
    version: {
        name: string,
        url: string
    }
}
export interface Move {
    move: {
        name: string,
        url: string
    }
    }
export interface Species {
    name: string,
    url: string
}
/**
 * All basic sprites excluding back
 */
export interface SpritesGeneral {
    front_default?: string | null,
    front_female?: string | null,
    front_shiny?: string | null,
    front_shiny_female?: string | null,
}
/**
 * Image type are all the basic sprites including back
 */
export interface ImageType extends SpritesGeneral {
    back_default?: string | null,
    back_female?: string | null,
    back_shiny?: string | null,
    back_shiny_female?: string | null,
}

/**
 * For the icons gen
 */
export interface GenIcon {
    front_default?: string,
    front_female?: string
}

export interface GenSprites {
    // default
    back_default?: string | null,
    back_female?: string | null,
    // gray
    back_gray?: string | null,
    back_gray_female?: string | null |undefined,
    // transparent
    back_transparent?: string | null,
    back_transparent_female?: string | null,
    // shiny
    back_shiny?: string | null,
    back_shiny_female?: string | null,
    // shiny transparent
    back_shiny_transparent?: string | null,
    back_shiny_transparent_female?: string | null,
    // front
    // default
    front_default?: string | null,
    front_female?: string | null,
    // gray
    front_gray?: string | null,
    front_gray_female?: string | null,
    //transparent
    front_transparent?: string | null,
    front_transparent_female?: string | null,
    // shiny
    front_shiny?: string | null,
    front_shiny_female?: string | null
    // shiny transparent
    front_shiny_transparent?: string | null,
    front_shiny_transparent_female?: string | null,
}

export interface Sprites extends ImageType {
    other: {
        dream_world: ImageType,
        home: ImageType,
        "official-artwork": ImageType
    },
    versions: {
        "generation-i": {
            "red-blue": GenSprites,
            "yellow": GenSprites
        },
        "generation-ii": {
            "crystal": GenSprites,
            "gold": GenSprites,
            "silver": GenSprites
        },
        "generation-iii": {
            "emerald": GenSprites,
            "firered-leafgreen": GenSprites,
            "ruby-sapphire": GenSprites
        },
        "generation-iv": {
            "diamond-perl": GenSprites,
            "heartgold-soulsilver": GenSprites,
            "platinum": GenSprites
        },
        "generation-v": {
            "balck-white": GenSprites
        },
        "generation-vi": {
            "omegaruby-alphasapphire": SpritesGeneral,
            "x-y": SpritesGeneral
        },
        "generation-vii": {
            "icons": GenIcon,
            "ultra-sun-ultra-moon": SpritesGeneral,
        },
        "generation-viii": {
            "icons": GenIcon
        }
    }
}
export interface Stat{
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}
export interface Type{
    slot: number,
    type: {
        name: string,
        url: string
    }
}
export interface PokemonDetail {
    id: number,
    name: string,
    is_default: boolean,
    location_area_encounters: string,
    order: number,
    weight: number,
    base_experience: number,
    height: number,
    abilities: Ability[],
    forms: Form[],
    game_indices: GameIndices[],
    held_items: any[],
    moves: Move[],
    past_type: any[],
    species: Species,
    // sprites remining
    sprites: Sprites,
    stats: Stat[],
    types: Type[]
}