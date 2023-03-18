import type {Sprites, ImageType, GenSprites} from '@/types/index';
export const default_image_type: ImageType = {
    front_default: null,
    front_female: null,
    front_shiny: null,
    front_shiny_female: null,
    back_default: null,
    back_female: null,
    back_shiny: null,
    back_shiny_female: null
}
export const default_get_sprites: GenSprites = {};

export const default_sprite: Sprites = {
    other: {
        dream_world: default_image_type,
        home: default_image_type,
        "official-artwork": default_image_type
    },
    versions: {
        "generation-i": {
            "red-blue": default_get_sprites,
            "yellow": default_get_sprites
        },
        "generation-ii": {
            "crystal": default_get_sprites,
            "gold": default_get_sprites,
            "silver": default_get_sprites
        },
        "generation-iii": {
            "emerald": default_get_sprites,
            "firered-leafgreen": default_get_sprites,
            "ruby-sapphire": default_get_sprites
        },
        "generation-iv": {
            "diamond-perl": default_get_sprites,
            "heartgold-soulsilver": default_get_sprites,
            "platinum": default_get_sprites
        },
        "generation-v": {
            "balck-white": default_get_sprites
        },
        "generation-vi": {
            "omegaruby-alphasapphire": {},
            "x-y": {}
        },
        "generation-vii": {
            "icons": {},
            "ultra-sun-ultra-moon": {},
        },
        "generation-viii": {
            "icons": {}
        }
    }
}