Minecart = {
	__proto__ : Object.create(Entity),
	customDisplayTile : {
		name : "CustomDisplayTile",
		description : "Optional. 1 or 0 (true/false) - whether to display the custom tile in this minecart.",
		type : "byte",
		def : 0,
		value : null
	},
	displayTile : {
		name : "DisplayTile",
		description : "Optional. The ID of the custom block in the minecart.",
		type : "int",
		def : null,
		value : null
	},
	displayData : {
		name : "DisplayData",
		description : "Optional. The Data value of the custom block in the minecart.",
		type : "int",
		def : null,
		value : null
	},
	displayOffset : {
		name : "DisplayOffset",
		description : "Optional. The offset of the block displayed in the Minecart. Positive values move the block upwards, while negative values move it downwards. A value of 16 will move the block up by exactly one multiple of its height.",
		type : "int",
		def : 0,
		value : null
	},
	customName : {
		name : "CustomName",
		description : "Optional. The custom name of this minecart. ("@" by default for command block minecarts)",
		type : "string",
		def : null,
		value : null
	}
};

//	Carts

MinecartRideable = {
	__proto__ : Object.create(Minecart)
};
MinecartChest = {
	__proto__ : Object.create(Minecart),
	items : {
		name : "Items",
		description : "List of items.",
		type : "list",
		def : {},
		value : null
	}
};
MinecartFurnace = {
	__proto__ : Object.create(Minecart),
	pushX : {
		name : "PushX",
		description : "Force along X axis, used for smooth acceleration/deceleration.",
		type : "double",
		def : 0.0,
		value : null
	},
	pushZ : {
		name : "PushZ",
		description : "Force along Z axis, used for smooth acceleration/deceleration.",
		type : "double",
		def : 0.0,
		value : null
	},
	fuel : {
		name : "Fuel",
		description : "The number of ticks until the minecart runs out of fuel.",
		type : "short",
		def : 0,
		value : null
	}
};
MinecartSpawner = {
	__proto__ : Object.create(Minecart),
	spawnPotentials : {
		name : "SpawnPotentials",
		description : "Optional. List of possible entities to spawn. If this tag does not exist, but SpawnData exists, Minecraft will generate it the next time the spawner tries to spawn an entity. The generated list will contain a single entry derived from the EntityId and SpawnData tags.",
		type : "list",
		def : {},
		value : null
	},
	entityId : {
		name : "EntityId",
		description : "The Entity ID of the next entity(s) to spawn. Both Mob Entity IDs and other Entity IDs will work. Warning: If SpawnPotentials exists, this tag will get overwritten after the next spawning attempt: see above for more details.",
		type : "string",
		def : null,
		value : null
	},
	spawnData : {
		name : "SpawnData",
		description : "Contains tags to copy to the next spawned entity(s) after spawning. Any of the Entity or Mob tags may be used. Note that if a spawner specifies any of these tags, almost all variable data such as mob equipment, villager profession, sheep wool color, etc., will no longer be automatically generated, and must also be manually specified [4] (note that this does not apply to position data, which will be randomized as normal unless Pos is specified. Similarly, unless Size and Health are specified for a Slime or Magma Cube, these will still be randomized). This, together with EntityId, also determines the appearance of the miniature entity spinning in the spawner cage. Note: this tag is optional: if it does not exist, the next spawned entity will use the default vanilla spawning properties for this mob, including potentially randomized armor (this is true even if SpawnPotentials does exist). Warning: If SpawnPotentials exists, this tag will get overwritten after the next spawning attempt: see above for more details.",
		type : "compound",
		def : {},
		value : null
	},
	spawnCount : {
		name : "SpawnCount",
		description : "How many mobs to attempt to spawn each time.",
		type : "short",
		def : 3,
		value : null
	},
	spawnRange : {
		name : "SpawnRange",
		description : "The radius around which the spawner attempts to place mobs randomly. The spawn area is square, includes the block the spawner is in, and is centered around the spawner\"s x,z coordinates - not the spawner itself. It is 2 blocks high, centered around the spawner\"s y coordinate (its bottom), allowing mobs to spawn as high as its top surface and as low as 1 block below its bottom surface. Vertical spawn coordinates are integers, while horizontal coordinates are floating point and weighted towards values near the spawner itself.",
		type : "short",
		def : 7,
		value : null
	},
	delay : {
		name : "Delay",
		description : "Ticks until next spawn. If 0, it will spawn immediately when a player enters its range. If set to -1 (this state never occurs in a natural spawner; it seems to be a feature accessed only via NBT editing), the spawner will reset its Delay, and (if SpawnPotentials exist) EntityID and SpawnData as though it had just completed a successful spawn cycle, immediately when a player enters its range. Note that setting Delay to -1 can be useful if you want the game to properly randomize the spawner\"s Delay, EntityID, and SpawnData, rather than starting with pre-defined values.",
		type : "short",
		def : 0,
		value : null
	},
	minSpawnDelay : {
		name : "MinSpawnDelay",
		description : "The minimum random delay for the next spawn delay. May be equal to MaxSpawnDelay.",
		type : "short",
		def : 200,
		value : null
	},
	maxSpawnDelay : {
		name : "MaxSpawnDelay",
		description : "The maximum random delay for the next spawn delay. Warning: Setting this value to 0 crashes Minecraft. Set to at least 1.",
		type : "short",
		def : 600,
		value : null
	},
	maxNearbyEntities : {
		name : "MaxNearbyEntities",
		description : "Overrides the maximum number of nearby (within a box of spawnrange*2+1 x spawnrange*2+1 x 8 centered around the spawner block) entities whose IDs match this spawner\"s entity ID. Note that this is relative to a mob\"s hitbox, not their physical position. Also note that all entities within all chunk sections (16x16x16 cubes) overlapped by this box are tested for their ID and hitbox overlap, rather than just entities which are within the box, meaning a large amount of entities outside the box (or within it, of course) can cause substantial lag.",
		type : "short",
		def : 8,
		value : null
	},
	requiredPlayerRange : {
		name : "RequiredPlayerRange",
		description : "Overrides the block radius of the sphere of activation by players for this spawner. Note that for every gametick, a spawner will check all players in the current world to test whether a player is within this sphere.",
		type : "short",
		def : 16,
		value : null
	}
};
MinecartTNT = {
	__proto__ : Object.create(Minecart),
	tntFuse : {
		name : "TNTFuse",
		description : "Time until explosion or -1 if deactivated.",
		type : "int",
		def : -1,
		value : null
	}
};
MinecartHopper = {
	__proto__ : Object.create(Minecart),
	items : {
		name : "Items",
		description : "List of items.",
		type : "list",
		def : {},
		value : null
	},
	transferCooldown : {
		name : "TransferCooldown",
		description : "Time until the next transfer, between 1 and 8, or 0 if there is no transfer.",
		type : "int",
		def : 0,
		value : null
	}
};
MinecartCommandBlock = {
	__proto__ : Object.create(Minecart),
	command : {
		name : "Command",
		description : " The command entered into the minecart.",
		type : "string",
		def : 0,
		value : null
	},
	successCount : {
		name : "SuccessCount",
		description : "Represents the strength of the analog signal output by redstone comparators attached to this minecart. Only updated when the minecart is activated with an activator rail.",
		type : "int",
		def : 0,
		value : null
	},
	trackOutput : {
		name : "TrackOutput",
		description : "Unkown",
		type : "byte",
		def : null,
		value : null
	}
};