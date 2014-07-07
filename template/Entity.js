//  Entity Template
Entity = {
    id : {
        name : "id",
        description : "Entity ID. This tag does not exist for the Player entity.",
        type : "string",
        def : "",
        value : null
    },
    pos : {
        name : "Pos",
        description : "3 TAG_Doubles describing the current X,Y,Z position of the entity.",
        type : "list",
        def : {
            X : {
                name : null,
                dispName : "X",
                description : "X coordinate",
                type : "double",
                def : 0.0,
                value : null
            },
            Y : {
                name : null,
                dispName : "Y",
                description : "Y coordinate",
                type : "double",
                def : 0.0,
                value : null
            },
            Z : {
                name : null,
                dispName : "Z",
                description : "Z coordinate",
                type : "double",
                def : 0.0,
                value : null
            }
        },
        value : null
    },
    motion : {
        name : "Motion",
        description : "3 TAG_Doubles describing the current dX,dY,dZ velocity of the entity in meters per tick.",
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
    },
    rotation : {
        name : "Rotation",
        description : "Two TAG_Floats representing rotation in degrees.",
        type : "list",
        def : {
            yaw : {
                name : null,
                dispName : "yaw",
                description : "The entity\"s rotation clockwise around the Y axis (called yaw). Due west is 0. Does not exceed 360 degrees.",
                type : "float",
                def : 0.0,
                value : null
            },
            pitch : {
                name : null,
                dispName : "pitch",
                description : "The entity\"s declination from the horizon (called pitch). Horizontal is 0. Positive values look downward. Does not exceed positive or negative 90 degrees.",
                type : "float",
                def : 0.0,
                value : null
            }
        },
        value : null
    },
    fallingDistance : {
        name : "FallingDistance",
        description : "Distance the entity has fallen. Larger values cause more damage when the entity lands.",
        type : "float",
        def : 0.0,
        value : null
    },
    fire : {
        name : "Fire",
        description : "Number of ticks until the fire is put out. Negative values reflect how long the entity can stand in fire before burning. Default -1 when not on fire.",
        type : "short",
        def : 0,
        value : null
    },
    air : {
        name : "Air",
        description : "How much air the entity has, in ticks. Fills to a maximum of 300 in air, giving 15 seconds submerged before the entity starts to drown, and a total of up to 35 seconds before the entity dies (if it has 20 health). Decreases while underwater. If 0 while underwater, the entity loses 1 health per second.",
        type : "short",
        def : 0,
        value : null
    },
    onGround : {
        name : "OnGround",
        description : "1 or 0 (true/false) - true if the entity is touching the ground.",
        type : "byte",
        def : 0,
        value : null
    },
    dimension : {
        name : "Dimension",
        description : "Unknown usage; entities are only saved in the region files for the dimension they are in. -1 for The Nether, 0 for The Overworld, and 1 for The End.",
        type : "int",
        def : 0,
        value : null
    },
    invulnerable : {
        name : "Invulnerable",
        description : "1 or 0 (true/false) - true if the entity should not take damage. This applies to living and nonliving entities alike: mobs will not take damage from any source (including potion effects) and objects such as vehicles and item frames cannot be destroyed unless their supports are removed. Note that these entities also cannot be moved by fishing rods, attacks, explosions, or projectiles.",
        type : "byte",
        def : 0,
        value : null
    },
    // [NOTE] Need to verify default setting
    portalCooldown : {
        name : "PortalCooldown",
        description : "The number of ticks before which the entity may be teleported back through a portal of any kind. Initially starts at 900 ticks (45 seconds) after teleportation and counts down to 0.",
        type : "int",
        def : 900,
        value : null
    },
    UUIDMost : {
        name : "UUIDMost",
        description : "The most significant bits of this entitys Universally Unique IDentifier. This is joined with UUIDLeast to form this entity\"s unique ID.",
        type : "long",
        def : 0,
        value : null
    },
    UUIDLeast : {
        name : "UUIDLeast",
        description : "The least significant bits of this entity\"s Universally Unique IDentifier.",
        type : "long",
        def : 0,
        value : null
    },
    riding : {
        name : "Riding",
        description : "The data of the entity being ridden. Note that if an entity is being ridden, the topmost entity in the stack has the Pos tag, and the coordinates specify the location of the bottommost entity. Also note that the bottommost entity controls movement, while the topmost entity determines spawning conditions when created by a mob spawner.",
        type : "compound",
        def : { },
        value : null
    }
};


// Dynamic Tile ( Primed TNT )
PrimedTnt = {
    __proto__ : Object.create( Entity ),
    fuse : {
        name : "Fuse",
        description : "Ticks until explosion.",
        type : "byte",
        def : 100,
        value : null
    }
};

// Dynamic Tile ( Falling Sand )
FallingSand = {
    __proto__ : Object.create( Entity ),
    tileID : {
        name : "TileID",
        description : "The Block ID, as above, but now supporting the 1-4095 range.",
        type : "int",
        def : 12, //Sand
        value : null
    },
    tileEntityData : {
        name : "TitleEntityData",
        description : "Optional. The tags of the tile entity for this block.",
        type : "compound",
        def : { },
        value : null
    },
    data : {
        name : "Data",
        description : "The data value for the block.",
        type : "byte",
        def : null,
        value : null
    },
    time : {
        name : "Time",
        description : "The number of ticks the entity has existed. If set to 0, the moment it ticks to 1, it will vanish if the block at its location has a different ID than the entitys TileID. If the block at its location has the same ID as its TileID when Time ticks from 0 to 1, the block will instead be deleted, and the entity will continue to fall, having overwritten it. (This was the result of Mojangs failed attempt to \"fix\" infinite sand/gravel/dragon egg/anvil/etc. generators by trying to have the falling sand entity delete the duplicated block the next tick) When Time goes above 600, or above 100 while the block is below Y=0, the entity is deleted.", //entity " s Mojang " s
        type : "byte",
        def : 0,
        value : null
    },
    dropItem : {
        name : "DropItem",
        description : "1 or 0 (true/false) - true if the block should drop an item that can be picked up when it breaks.",
        type : "byte",
        def : 1,
        value : null
    },
    hurtEntities : {
        name : "HurtEntities",
        description : "1 or 0 (true/false) - true if the block should hurt entities it falls on.",
        type : "byte",
        def : 1,
        value : null
    },
    fallHurtMax : {
        name : "FallHurtMax",
        description : "The maximum number of hitpoints of damage to inflict on entities that intersect this FallingSand. For vanilla FallingSand, always 40 (20 hearts).",
        type : "int",
        def : 40,
        value : null
    },
    fallHurtAmount : {
        name : "FallHurtAmount",
        description : "Multiplied by the FallDistance to calculate the amount of damage to inflict. For vanilla FallingSand, always 2.",
        type : "float",
        def : 2.0,
        value : null
    }
};

