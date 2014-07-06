Boat = {
    __proto__: Object.create( Entity )
};

EnderCrystal = {
    __proto__: Object.create( Entity )
};
EyeOfEnderSignal = {
    __proto__: Object.create( Entity )
};
FireworksRocketEntity = {
    __proto__: Object.create( Entity ),
    life: {
        name: "Life",
        description: "The number of ticks this fireworks rocket has been flying for.",
        type: "int",
        def: 0,
        value: null
    },
    lifeTime: {
        name: "LifeTime",
        description: "The number of ticks before this fireworks rocket explodes. This value is randomized when the firework is launched: ((Flight + 1) * 10 + random(0 to 5) + random(0 to 6))",
        type: "int",
        def: 25,
        value: null
    },
    fireworksItem: {
        name: "FireworksItem",
        description: "The crafted Firework Rocket item.",
        type: "compound",
        def: { },
        value: null
    }
};
ItemFrame = {
    __proto__: Object.create( Entity ),
    tileX: {
        name: "TileX",
        description: "The X coordinate of the block the painting is placed on.",
        type: "int",
        def: null,
        value: null
    },
    tileY: {
        name: "TileY",
        description: "The Y coordinate of the block the painting is placed on.",
        type: "int",
        def: null,
        value: null
    },
    tileZ: {
        name: "TileZ",
        description: "The Z coordinate of the block the painting is placed on.",
        type: "int",
        def: null,
        value: null
    },
    direction: {
        name: "Direction",
        description: "Direction the painting faces: 0 is south, 1 is west, 2 is north, and 3 is east.",
        type: "int",
        def: 0,
        value: null
    },
    dir: {
        name: "Dir",
        description: "Same as Direction, except the meaning of values 2 and 0 are swapped. Ignored if Direction is present.",
        type: "byte",
        def: 0,
        value: null
    },
    item: {
        name: "Item",
        description: "The item, without the slot tag. If the item frame is empty, this tag does not exist.",
        type: "compound",
        def: { },
        value: null
    },
    itemDropChance: {
        name: "ItemDropChance",
        description: "The chance the item will drop when the item frame breaks. 1.0 by default.",
        type: "float",
        def: 1.0,
        value: null
    },
    itemRotation: {
        name: "ItemRotation",
        description: "The number of times the item has been rotated 90 degrees clockwise.",
        type: "byte",
        def: 0,
        value: null
    }
};
LeashKnot = {
    __proto__: Object.create( Entity )
};
Painting = {
    __proto__: Object.create( Entity ),
    tileX: {
        name: "TileX",
        description: "The X coordinate of the block the painting is placed on.",
        type: "int",
        def: 0,
        value: null
    },
    tileY: {
        name: "TileY",
        description: "The Y coordinate of the block the painting is placed on.",
        type: "int",
        def: null,
        value: null
    },
    tileZ: {
        name: "TileZ",
        description: "The Z coordinate of the block the painting is placed on.",
        type: "int",
        def: null,
        value: null
    },
    direction: {
        name: "Direction",
        description: "Direction the painting faces: 0 is south, 1 is west, 2 is north, and 3 is east.",
        type: "int",
        def: null,
        value: null
    },
    dir: {
        name: "Dir",
        description: "Same as Direction, except the meaning of values 2 and 0 are swapped. Ignored if Direction is present.",
        type: "byte",
        def: 0,
        value: null
    },
    motive: {
        name: "Motive",
        description: "The name of this Painting\"s art.",
        type: "string",
        def: null,
        value: null
    }
};
