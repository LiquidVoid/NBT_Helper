TileEntity = {
	id : {
		name : 'id',
		description : 'Tile entity ID',
		type : 'string',
		def : '',
		value : null
	},
	x : {
		name : 'x',
		description : 'X coordinate of the Tile Entity',
		type : 'int',
		def : 0,
		value : null
	},
	y : {
		name : 'y',
		description : 'Y coordinate of the Tile Entity',
		type : 'int',
		def : 0,
		value : null
	},
	z : {
		name : 'z',
		description : 'Z coordinate of the Tile Entity',
		type : 'int',
		def : 0,
		value : null
	}
};

// Tile Entities

Airportal = {
	__proto__ : Object.create(TileEntity)
};
Beacon = {
	__proto__ : Object.create(TileEntity),
	levels : {
		name : 'Levels',
		description : 'The number of levels available from the pyramid.',
		type : 'int',
		def : 0,
		value : null
	},
	primary : {
		name : 'Primary',
		description : 'The primary power selected, see Potion effects for IDs. 0 means none.',
		type : 'int',
		def : 0,
		value : null
	},
	secondary : {
		name : 'Secondary',
		description : 'The secondary power selected, see Potion effects for IDs. 0 means none.',
		type : 'int',
		def : 0,
		value : null
	}
};
Cauldron = {
	__proto__ : Object.create(TileEntity),
	customName : {
		name : 'CustomName',
		description : 'Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual "@" when using commands such as "say" and "tell".',
		type : 'string',
		def : null,
		value : null
	},
	items : {
		name : 'Items',
		description : 'List of items in the brewing stand.',
		type : 'list',
		def : {},
		value : null
	},
	brewTime : {
		name : 'BrewTime',
		description : 'The number of ticks the potions have been brewing for.',
		type : 'int',
		def : 0,
		value : null
	}
};
Chest = {
	__proto__ : Object.create(TileEntity),
	customName : {
		name : 'CustomName',
		description : 'Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual "@" when using commands such as "say" and "tell".',
		type : 'string',
		def : null,
		value : null
	},
	items : {
		name : 'Items',
		description : 'List of items in the brewing stand.',
		type : 'compound',
		def : {},
		value : null
	}
};
Comparator = {
	__proto__ : Object.create(TileEntity),
	outputSignal : {
		name : 'OutputSignal',
		description : ' Represents the strength of the analog signal output by this redstone comparator. Likely used because the block itself uses its four bits of metadata to determine its rotation, powered state, and subtraction mode state, and comparators can hold a specific amount of power even in circuits without redstone wire.',
		type : 'int',
		def : 0,
		value : null
	}
};
Control = {
	__proto__ : Object.create(TileEntity),
	customName : {
		name : 'CustomName',
		description : 'Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual "@" when using commands such as "say" and "tell".',
		type : 'string',
		def : null,
		value : null
	},
	command : {
		name : 'Command',
		description : 'The command to issue to the server.',
		type : 'string',
		def : 0,
		value : null
	},
	successCount : {
		name : 'SuccessCount',
		description : 'Represents the strength of the analog signal output by redstone comparators attached to this command block. Only updated when the command block is activated with a redstone signal.',
		type : 'int',
		def : 0,
		value : null
	}
};
DLDetector = {
	__proto__ : Object.create(TileEntity),
};
Dropper = {
	__proto__ : Object.create(TileEntity),
	customName : {
		name : 'CustomName',
		description : 'Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual "@" when using commands such as "say" and "tell".',
		type : 'string',
		def : null,
		value : null
	},
	items : {
		name : 'Items',
		description : 'List of items in the dispenser',
		type : 'compound',
		def : {},
		value : null
	}
};
EnchantTable = {
	__proto__ : Object.create(TileEntity),
	customName : {
		name : 'CustomName',
		description : 'Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual "@" when using commands such as "say" and "tell".',
		type : 'string',
		def : null,
		value : null
	}
};
EnderChest = {
	__proto__ : Object.create(TileEntity)
};
Furnace = {
	__proto__ : Object.create(TileEntity),
	customName : {
		name : 'CustomName',
		description : 'Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual "@" when using commands such as "say" and "tell".',
		type : 'string',
		def : null,
		value : null
	},
	burnTime : {
		name : 'BurnTime',
		description : 'Number of ticks left before the current fuel runs out.',
		type : 'short',
		def : 0,
		value : null
	},
	cookTime : {
		name : 'CookTime',
		description : 'Number of ticks the item has been smelting for. The item finishes smelting when this value reaches 200 (10 seconds). Is reset to 0 if BurnTime reaches 0.',
		type : 'short',
		def : 0,
		value : null
	},
	items : {
		name : 'Items',
		description : 'List of items in the furnace slots.',
		type : 'list',
		def : {},
		value : null
	}
};
Hopper = {
	__proto__ : Object.create(TileEntity),
	customName : {
		name : 'CustomName',
		description : 'Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual "@" when using commands such as "say" and "tell".',
		type : 'string',
		def : null,
		value : null
	},
	items : {
		name : 'Items',
		description : 'List of items in the hopper slots.',
		type : 'list',
		expected : 'Item', //This needs to be an item!
		def : {},
		value : null
	},
	transferCooldown : {
		name : 'TransferCooldown',
		description : 'Time unil the next transfer, naturaly between 1 and 8 or 0 if there is no transfer.',
		type : 'int',
		def : 0,
		value : null
	}
};
MobSpawner = {
	__proto__ : Object.create(TileEntity),
	spawnPotentials : {
		name : 'SpawnPotentials',
		description : 'Optional. List of possible entities to spawn. If this tag does not exist, but SpawnData exists, Minecraft will generate it the next time the spawner tries to spawn an entity. The generated list will contain a single entry derived from the EntityId and SpawnData tags.',
		type : 'list',
		expected : 'Entity',
		def : {},
		value : null
	},
	entityId : {
		name : 'EntityId',
		description : 'The Entity ID of the next entity(s) to spawn. Both Mob Entity IDs and other Entity IDs will work. Warning: If SpawnPotentials exists, this tag will get overwritten after the next spawning attempt: see above for more details.',
		type : 'string',
		def : '',
		value : null
	},
	spawnData : {
		name : 'SpawnData',
		description : 'Contains tags to copy to the next spawned entity(s) after spawning. Any of the Entity or Mob tags may be used. Note that if a spawner specifies any of these tags, almost all variable data such as mob equipment, villager profession, sheep wool color, etc., will no longer be automatically generated, and must also be manually specified [4] (note that this does not apply to position data, which will be randomized as normal unless Pos is specified. Similarly, unless Size and Health are specified for a Slime or Magma Cube, these will still be randomized). This, together with EntityId, also determines the appearance of the miniature entity spinning in the spawner cage. Note: this tag is optional: if it does not exist, the next spawned entity will use the default vanilla spawning properties for this mob, including potentially randomized armor (this is true even if SpawnPotentials does exist). Warning: If SpawnPotentials exists, this tag will get overwritten after the next spawning attempt: see above for more details.',
		type : 'compound',
		def : {},
		value : null
	},
	spawnCount : {
		name : 'SpawnCount',
		description : 'How many mobs to attempt to spawn each time.',
		type : 'short',
		def : 3,
		value : null
	},
	spawnRange : {
		name : 'SpawnRange',
		description : 'The radius around which the spawner attempts to place mobs randomly. The spawn area is square, includes the block the spawner is in, and is centered around the spawner\'s x,z coordinates - not the spawner itself. It is 2 blocks high, centered around the spawner\'s y coordinate (its bottom), allowing mobs to spawn as high as its top surface and as low as 1 block below its bottom surface. Vertical spawn coordinates are integers, while horizontal coordinates are floating point and weighted towards values near the spawner itself.',
		type : 'short',
		def : 7,
		value : null
	},
	delay : {
		name : 'Delay',
		description : 'Ticks until next spawn. If 0, it will spawn immediately when a player enters its range. If set to -1 (this state never occurs in a natural spawner; it seems to be a feature accessed only via NBT editing), the spawner will reset its Delay, and (if SpawnPotentials exist) EntityID and SpawnData as though it had just completed a successful spawn cycle, immediately when a player enters its range. Note that setting Delay to -1 can be useful if you want the game to properly randomize the spawner\'s Delay, EntityID, and SpawnData, rather than starting with pre-defined values.',
		type : 'short',
		def : 0,
		value : null
	},
	minSpawnDelay : {
		name : 'MinSpawnDelay',
		description : 'The minimum random delay for the next spawn delay. May be equal to MaxSpawnDelay.',
		type : 'short',
		def : 200,//[NOTE] verify
		value : null
	},
	maxSpawnDelay : {
		name : 'MaxSpawnDelay',
		description : 'The maximum random delay for the next spawn delay. Warning: Setting this value to 0 crashes Minecraft. Set to at least 1.',
		type : 'short',
		def : 600,//[Note] verify
		value : null
	},
	maxNearbyEntities : {
		name : 'MaxNearbyEntities',
		description : 'Overrides the maximum number of nearby (within a box of spawnrange*2+1 x spawnrange*2+1 x 8 centered around the spawner block) entities whose IDs match this spawner\'s entity ID. Note that this is relative to a mob\'s hitbox, not their physical position. Also note that all entities within all chunk sections (16x16x16 cubes) overlapped by this box are tested for their ID and hitbox overlap, rather than just entities which are within the box, meaning a large amount of entities outside the box (or within it, of course) can cause substantial lag.',
		type : 'short',
		def : 8,
		value : null
	},
	requiredPlayerRange : {
		name : 'RequiredPlayerRange',
		description : 'Overrides the block radius of the sphere of activation by players for this spawner. Note that for every gametick, a spawner will check all players in the current world to test whether a player is within this sphere.',
		type : 'short',
		def : 16,
		value : null
	}
};
Music = {
	__proto__ : Object.create(TileEntity),
	note : {
		name : 'note',
		description : 'Pitch (number of right-clicks).',
		type : 'byte',
		def : 0,
		value : null
	}
};
Piston = {
	__proto__ : Object.create(TileEntity),
	blockId : {
		name : 'blockid',
		description : 'Block_IDs of the block being moved.',
		type : 'int',
		def : null,
		value : null
	},
	blockData : {
		name : 'blockData',
		description : ' Data value of the block being moved.',
		type : 'int',
		def : null,
		value : null
	},
	facing : {
		name : 'facing',
		description : 'Direction in which the block will be pushed.',
		type : 'byte',
		def : 0,
		value : null
	},
	progress : {
		name : 'progress',
		description : 'How far the block has been moved.',
		type : 'float',
		def : 0.0,
		value : null
	},
	extending : {
		name : 'extending',
		description : '1 or 0 (true/false) - true if the block is being pushed.',
		type : 'byte',
		def : 0,
		value : null
	}
};
RecordPlayer = {
	__proto__ : Object.create(TileEntity),
	record : {
		name : 'Record',
		description : ' Record currently playing. 0 is no record. Otherwise, it is the item ID of the record (e.g. 2261 for the "mall" record). Other IDs can be used to make other items or blocks pop out with a data value of 0. This is always overridden by the ID in RecordItem.',
		type : 'int',
		def : 0,
		value : null
	},
	recordItem : {
		name : 'RecordItem',
		description : '1 or 0 (true/false) - true if the block is being pushed.',
		type : 'compound',
		def : {},
		value : null
	}
};
Sign = {
	__proto__ : Object.create(TileEntity),
	text1 : {
		name : 'Text1',
		description : 'First row of text.',
		type : 'string',
		def : null,
		value : null
	},
	text2 : {
		name : 'Text2',
		description : 'Second row of text.',
		type : 'string',
		def : null,
		value : null
	},
	text3 : {
		name : 'Text3',
		description : 'Thrid row of text.',
		type : 'string',
		def : null,
		value : null
	},
	text4 : {
		name : 'Text4',
		description : 'Fourth row of text.',
		type : 'string',
		def : null,
		value : null
	}
};
Skull = {
	__proto__ : Object.create(TileEntity),
	skullType : {
		name : 'SkullType',
		description : 'The type of the skull, similar to the Item IDs.',
		type : 'byte',
		def : 0,
		value : null
	},
	extraType : {
		name : 'ExtraType',
		description : 'Name of the player this is a skull of.',
		type : 'string',
		def : null,
		value : null
	},
	rot : {
		name : 'Rot',
		description : 'The orientation, similar to signs.',
		type : 'byte',
		def : 0,
		value : null
	}	
};
Trap = {
	__proto__ : Object.create(TileEntity),
	customName : {
		name : 'CustomName',
		description : 'Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual "@" when using commands such as "say" and "tell".',
		type : 'string',
		def : null,
		value : null
	},
	items : {
		name : 'Items',
		description : 'List of items in the dispenser',
		type : 'compound',
		def : {},
		value : null
	}
};
