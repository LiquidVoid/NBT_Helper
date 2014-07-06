Mob = {
	__proto__ : Object.create(Entity),
	health : {
		name : "Health",
		description : "Amount of health the entity has. A value of 1 is half a heart. Ignored if HealF is set.",
		type : "short",
		def : 20,
		value : null
	},
	healF : {
		name : "HealF",
		description : " A float value of health. If it\'s set, Health is ignored.",
		type : "float",
		def : 0.0,
		value : null
	},
	absorptionAmount : {
		name : "AbsorptionAmount",
		description : "Amount of extra health added by Absorption effect.",
		type : "float",
		def : 0.0,
		value : null
	},
	attackTime : {
		name : "AttackTime",
		description : "Number of ticks the mob\'s \"invincibility shield\" lasts after the mob was last struck. 0 when not recently hit.",
		type : "short",
		def : 0,
		value : null
	},
	hurtTime : {
		name : "HurtTime",
		description : "Number of ticks the mob turns red for after being hit. 0 when not recently hit.",
		type : "short",
		def : 0,
		value : null
	},
	deathTime : {
		name : "DeathTime",
		description : "Number of ticks the mob turns red for after being hit. 0 when not recently hit.",
		type : "short",
		def : 0,
		value : null
	},
	attributes : {
		name : "Attributes",
		description : "A list of Attributes for this mob. These are used for many purposes in internal calculations, and can be considered a mobs \"statistics\".",
		type : "list",
		def : {},
		value : null
	},
	activeEffects : {
		name : "ActiveEffects",
		description : "The list of potion effects on this mob. May not exist.",
		type : "list",
		def : {},
		value : null
	},
	equipment : {
		name : "Equipment",
		description : "The list of compound tags of the equipment the mob has. Each compound tag in the list is an Item without the slot tag. All 5 entries will always exist (even for players) but may be empty compound tags to indicate no item.",
		type : "list",
		def : {
			held : {
				name : null,
				dispName : "held",
				description : "Item in hand",
				type : "compound",
				def : {},
				value : null
			},
			feet : {
				name : null,
				dispName : "feet",
				description : "Armor on feet",
				type : "compound",
				def : {},
				value : null
			},
			legs : {
				name : null,
				dispName : "legs",
				description : "Armor on legs",
				type : "compound",
				def : {},
				value : null
			},
			chest : {
				name : null,
				dispName : "chest",
				description : "Armor on chest",
				type : "compound",
				def : {},
				value : null
			},
			head : {
				name : null,
				dispName : "head",
				description : "Item on head",
				type : "compound",
				def : {},
				value : null
			}
		},
		value : null
	},
	dropChances : {
		name : "DropChances",
		description : "List of float values from 0 to 1 representing the chance for a carried item to drop. By default these are all 0.085, but they get set to 1 if the mob picks up an item.",
		type : "list",
		def : {
			held : {
				name : null,
				dispName : "held",
				description : "Chance to drop this item.",
				type : "float",
				def : 0.085,
				value : null
			},
			feet : {
				name : null,
				dispName : "feet",
				description : "Chance to drop this item.",
				type : "float",
				def : 0.085,
				value : null
			},
			legs : {
				name : null,
				dispName : "legs",
				description : "Chance to drop this item.",
				type : "float",
				def : 0.085,
				value : null
			},
			chest : {
				name : null,
				dispName : "chest",
				description : "Chance to drop this item.",
				type : "float",
				def : 0.085,
				value : null
			},
			head : {
				name : null,
				dispName : "head",
				description : "Chance to drop this item.",
				type : "float",
				def : 0.085,
				value : null
			}
		},
		value : null
	},
	canPickUpLoot : {
		name : "CanPickUpLoot",
		description : "1 or 0 (true/false) - true if the mob can pick up loot (wear armor it picks up, use weapons it picks up).",
		type : "byte",
		def : 1,
		value : null
	},
	persistenceRequired : {
		name : "PersistenceRequired",
		description : "1 or 0 (true/false) - true if the mob must not despawn naturally.",
		type : "byte",
		def : 0,
		value : null
	},
	customName : {
		name : "CustomName",
		description : "The custom name of this entity. Appears in player death messages and villager trading interfaces, as well as above the mob\'s head when your cursor is over it. May not exist.",
		type : "string",
		def : "",
		value : null
	},
	customNameVisible : {
		name : "CustomNameVisible",
		description : "1 or 0 (true/false) - if true, and this mob has a custom name, it will always appear above their head, whether or not the cursor is pointing at it. May not exist.",
		type : "byte",
		def : 0,
		value : null
	},
	leashed : {
		name : "Leashed",
		description : "1 or 0 (true/false) - if true, and this mob has a custom name, it will always appear above their head, whether or not the cursor is pointing at it. May not exist.",
		type : "byte",
		def : 0,
		value : null
	},
	leash : { // [NOTE] this is going to get weird
		name : "Leash",
		description : "Either contains a UUID long pair, if this leash connects to another entity, or an X, Y, Z int trio if this leash connects to a fencepost.",
		type : "compound",
		def : {},//UUIDMost, UUIDLeast, X, Y, Z<---
		value : null
	}
};


