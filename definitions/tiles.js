// IMPORTANT FOR THE TEXTURES:
// The fucntion to read texture location need to check if there
// is a "/" and if so split them up into folders.
// If there isn't anything except the texture name then use
// %Class%.meta.defaultTextureFolder for the folder and
// %Class%.%group%.%item%.texture
// For the name and then add on .png to the end of it.

Tiles = {
	meta : {
		name : "minecraft",
		type : "tile",
		defaultTextureFolder : "blocks"
	},
	buildingBlocks : {
		meta : {
			name : "Building Blocks",
			texture : "blocks/brick"
		},
		stone : {
			name : "stone",
			texture : "stone",
			id : "1"
		},
		grass : {
			name : "grass",
			texture : "grass_side",
			id : "2"
		},
		dirt : {
			name : "dirt",
			texture : "dirt",
			id : "3"
		},
		cobblestone : {
			name : "cobblestone",
			texture : "cobblestone",
			id : "4"
		},
		planks : {
			name : "planks",
			texture : "planks_oak",
			id : "5"
		},
		bedrock : {
			name : "bedrock",
			texture : "bedrock",
			id : "7"
		},
		sand : {
			name : "sand",
			texture : "sand",
			id : "12"
		},
		gravel : {
			name : "gravel",
			texture : "gravel",
			id : "13"
		},
		gold_ore : {
			name : "gold_ore",
			texture : "gold_ore",
			id : "14"
		},
		iron_ore : {
			name : "iron_ore",
			texture : "iron_ore",
			id : "15"
		},
		coal_ore : {
			name : "coal_ore",
			texture : "coal_ore",
			id : "16"
		},
		log : {
			name : "log",
			texture : "log_oak",
			id : "17"
		},
		sponge : {
			name : "sponge",
			texture : "sponge",
			id : "19"
		},
		glass : {
			name : "glass",
			texture : "glass",
			id : "20"
		},
		lapis_ore : {
			name : "lapis_ore",
			texture : "lapis_ore",
			id : "21"
		},
		lapis_block : {
			name : "lapis_block",
			texture : "lapis_block",
			id : "22"
		},
		sandstone : {
			name : "sandstone",
			texture : "sandstone_normal",
			id : "24"
		},
		wool : {
			name : "wool",
			texture : "wool_colored_white",
			id : "35"
		},
		gold_block : {
			name : "gold_block",
			texture : "gold_block",
			id : "41"
		},
		iron_block : {
			name : "iron_block",
			texture : "iron_block",
			id : ""
		},
		stone_slab : {
			name : "stone_slab",
			texture : "stone_slab_top",
			id : "44"
		},
		brick_block : {
			name : "brick_block",
			texture : "brick",
			id : "45"
		},
		bookshelf : {
			name : "bookshelf",
			texture : "bookshelf",
			id : "47"
		},
		mossy_cobblestone : {
			name : "mossy_cobblestone",
			texture : "cobblestone_mossy",
			id : "48"
		},
		obsidian : {
			name : "obsidian",
			texture : "obsidian",
			id : "49"
		},
		oak_stairs : {
			name : "oak_stairs",
			texture : "planks_oak", //[ALERT]
			id : "53"
		},
		diamond_ore : {
			name : "diamond_ore",
			texture : "diamond_ore",
			id : "56"
		},
		diamond_block : {
			name : "diamond_block",
			texture : "diamond_block",
			id : "57"
		},
		stone_stairs : {
			name : "stone_stairs",
			texture : "cobblestone", //[ALERT]
			id : "67"
		},
		redstone_ore : {
			name : "redstone_ore",
			texture : "",
			id : "73"
		},
		ice : {
			name : "ice",
			texture : "ice",
			id : "79"
		},
		snow : {
			name : "snow",
			texture : "snow",
			id : "80"
		},
		clay : {
			name : "clay",
			texture : "clay",
			id : "82"
		},
		pumpkin : {
			name : "pumpkin",
			texture : "pumpkin_face_off",
			id : "86"
		},
		netherrack : {
			name : "netherrack",
			texture : "netherrack",
			id : "87"
		},
		soul_sand : {
			name : "soul_sand",
			texture : "soul_sand",
			id : "88"
		},
		glowstone : {
			name : "glowstone",
			texture : "glowstone",
			id : "89"
		},
		lit_pumpkin : {
			name : "lit_pumpkin",
			texture : "pumpkin_face_on",
			id : "91"
		},
		stained_glass : {
			name : "stained_glass",
			texture : "glass", //[ALERT]
			id : "95"
		},
		stonebrick : {
			name : "stonebrick",
			texture : "stonebrick",
			id : "98"
		},
		melon_block : {
			name : "melon_block",
			texture : "melon_side",
			id : "103"
		},
		brick_stairs : {
			name : "brick_stairs",
			texture : "brick", //[ALERT]
			id : "108"
		},
		stone_brick_stairs : {
			name : "stone_brick_stairs",
			texture : "stonebrick", //[ALERT]
			id : "109"
		},
		mycelium : {
			name : "mycelium",
			texture : "mycelium_side",
			id : "110"
		},
		nether_brick : {
			name : "nether_brick",
			texture : "nether_brick",
			id : "112"
		},
		nether_brick_stairs : {
			name : "nether_brick_stairs",
			texture : "nether_brick", //[ALERT]
			id : "114"
		},
		end_stone : {
			name : "end_stone",
			texture : "end_stone",
			id : "121"
		},
		wooden_slab : {
			name : "wooden_slab",
			texture : "planks_oak",
			id : "126"
		},
		sandstone_stairs : {
			name : "sandstone_stairs",
			texture : "sandstone_normal", //[ALERT]
			id : "128"
		},
		emerald_ore : {
			name : "emerald_ore",
			texture : "emerald_ore",
			id : "129"
		},
		emerald_block : {
			name : "emerald_block",
			texture : "emerald_block",
			id : "133"
		},
		spruce_stairs : {
			name : "spruce_stairs",
			texture : "planks_spruce", //
			id : "134"
		},
		birch_stairs : {
			name : "birch_stairs",
			texture : "planks_birch", //
			id : "135"
		},
		jungle_stairs : {
			name : "jungle_stairs",
			texture : "planks_jungle", //
			id : "136"
		},
		cobblestone_wall : {
			name : "cobblestone_wall",
			texture : "cobblestone", //
			id : "139"
		},
		quartz_ore : {
			name : "quartz_ore",
			texture : "quartz_ore",
			id : "153"
		},
		quartz_block : {
			name : "quartz_block",
			texture : "quartz_block_side",
			id : "155"
		},
		quartz_stairs : {
			name : "quartz_stairs",
			texture : "quartz_block_side",
			id : "156"
		},
		stained_hardened_clay : {
			name : "stained_hardened_clay",
			texture : "hardened_clay_stained_white",
			id : "159"
		},
		log2 : {
			name : "log2",
			texture : "log_acacia",
			id : "162"
		},
		acacia_stairs : {
			name : "acacia_stairs",
			texture : "planks_acacia",
			id : "163"
		},
		dark_oak_stairs : {
			name : "dark_oak_stairs",
			texture : "planks_big_oak",
			id : "164"
		},
		hay_block : {
			name : "hay_block",
			texture : "hay_block_side",
			id : "170"
		},
		hardened_clay : {
			name : "hardened_clay",
			texture : "hardened_clay",
			id : "172"
		},
		coal_block : {
			name : "coal_block",
			texture : "coal_block",
			id : "173"
		},
		packed_ice : {
			name : "packed_ice",
			texture : "ice_packed",
			id : "174"
		}
	},
	decorationBlocks : {
		meta : {
			name : "Decoration Blocks",
			texture : "blocks/double_plant_paeonia_top"
		},
		sapling : {
			name : "sapling",
			texture : "sapling_oak",
			id : "6"
		},
		leaves : {
			name : "leaves",
			texture : "leaves_oak",
			id : "18"
		},
		web : {
			name : "web",
			texture : "web",
			id : "30"
		},
		tallgrass : {
			name : "tallgrass",
			texture : "tallgrass",
			id : "31"
		},
		deadbush : {
			name : "deadbush",
			texture : "deadbush",
			id : "32"
		},
		yellow_flower : {
			name : "yellow_flower",
			texture : "flower_dandelion",
			id : "37"
		},
		red_flower : {
			name : "red_flower",
			texture : "flower_rose",
			id : "38"
		},
		brown_mushroom : {
			name : "brown_mushroom",
			texture : "mushroom_brown",
			id : "39"
		},
		red_mushroom : {
			name : "red_mushroom",
			texture : "mushroom_red",
			id : "40"
		},
		torch : {
			name : "torch",
			texture : "torch_on",
			id : "50"
		},
		chest : {
			name : "chest",
			texture : "itemframe_background", //[ALERT] no chest texture?
			id : "54"
		},
		crafting_table : {
			name : "crafting_table",
			texture : "crafting_table_front",
			id : "58"
		},
		furnace : {
			name : "furnace",
			texture : "furnace_front_off",
			id : "61"
		},
		ladder : {
			name : "ladder",
			texture : "ladder",
			id : "65"
		},
		snow_layer : {
			name : "snow_layer",
			texture : "snow",
			id : "78"
		},
		cactus : {
			name : "cactus",
			texture : "cactus_side",
			id : "81"
		},
		jukebox : {
			name : "jukebox",
			texture : "jukebox_side",
			id : "84"
		},
		fence : {
			name : "fence",
			texture : "planks_oak",
			id : "85"
		},
		monster_egg : {
			name : "monster_egg",
			texture : "stone",
			id : "97"
		},
		iron_bars : {
			name : "iron_bars",
			texture : "iron_bars",
			id : "101"
		},
		glass_pane : {
			name : "glass_pane",
			texture : "glass_pane",
			id : "102"
		},
		vine : {
			name : "vine",
			texture : "vine",
			id : "106"
		},
		waterlily : {
			name : "waterlily",
			texture : "waterlily",
			id : "111"
		},
		nether_brick_fence : {
			name : "nether_brick_fence",
			texture : "nether_brick",
			id : "113"
		},
		enchanting_table : {
			name : "enchanting_table",
			texture : "enchanting_table_side",
			id : "116"
		},
		end_portal_frame : {
			name : "end_portal_frame",
			texture : "endframe_side",
			id : "120"
		},
		ender_chest : {
			name : "ender_chest",
			texture : "emerald_block", //[ALERT] missing?
			id : "130"
		},
		anvil : {
			name : "anvil",
			texture : "anvil_top_damaged_2",
			id : "145"
		},
		trapped_chest : {
			name : "trapped_chest",
			texture : "emerald_block", //[ALERT] missing?
			id : "146"
		},
		stained_glass_pane : {
			name : "stained_glass_pane",
			texture : "glass_pane_top_white",
			id : "160"
		},
		leaves2 : {
			name : "leaves2",
			texture : "leaves_acacia",
			id : "161"
		},
		carpet : {
			name : "carpet",
			texture : "wool_colored_white",
			id : "171"
		},
		double_plant : {
			name : "double_plant",
			texture : "double_plant_sunflower_front",
			id : "175"
		},
		flower_pot : {
			name : "flower_pot",
			texture : "flower_pot",
			id : "390"
		},
		skull : {
			name : "skull",
			texture : "items/skull_skeleton",
			id : "397"
		}
	},
	redstone : {
		meta : {
			name : "Redstone",
			texture : "items/redstone_dust"
		},
		dispenser : {
			name : "dispenser",
			texture : "dispenser_front_horizontal",
			id : "23"
		},
		noteblock : {
			name : "noteblock",
			texture : "noteblock",
			id : "25"
		},
		sticky_piston : {
			name : "sticky_piston",
			texture : "piston_top_sticky",
			id : "29"
		},
		piston : {
			name : "piston",
			texture : "piston_top_normal",
			id : "33"
		},
		tnt : {
			name : "tnt",
			texture : "tnt_side",
			id : "46"
		},
		lever : {
			name : "lever",
			texture : "lever",
			id : "69"
		},
		stone_pressure_plate : {
			name : "stone_pressure_plate",
			texture : "stone",
			id : "70"
		},
		wooden_pressure_plate : {
			name : "wooden_pressure_plate",
			texture : "planks_oak",
			id : "72"
		},
		redstone_torch : {
			name : "redstone_torch",
			texture : "redstone_torch_on",
			id : "76"
		},
		stone_button : {
			name : "stone_button",
			texture : "stone",
			id : "77"
		},
		trapdoor : {
			name : "trapdoor",
			texture : "trapdoor",
			id : "96"
		},
		fence_gate : {
			name : "fence_gate",
			texture : "planks_oak",
			id : "107"
		},
		redstone_lamp : {
			name : "redstone_lamp",
			texture : "redstone_lamp_on",
			id : "123"
		},
		tripwire_hook : {
			name : "tripwire_hook",
			texture : "trip_wire_source",
			id : "131"
		},
		wooden_button : {
			name : "wooden_button",
			texture : "planks_oak",
			id : "143"
		},
		light_weighted_pressure_plate : {
			name : "light_weighted_pressure_plate",
			texture : "gold_block",
			id : "147"
		},
		heavy_weighted_pressure_plate : {
			name : "heavy_weighted_pressure_plate",
			texture : "iron_block",
			id : "148"
		},
		daylight_detector : {
			name : "daylight_detector",
			texture : "daylight_detector_top",
			id : "151"
		},
		redstone_block : {
			name : "redstone_block",
			texture : "",
			id : "152"
		},
		hopper : {
			name : "hopper",
			texture : "hopper_inside",
			id : "154"
		},
		dropper : {
			name : "dropper",
			texture : "dropper_front_horizontal",
			id : "154"
		}
	},
	transportaion : {
		meta : {
			name : "Transportaion",
			texture : "blocks/rail_golden"
		},
		golden_rail : {
			name : "golden_rail",
			texture : "rail_golden",
			id : "27"
		},
		detector_rail : {
			name : "detector_rail",
			texture : "rail_detector",
			id : "28"
		},
		rail : {
			name : "rail",
			texture : "rail_normal",
			id : "66"
		},
		activator_rail : {
			name : "activator_rail",
			texture : "rail_activator",
			id : "157"
		}
	},
	miscellaneous : {
		meta : {
			name : "Miscellaneous",
			texture : "items/bucket_lava"
		},
		beacon : {
			name : "beacon",
			texture : "beacon",
			id : "138"
		}
	},
	foodstuff : {
		meta : {
			name : "Foodstuff",
			texture : "items/apple"
		}

	},
	tools : {
		meta : {
			name : "Tools",
			texture : "items/iron_axe"
		}

	},
	combat : {
		meta : {
			name : "Combat",
			texture : "items/gold_sword"
		}

	},
	brewing : {
		meta : {
			name : "Brewing",
			texture : "items/potion_bottle_drinkable"
		},
		brewing_stand : {
			name : "brewing_stand",
			texture : "brewing_stand",
			id : "379"
		},
		cauldron : {
			name : "cauldron",
			texture : "cauldron_side",
			id : "380"
		}
	},
	materials : {
		meta : {
			name : "Materials",
			texture : "items/stick"
		}

	},
	other : {
		meta : {
			name : "Other",
			texture : ""
		},
		air : {
			name : "air",
			texture : null,
			id : "0"
		},
		flowing_water : {
			name : "flowing_water",
			texture : "water_flow",
			id : "8"
		},
		water : {
			name : "water",
			texture : "9",
			id : "water_still"
		},
		flowing_lava : {
			name : "flowing_lava",
			texture : "lava_flow",
			id : "10"
		},
		lava : {
			name : "lava",
			texture : "lava_still",
			id : "11"
		},
		bed : {
			name : "bed",
			texture : "26",
			id : "bed_head_top"
		},
		piston_head : {
			name : "piston_head",
			texture : "",
			id : "34"
		},
		piston_extension : {
			name : "piston_extension",
			texture : "piston_inner",
			id : "36"
		},
		double_stone_slab : {
			name : "double_stone_slab",
			texture : "stone_slab_side",
			id : "43"
		},
		fire : {
			name : "fire",
			texture : "51",
			id : "fire_layer_0"
		},
		mob_spawner : {
			name : "mob_spawner",
			texture : "mob_spawner",
			id : "52"
		},
		redstone_wire : {
			name : "redstone_wire",
			texture : "redstone_dust_line",
			id : "55"
		},
		wheat : {
			name : "wheat",
			texture : "wheat_stage_7",
			id : "59"
		},
		farmland : {
			name : "farmland",
			texture : "farmland_wet",
			id : "60"
		},
		lit_furnace : {
			name : "lit_furnace",
			texture : "furnace_front_on",
			id : "2"
		},
		standing_sign : {
			name : "standing_sign",
			texture : "planks_oak",
			id : "63"
		},
		wooden_door : {
			name : "wooden_door",
			texture : "planks_oak",
			id : "64"
		},
		wall_sign : {
			name : "wall_sign",
			texture : "planks_oak",
			id : "44"
		},
		iron_door : {
			name : "iron_door",
			texture : "iron_block",
			id : "71"
		},
		lit_redstone_ore : {
			name : "lit_redstone_ore",
			texture : "redstone_ore",
			id : "74"
		},
		unlit_redstone_torch : {
			name : "unlit_redstone_torch",
			texture : "redstone_torch_off",
			id : "75"
		},
		reeds : {
			name : "reeds",
			texture : "reeds",
			id : "83"
		},
		portal : {
			name : "portal",
			texture : "portal",
			id : "90"
		},
		cake : {
			name : "cake",
			texture : "cake_side",
			id : "92"
		},
		unpowered_repeater : {
			name : "unpowered_repeater",
			texture : "repeater_off",
			id : "93"
		},
		powered_repeater : {
			name : "powered_repeater",
			texture : "repeater_on",
			id : "94"
		},
		brown_mushroom_block : {
			name : "brown_mushroom_block",
			texture : "mushroom_block_skin_brown",
			id : "99"
		},
		red_mushroom_block : {
			name : "red_mushroom_block",
			texture : "mushroom_block_skin_red",
			id : "100"
		},
		pumpkin_stem : {
			name : "pumpkin_stem",
			texture : "pumpkin_stem_connected",
			id : "104"
		},
		melon_stem : {
			name : "melon_stem",
			texture : "melon_stem_connected",
			id : "105"
		},
		nether_wart : {
			name : "nether_wart",
			texture : "nether_wart_stage_2",
			id : "110"
		},
		end_portal : {
			name : "end_portal",
			texture : "", //needs to be black void
			id : "120"
		},
		dragon_egg : {
			name : "dragon_egg",
			texture : "dragon_egg",
			id : "122"
		},
		lit_redstone_lamp : {
			name : "lit_redstone_lamp",
			texture : "redstone_lamp_on",
			id : "124"
		},
		double_wooden_slab : {
			name : "double_wooden_slab",
			texture : "planks_oak",
			id : "125"
		},
		cocoa : {
			name : "cocoa",
			texture : "cocoa_stage_2",
			id : "127"
		},
		tripwire : {
			name : "tripwire",
			texture : "trip_wire",
			id : ""
		},
		command_block : {
			name : "command_block",
			texture : "command_block",
			id : "137"
		},
		carrots : {
			name : "carrots",
			texture : "carrots_stage_3",
			id : "141"
		},
		potatoes : {
			name : "potatoes",
			texture : "potatoes_stage_3",
			id : "142"
		},
		unpowered_comparator : {
			name : "unpowered_comparator",
			texture : "comparator_off",
			id : "149"
		}
	}

};
