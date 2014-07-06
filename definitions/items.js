// IMPORTANT FOR THE TEXTURES:
// The function to read texture location need to check if there is a "/" and if so split them up into folders.
//Class = .meta.name
// If there isn't anything except the texture name then use %Class%.meta.defaultTextureFolder for the folder and %Class%.%group%.%item%.texture
// For the name and then add on .png to the end of it.

Items = {
    meta: {
        name: "minecraft",
        type: "items",
        defaultTextureFolder: "items"
    },
    buildingBlocks: {
        meta: {
            name: "Building Blocks",
            texture: "blocks/brick"
        }

    },
    decorationBlocks: {
        meta: {
            name: "Decoration Blocks",
            texture: "blocks/double_plant_paeonia_top"
        },
        painting: {
            name: "painting",
            texture: "",
            id: "321"
        },
        sign: {
            name: "sign",
            texture: "",
            id: "323"
        },
        bed: {
            name: "bed",
            texture: "",
            id: "355"
        },
        item_frame: {
            name: "item_frame",
            texture: "",
            id: "389"
        },
        flower_pot: {
            name: "flower_pot",
            texture: "",
            id: "390"
        },
        skull: {
            name: "skull",
            texture: "",
            id: "260"
        }
    },
    redstone: {
        meta: {
            name: "Redstone",
            texture: "items/redstone_dust"
        },
        wooden_door: {
            name: "wooden_door",
            texture: "",
            id: "324"
        },
        iron_door: {
            name: "iron_door",
            texture: "",
            id: "330"
        },
        redstone: {
            name: "redstone",
            texture: "",
            id: "331"
        },
        repeater: {
            name: "repeater",
            texture: "",
            id: "356"
        },
        comparator: {
            name: "comparator",
            texture: "",
            id: "404"
        }
    },
    transportaion: {
        meta: {
            name: "Transportaion",
            texture: "blocks/rail_golden"
        },
        minecart: {
            name: "minecart",
            texture: "",
            id: "328"
        },
        saddle: {
            name: "saddle",
            texture: "",
            id: "329"
        },
        boat: {
            name: "boat",
            texture: "",
            id: "333"
        },
        chest_minecart: {
            name: "chest_minecart",
            texture: "",
            id: "342"
        },
        furnace_minecart: {
            name: "furnace_minecart",
            texture: "",
            id: "343"
        },
        carrot_on_a_stick: {
            name: "carrot_on_a_stick",
            texture: "",
            id: "398"
        },
        tnt_minecart: {
            name: "tnt_minecart",
            texture: "",
            id: "407"
        },
        hopper_minecart: {
            name: "hopper_minecart",
            texture: "",
            id: "408"
        }
    },
    miscellaneous: {
        meta: {
            name: "Miscellaneous",
            texture: "items/bucket_lava"
        },
        bucket: {
            name: "bucket",
            texture: "",
            id: "325"
        },
        water_bucket: {
            name: "water_bucket",
            texture: "",
            id: "326"
        },
        lava_bucket: {
            name: "lava_bucket",
            texture: "",
            id: "327"
        },
        snowball: {
            name: "snowball",
            texture: "",
            id: "332"
        },
        milk_bucket: {
            name: "milk_bucket",
            texture: "",
            id: "335"
        },
        paper: {
            name: "paper",
            texture: "",
            id: "339"
        },
        book: {
            name: "book",
            texture: "",
            id: "340"
        },
        slime_ball: {
            name: "slime_ball",
            texture: "",
            id: "341"
        },
        ender_pearl: {
            name: "ender_pearl",
            texture: "",
            id: "368"
        },
        ender_eye: {
            name: "ender_eye",
            texture: "",
            id: "381"
        },
        spawn_egg: {
            name: "spawn_egg",
            texture: "",
            id: "383"
        },
        experience_bottle: {
            name: "experience_bottle",
            texture: "",
            id: "384"
        },
        fire_charge: {
            name: "fire_charge",
            texture: "",
            id: "385"
        },
        writable_book: {
            name: "writable_book",
            texture: "",
            id: "386"
        },
        map: {
            name: "map",
            texture: "",
            id: "395"
        },
        fireworks: {
            name: "fireworks",
            texture: "",
            id: "401"
        },
        iron_horse_armor: {
            name: "iron_horse_armor",
            texture: "",
            id: "417"
        },
        golden_horse_armor: {
            name: "golden_horse_armor",
            texture: "",
            id: "418"
        },
        diamond_horse_armor: {
            name: "diamond_horse_armor",
            texture: "",
            id: "419"
        },
        record_13: {
            name: "record_13",
            texture: "",
            id: "2256"
        },
        record_cat: {
            name: "record_cat",
            texture: "",
            id: "2257"
        },
        record_blocks: {
            name: "record_blocks",
            texture: "",
            id: "2258"
        },
        record_chirp: {
            name: "record_chirp",
            texture: "",
            id: "2259"
        },
        record_far: {
            name: "record_far",
            texture: "",
            id: "2260"
        },
        record_mall: {
            name: "record_mall",
            texture: "",
            id: "2261"
        },
        record_mellohi: {
            name: "record_mellohi",
            texture: "",
            id: "2262"
        },
        record_stal: {
            name: "record_stal",
            texture: "",
            id: "2263"
        },
        record_strad: {
            name: "record_strad",
            texture: "",
            id: "2264"
        },
        record_ward: {
            name: "record_ward",
            texture: "",
            id: "2265"
        },
        record_11: {
            name: "record_11",
            texture: "",
            id: "2266"
        },
        record_wait: {
            name: "record_wait",
            texture: "",
            id: "2267"
        }
    },
    foodstuff: {
        meta: {
            name: "Foodstuff",
            texture: "items/apple"
        },
        apple: {
            name: "apple",
            texture: "",
            id: "260"
        },
        mushroom_stew: {
            name: "mushroom_stew",
            texture: "",
            id: "282"
        },
        bread: {
            name: "bread",
            texture: "",
            id: "297"
        },
        porkchop: {
            name: "porkchop",
            texture: "",
            id: "319"
        },
        cooked_porkchop: {
            name: "cooked_porkchop",
            texture: "",
            id: "320"
        },
        golden_apple: {
            name: "golden_apple",
            texture: "",
            id: "322"
        },
        fish: {
            name: "fish",
            texture: "",
            id: "349"
        },
        cooked_fish: {
            name: "cooked_fish",
            texture: "",
            id: "350"
        },
        cake: {
            name: "cake",
            texture: "",
            id: "354"
        },
        cookie: {
            name: "cookie",
            texture: "",
            id: "357"
        },
        melon: {
            name: "melon",
            texture: "",
            id: "360"
        },
        beef: {
            name: "beef",
            texture: "",
            id: "363"
        },
        cooked_beef: {
            name: "cooked_beef",
            texture: "",
            id: "364"
        },
        chicken: {
            name: "chicken",
            texture: "",
            id: "365"
        },
        cooked_chicken: {
            name: "cooked_chicken",
            texture: "",
            id: "366"
        },
        rotten_flesh: {
            name: "rotten_flesh",
            texture: "",
            id: "367"
        },
        spider_eye: {
            name: "spider_eye",
            texture: "",
            id: "375"
        },
        carrot: {
            name: "carrot",
            texture: "",
            id: "391"
        },
        potato: {
            name: "potato",
            texture: "",
            id: "392"
        },
        baked_potato: {
            name: "baked_potato",
            texture: "",
            id: "393"
        },
        poisonous_potato: {
            name: "poisonous_potato",
            texture: "",
            id: "394"
        },
        golden_carrot: {
            name: "golden_carrot",
            texture: "",
            id: "396"
        },
        pumpkin_pie: {
            name: "pumpkin_pie",
            texture: "",
            id: "400"
        }
    },
    tools: {
        meta: {
            name: "Tools",
            texture: "items/iron_axe"
        },
        iron_shovel: {
            name: "iron_shovel",
            texture: "",
            id: "256"
        },
        iron_pickaxe: {
            name: "iron_pickaxe",
            texture: "",
            id: "257"
        },
        iron_axe: {
            name: "iron_axe",
            texture: "",
            id: "258"
        },
        flint_and_steel: {
            name: "flint_and_steel",
            texture: "",
            id: "259"
        },
        wooden_shovel: {
            name: "wooden_shovel",
            texture: "",
            id: "269"
        },
        wooden_pickaxe: {
            name: "wooden_pickaxe",
            texture: "",
            id: "270"
        },
        wooden_axe: {
            name: "wooden_axe",
            texture: "",
            id: "271"
        },
        stone_shovel: {
            name: "stone_shovel",
            texture: "",
            id: "273"
        },
        stone_pickaxe: {
            name: "stone_pickaxe",
            texture: "",
            id: "274"
        },
        stone_axe: {
            name: "stone_axe",
            texture: "",
            id: "275"
        },
        diamond_shovel: {
            name: "diamond_shovel",
            texture: "",
            id: "277"
        },
        diamond_pickaxe: {
            name: "diamond_pickaxe",
            texture: "",
            id: "278"
        },
        diamond_axe: {
            name: "diamond_axe",
            texture: "",
            id: "279"
        },
        golden_shovel: {
            name: "golden_shovel",
            texture: "",
            id: "284"
        },
        golden_pickaxe: {
            name: "golden_pickaxe",
            texture: "",
            id: "285"
        },
        golden_axe: {
            name: "golden_axe",
            texture: "",
            id: "286"
        },
        wooden_hoe: {
            name: "wooden_hoe",
            texture: "",
            id: "290"
        },
        stone_hoe: {
            name: "stone_hoe",
            texture: "",
            id: "291"
        },
        iron_hoe: {
            name: "iron_hoe",
            texture: "",
            id: "292"
        },
        diamond_hoe: {
            name: "diamond_hoe",
            texture: "",
            id: "293"
        },
        golden_hoe: {
            name: "golden_hoe",
            texture: "",
            id: "294"
        },
        compass: {
            name: "compass",
            texture: "",
            id: "345"
        },
        fishing_rod: {
            name: "fishing_rod",
            texture: "",
            id: "346"
        },
        clock: {
            name: "clock",
            texture: "",
            id: "347"
        },
        shears: {
            name: "shears",
            texture: "",
            id: "359"
        },
        lead: {
            name: "lead",
            texture: "",
            id: "420"
        },
        name_tag: {
            name: "name_tag",
            texture: "",
            id: "421"
        }
    },
    combat: {
        meta: {
            name: "Combat",
            texture: "items/gold_sword"
        },
        bow: {
            name: "bow",
            texture: "",
            id: "261"
        },
        arrow: {
            name: "arrow",
            texture: "",
            id: "262"
        },
        iron_sword: {
            name: "iron_sword",
            texture: "",
            id: "267"
        },
        wooden_sword: {
            name: "wooden_sword",
            texture: "",
            id: "268"
        },
        stone_sword: {
            name: "stone_sword",
            texture: "",
            id: "272"
        },
        diamond_sword: {
            name: "diamond_sword",
            texture: "",
            id: "276"
        },
        golden_sword: {
            name: "golden_sword",
            texture: "",
            id: "283"
        },
        leather_helmet: {
            name: "leather_helmet",
            texture: "",
            id: "298"
        },
        leather_chestplate: {
            name: "leather_chestplate",
            texture: "",
            id: "299"
        },
        leather_leggings: {
            name: "leather_leggings",
            texture: "",
            id: "300"
        },
        leather_boots: {
            name: "leather_boots",
            texture: "",
            id: "301"
        },
        chainmail_helmet: {
            name: "chainmail_helmet",
            texture: "",
            id: "302"
        },
        chainmail_chestplate: {
            name: "chainmail_chestplate",
            texture: "",
            id: "303"
        },
        chainmail_leggings: {
            name: "chainmail_leggings",
            texture: "",
            id: "304"
        },
        chainmail_boots: {
            name: "chainmail_boots",
            texture: "",
            id: "305"
        },
        iron_helmet: {
            name: "iron_helmet",
            texture: "",
            id: "306"
        },
        iron_chestplate: {
            name: "iron_chestplate",
            texture: "",
            id: "307"
        },
        iron_leggings: {
            name: "iron_leggings",
            texture: "",
            id: "308"
        },
        iron_boots: {
            name: "iron_boots",
            texture: "",
            id: "309"
        },
        diamond_helmet: {
            name: "diamond_helmet",
            texture: "",
            id: "310"
        },
        diamond_chestplate: {
            name: "diamond_chestplate",
            texture: "",
            id: "311"
        },
        diamond_leggings: {
            name: "diamond_leggings",
            texture: "",
            id: "312"
        },
        diamond_boots: {
            name: "diamond_boots",
            texture: "",
            id: "313"
        },
        golden_helmet: {
            name: "golden_helmet",
            texture: "",
            id: "314"
        },
        golden_chestplate: {
            name: "golden_chestplate",
            texture: "",
            id: "315"
        },
        golden_leggings: {
            name: "golden_leggings",
            texture: "",
            id: "316"
        },
        golden_boots: {
            name: "golden_boots",
            texture: "",
            id: "317"
        }
    },
    brewing: {
        meta: {
            name: "Brewing",
            texture: "items/potion_bottle_drinkable"
        },
        ghast_tear: {
            name: "ghast_tear",
            texture: "",
            id: "370"
        },
        potion: {
            name: "potion",
            texture: "",
            id: "373"
        },
        glass_bottle: {
            name: "glass_bottle",
            texture: "",
            id: "374"
        },
        fermented_spider_eye: {
            name: "fermented_spider_eye",
            texture: "",
            id: "376"
        },
        blaze_powder: {
            name: "blaze_powder",
            texture: "",
            id: "377"
        },
        magma_cream: {
            name: "magma_cream",
            texture: "",
            id: "378"
        },
        brewing_stand: {
            name: "brewing_stand",
            texture: "",
            id: "379"
        },
        cauldron: {
            name: "cauldron",
            texture: "",
            id: "380"
        },
        speckled_melon: {
            name: "speckled_melon",
            texture: "",
            id: "382"
        }
    },
    materials: {
        meta: {
            name: "Materials",
            texture: "items/stick"
        },
        coal: {
            name: "coal",
            texture: "",
            id: "263"
        },
        diamond: {
            name: "diamond",
            texture: "",
            id: "264"
        },
        iron_ingot: {
            name: "iron_ingot",
            texture: "",
            id: "265"
        },
        gold_ingot: {
            name: "gold_ingot",
            texture: "",
            id: "266"
        },
        stick: {
            name: "stick",
            texture: "",
            id: "280"
        },
        bowl: {
            name: "bowl",
            texture: "",
            id: "281"
        },
        string: {
            name: "string",
            texture: "",
            id: "287"
        },
        feather: {
            name: "feather",
            texture: "",
            id: "288"
        },
        gunpowder: {
            name: "gunpowder",
            texture: "",
            id: "289"
        },
        wheat_seeds: {
            name: "wheat_seeds",
            texture: "",
            id: "295"
        },
        flint: {
            name: "flint",
            texture: "",
            id: "318"
        },
        painting: {
            name: "painting",
            texture: "",
            id: "321"
        },
        leather: {
            name: "leather",
            texture: "",
            id: "334"
        },
        brick: {
            name: "brick",
            texture: "",
            id: "336"
        },
        clay_ball: {
            name: "clay_ball",
            texture: "",
            id: "337"
        },
        reeds: {
            name: "reeds",
            texture: "",
            id: "338"
        },
        egg: {
            name: "egg",
            texture: "",
            id: "344"
        },
        glowstone_dust: {
            name: "glowstone_dust",
            texture: "",
            id: "348"
        },
        dye: {
            name: "dye",
            texture: "",
            id: "351"
        },
        bone: {
            name: "bone",
            texture: "",
            id: "352"
        },
        sugar: {
            name: "sugar",
            texture: "",
            id: "353"
        },
        pumpkin_seeds: {
            name: "pumpkin_seeds",
            texture: "",
            id: "361"
        },
        melon_seeds: {
            name: "melon_seeds",
            texture: "",
            id: "362"
        },
        blaze_rod: {
            name: "blaze_rod",
            texture: "",
            id: "369"
        },
        gold_nugget: {
            name: "gold_nugget",
            texture: "",
            id: "371"
        },
        nether_wart: {
            name: "nether_wart",
            texture: "",
            id: "372"
        },
        emerald: {
            name: "emerald",
            texture: "",
            id: "388"
        },
        nether_star: {
            name: "nether_star",
            texture: "",
            id: "399"
        },
        netherbrick: {
            name: "netherbrick",
            texture: "",
            id: "405"
        },
        quartz: {
            name: "quartz",
            texture: "",
            id: "406"
        }
    },
    other: {
        meta: {
            name: "Other",
            texture: ""
        },
        filled_map: {
            name: "filled_map",
            texture: "",
            id: "358"
        },
        written_book: {
            name: "written_book",
            texture: "",
            id: "387"
        },
        firework_charge: {
            name: "firework_charge",
            texture: "",
            id: "402"
        },
        enchanted_book: {
            name: "enchanted_book",
            texture: "",
            id: "403"
        },
        command_block_minecart: {
            name: "command_block_minecart",
            texture: "",
            id: "422"
        }
    }

};