//	Sub classes

Breedable = {
	__proto__ : Object.create(Mob),
	inLove : {
		name : "InLove",
		description : "Number of ticks until the mob loses its breeding hearts and stops searching for a mate. 0 when not searching for a mate.",
		type : "int",
		def : 0,
		value : null
	},
	age : {
		name : "Age",
		description : " Represents the age of the mob in ticks; when negative, the mob is a baby. When 0 or above, the mob is an adult. When above 0, represents the number of ticks before this mob can breed again.",
		type : "int",
		def : 0,
		value : null
	}
};


Tamable = {
	__proto__ : Object.create(Breedable),
	owner : {
		name : "Owner",
		description : " Name of the player that owns this mob. Empty string if no owner.",
		type : "string",
		def : 0,
		value : null
	},
	sitting : {
		name : "Sitting",
		description : "1 or 0 (true/false) - true if the mob is sitting.",
		type : "byte",
		def : 0,
		value : null
	}
};



//	Mobs

Bat = {
	__proto__ : Object.create(Mob),
	batFlags : {
		name : "BatFlags",
		description : "1 when hanging upside-down from a block, 0 when flying.",
		type : "byte",
		def : 0,
		value : null
	}
};

Creeper = {
	__proto__ : Object.create(Mob),
	powered : {
		name : "powered",
		description : "1 or 0 (true/false) - May not exist. True if the creeper is charged from being struck by lightning.",
		type : "byte",
		def : 0,
		value : null
	},
	explosionRadius : {
		name : "ExplosionRadius",
		description : "The radius of the explosion itself, default 3.",
		type : "byte",
		def : 3,
		value : null
	},
	fuse : {
		name : "Fuse",
		description : "The number of ticks before the creeper will explode (does not affect creepers that fall and explode upon impacting their victim). Default 30.",
		type : "short",
		def : 30,
		value : null
	},
	ignited : {
		name : "ignited",
		description : "1 or 0 (true/false) - Whether the creeper has been ignited by a Flint and Steel.",
		type : "byte",
		def : 0,
		value : null
	}
};

Enderman = {
	__proto__ : Object.create(Mob),	
	carried : {
		name : "Carried",
		description : "ID of the block carried by the Enderman. 0 when not carrying anything.",
		type : "short",
		def : 0,
		value : null
	},
	carriedData : {
		name : "CarriedData",
		description : "Additional data about the block carried by the Enderman. 0 when not carrying anything.",
		type : "short",
		def : 0,
		value : null
	}
};

EntityHorse = {
	__proto__ : Object.create(Breedable),
	bred : {
		name : "Bred",
		description : "1 or 0 (true/false) - Unknown. Remains 0 after breeding. Causes horse to become persistent.",
		type : "byte",
		def : 0,
		value : null
	},
	chestedHorse : {
		name : "ChestedHorse",
		description : "1 or 0 (true/false) - true if the horse has chests. As of 13w39b, a chested horse that is not a donkey or a mule will crash the game.",
		type : "byte",
		def : 0,
		value : null
	},
	eatingHaystack : {
		name : "EatingHaystack",
		description : "1 or 0 (true/false) - true if the horse is grazing.",
		type : "byte",
		def : 0,
		value : null
	},
	hasReproduced : {
		name : "HasReproduced",
		description : "1 or 0 (true/false) - true if the horse is grazing.",
		type : "byte",
		def : 0,
		value : null
	},
	tame : {
		name : "Tame",
		description : "1 or 0 (true/false) - true if the horse is tamed.",
		type : "byte",
		def : 0,
		value : null
	},
	temper : {
		name : "Temper",
		description : "Ranges from 0 to 100; increases with feeding. Higher values make a horse easier to tame",
		type : "int",
		def : 0,
		value : null
	},
	type : {
		name : "Type",
		description : "The type of the horse. 0 = Horse, 1= Donkey, 2= Mule, 3 = Zombie, 4 = Skeleton.",
		type : "int",
		def : 0,
		value : null
	},
	variant : {
		name : "Variant",
		description : "The variant of the horse. Determines colors. Stored as baseColor | markings << 8.",
		type : "int",
		def : 0,
		value : null
	},
	ownerName : {
		name : "OwnerName",
		description : "Contains the name of the player that tamed the horse. Has no effect on behaviour.",
		type : "string",
		def : "",
		value : null
	},
	items : {
		name : "Items",
		description : "List of items. Only exists if ChestedHorse is true",
		type : "list",
		def : {},
		value : null
	},
	armorItem : {
		name : "ArmorItem",
		description : "The armor item worn by this horse. May not exist.",
		type : "compound",
		def : {},
		value : null
	},
	saddleItem : {
		name : "SaddleItem",
		description : "The saddle item worn by this horse. May not exist.",
		type : "compound",
		def : {},
		value : null
	}
};

Ghast = {
	__proto__ : Object.create(Mob),	
	explosionPower : {
		name : "ExplosionPower",
		description : "The radius of the explosion created by the fireballs this ghast fires. Default value of 1",
		type : "int",
		def : 1,
		value : null
	}
};

