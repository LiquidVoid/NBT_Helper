Drop = { 
	__proto__ : Object.create(Entity),
	health : {
		name : "Health",
		description : "The health of the item, which starts at 5. Items take damage from fire, lava, and explosions. The item is destroyed when its health reaches 0.",
		type : "short",
		def : 5,
		value : null
	},
	age : {
		name : "Age",
		description : "The number of ticks the item has been "untouched". After 6000 ticks (5 minutes) the item is destroyed.",
		type : "int",
		def : 6000,
		value : null
	}
};

//	Drops

ItemDrop = {
	__proto__ : Object.create(Drop),
	item : {
		name : "Item",
		description : "The inventory item, without the Slot tag.",
		type : "compound",
		def : {},
		value : null
	}
};
XPOrb = {
	__proto__ : Object.create(Drop),
	value : {
		name : "Value",
		description : "The amount of experience the orb gives when picked up.",
		type : "short",
		def : 0,
		value : null
	}
};
