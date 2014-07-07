//  Projectile Template
Projectile = {
	__proto__ : Object.create( Entity ),
	xTile : {
		name : "xTile",
		description : "X coordinate of the item\'s position in the chunk.",
		type : "short",
		def : 0,
		value : null
	},
	yTile : {
		name : "yTile",
		description : "Y coordinate of the item\'s position in the chunk.",
		type : "short",
		def : 0,
		value : null
	},
	zTile : {
		name : "zTile",
		description : "Z coordinate of the item\'s position in the chunk.",
		type : "short",
		def : 0,
		value : null
	},
	inTile : {
		name : "inTile",
		description : "The \"shake\" when arrows hit a block.",
		type : "byte",
		def : 0,
		value : null
	},
	inGround : {
		name : "inGround",
		description : "1 or 0 (true/false) - If the Projectile is in the ground or hit the ground already (For arrow pickup; you cannot pickup arrows in the air)",
		type : "byte",
		def : 0,
		value : null
	}
};

//  Arrorw
Arrow = {
	__proto__ : Object.create( Projectile ),
	inData : {
		name : "inData",
		description : "Metadata of tile arrow is in.",
		type : "byte",
		def : null,
		value : null
	},
	pickup : {
		name : "pickup",
		description : " 0 = cannot be picked up by players. 1 = can be picked up by players in survival or creative. 2 = can only be picked up by players in creative.",
		type : "byte",
		def : 1,
		value : null
	},
	player : {
		name : "player",
		description : "1 or 0 (true/false) - If pickup is not used, and this is true, the arrow can be picked up by players.",
		type : "byte",
		def : 1,
		value : null
	},
	damage : {
		name : "damage",
		description : "Unknown how this affects actual damage inflicted by the arrow. May not be a whole number. 2.0 for normal arrows, and increased 0.5 per level of Power enchantment on the firing bow. If the Power enchantment is present, an additional 0.5 is added on (so Power I gives a bonus of 1.0, while Power II gives 1.5).",
		type : "double",
		def : 2.0,
		value : null
	}
};

//  Snowball
Snowball = {
	__proto__ : Object.create( Projectile ),
	ownerName : {
		name : "ownerName",
		description : "The name of the player this projectile was thrown by.",
		type : "string",
		def : null,
		value : null
	}
};

//  Egg
Egg = {
	__proto__ : Object.create( Projectile )
};

// Fireball ( Ghast )
Fireball = {
	__proto__ : Object.create( Projectile ),
	direction : {
		name : "direction",
		description : " List of 3 doubles. Should be identical to Motion.",
		type : "list",
		def : {
			dX : {
				name : null,
				dispName : "dX",
				description : "X velocity of the entity in meters per tick.",
				type : "double",
				def : 0.0,
				value : null
			},
			dY : {
				name : null,
				dispName : "dY",
				description : "Y velocity of the entity in meters per tick.",
				type : "double",
				def : 0.0,
				value : null
			},
			dZ : {
				name : null,
				dispName : "dZ",
				description : "Z velocity of the entity in meters per tick.",
				type : "double",
				def : 0.0,
				value : null
			}
		},
		value : null
	}
};

// Small Fireball ( Blaze )
SmallFireball = {
	__proto__ : Object.create( Projectile ),
	direction : {
		name : "direction",
		description : " List of 3 doubles. Should be identical to Motion.",
		type : "list",
		def : {
			dX : {
				name : null,
				dispName : "dX",
				description : "X velocity of the entity in meters per tick.",
				type : "double",
				def : 0.0,
				value : null
			},
			dY : {
				name : null,
				dispName : "dY",
				description : "Y velocity of the entity in meters per tick.",
				type : "double",
				def : 0.0,
				value : null
			},
			dZ : {
				name : null,
				dispName : "dZ",
				description : "Z velocity of the entity in meters per tick.",
				type : "double",
				def : 0.0,
				value : null
			}
		},
		value : null
	}
};

//  Thrown Enderpearl
ThrownEnderpearl = {
	__proto__ : Object.create( Projectile ),
	ownerName : {
		name : "ownerName",
		description : "The name of the player this projectile was thrown by.",
		type : "string",
		def : null,
		value : null
	}
};

//  Thrown Exp Bottle
ThrownExpBottle = {
	__proto__ : Object.create( Projectile ),
	ownerName : {
		name : "ownerName",
		description : "The name of the player this projectile was thrown by.",
		type : "string",
		def : null,
		value : null
	}
};

//  Thrown Potion
ThrownPotion = {
	__proto__ : Object.create( Projectile ),
	ownerName : {
		name : "ownerName",
		description : "The name of the player this projectile was thrown by.",
		type : "string",
		def : null,
		value : null
	},
	potion : {
		name : "Potion",
		description : "The item that was thrown, without the slot tag.",
		type : "compound",
		def : { },
		value : null
	},
	potionValue : {
		name : "PotionValue",
		description : "If the Potion tag does not exist, this value is used as the damagevalue of the thrown potion.",
		type : "int",
		def : null,
		value : null
	}
};

//  Wither Skull
WitherSkull = {
	__proto__ : Object.create( Projectile ),
	direction : {
		name : "direction",
		description : " List of 3 doubles. Should be identical to Motion.",
		type : "list",
		def : {
			dX : {
				name : null,
				dispName : "dX",
				description : "X velocity of the entity in meters per tick.",
				type : "double",
				def : 0.0,
				value : null
			},
			dY : {
				name : null,
				dispName : "dXY",
				description : "Y velocity of the entity in meters per tick.",
				type : "double",
				def : 0.0,
				value : null
			},
			dZ : {
				name : null,
				dispName : "dZ",
				description : "Z velocity of the entity in meters per tick.",
				type : "double",
				def : 0.0,
				value : null
			}
		},
		value : null
	}
};