LavaSlime = {
	__proto__ : Object.create(Mob),	
	size : {
		name : "Size",
		description : "The size of the slime.",
		type : "int",
		def : 1,
		value : null
	}
};

Ozelot = {
	__proto__ : Object.create(Tamable),
	catType : {
		name : "CatType",
		description : "The ID of the skin the ocelot has. 0 is wild ocelot, 1 is tuxuedo, 2 is tabby and 3 is siamese. Does not determine an ocelots behavior: it will be wild unless its Owner string is not empty, meaning wild ocelot\"s can look like cats and vice versa.",
		type : "int",
		def : 0,
		value : null
	}
};

Pig = {
	__proto__ : Object.create(Breedable),
	saddle : {
		name : "Saddle",
		description : "1 or 0 (true/false) - true if there is a saddle on the pig.",
		type : "byte",
		def : 0,
		value : null
	}
};

PigZombie = {
	__proto__ : Object.create(Mob),	
	anger : {
		name : "Anger",
		description : "Anger level. Determines the aggressivity of the creature towards players. 0 for neutral Zombie Pigmen.",
		type : "short",
		def : 0,
		value : null
	}
};

Sheep = {
	__proto__ : Object.create(Breedable),	
	sheared : {
		name : "Sheared",
		description : "1 or 0 (true/false) - true if the sheep has been shorn.",
		type : "byte",
		def : 0,
		value : null
	},
	color : {
		name : "Color",
		description : "0 to 15 - see wool data values for a mapping to colors.",
		type : "byte",
		def : 0,
		value : null
	}
};

Skeleton = {
	__proto__ : Object.create(Mob),	
	skeletonType : {
		name : "SkeletonType",
		description : "0 for normal skeleton, 1 for wither skeleton.",
		type : "int",
		def : 0,
		value : null
	}
};

Slime = {
	__proto__ : Object.create(Mob),	
	size : {
		name : "Size",
		description : "The size of the slime.",
		type : "int",
		def : 1,
		value : null
	}
};

WitherBoss = {
	__proto__ : Object.create(Mob),	
	invul : {
		name : "Invul",
		description : "The number of ticks of invulnerability left after being initially created. 0 once invulnerability has expired.",
		type : "int",
		def : 0,
		value : null
	}
};

Wolf = {
	__proto__ : Object.create(Tamable),
	angry : {
		name : "Angry",
		description : "1 or 0 (true/false) - true if the wolf is angry.",
		type : "byte",
		def : 0,
		value : null
	},
	collarColor : {
		name : "CollarColor",
		description : "The dye color of this wolf\"s collar. Present even for wild wolves (but does not render); default value is 14.",
		type : "byte",
		def : 0,
		value : null
	}
};

Villager = {
	__proto__ : Object.create(Mob),	
	profession : {
		name : "Profession",
		description : "The ID of the texture used for this villager. This also influences trading options.",
		type : "int",
		def : 0, //0 - Farmer, Librarian - 1, Priest - 2, Blacksmith - 3, Butcher - 4, Generic Villager - 5
		options : ["Farmer", "Librarian", "Priest", "Blacksmith", "Butcher", "Generic Villager"],
		value : null
	},
	riches : {//currently unused
		name : "Riches",
		description : "Currently Not Used",
		type : "int",
		def : 0,
		value : null
	},
	offers : {
		name : "Offers",
		description : "Is generated when the trading menu is opened for the first time.",
		type : "compound",
		def : {
			recipes : {
				name : "Recipes",
				description : "List of trade options.",
				type : "list",
				def : {
					maxUses : {
						name : "maxUses",
						description : "",
						type : "int",
						def : 0,
						value : null
					},
					uses : {
						name : "uses",
						description : "",
						type : "int",
						def : 0,
						value : null
					},
					buy : {
						name : "buy",
						description : "",
						type : "compound",
						def : {},
						value : null
					},
					buyB : {
						name : "buyB",
						description : "",
						type : "compound",
						def : {},
						value : null
					},
					sell : {
						name : "null",
						description : "",
						type : "compound",
						def : {},
						value : null
					}
				},
				value : null
			}
		},
		value : null
	}
};

VillagerGolem = {
	__proto__ : Object.create(Mob),	
	playerCreated : {
		name : "PlayerCreated",
		description : "1 or 0 (true/false) - true if this golem was created by a player.",
		type : "byte",
		def : 0,
		value : null
	}
};

Zombie = {
	__proto__ : Object.create(Mob),	
	isVillager : {
		name : "IsVillager",
		description : "1 or 0 (true/false) - true if this is an infected villager. May be absent on non-villager zombies",
		type : "byte",
		def : 0,
		value : null
	},
	isBaby : {
		name : "IsBaby",
		description : "1 or 0 (true/false) - true if this is an infected villager. May be absent on non-villager zombies",
		type : "byte",
		def : 0,
		value : null
	},
	conversionTime : {
		name : "ConversionTime",
		description : "1 or 0 (true/false) - true if this is an infected villager. May be absent on non-villager zombies",
		type : "int",
		def : -1,
		value : null
	}
};

