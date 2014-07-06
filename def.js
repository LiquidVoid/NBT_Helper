// Add expected perameter
// Fix the defaults for strings to "", make sure everything has a default
// Add options (like in vilager) where nessesary

// Inheritances
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
                type : "list",
                def : {
                x : {
                name : null,
                        description : "X coordinate",
                        type : "double",
                        def : 0.0,
                        value : null
                },
                        y : {
                        name : null,
                                description : "Y coordinate",
                                type : "double",
                                def : 0.0,
                                value : null
                        },
                        z: {
                        name : null,
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
                type : "list",
                def : {
                dX : {
                name : null,
                        description : "X velocity of the entity in meters per tick.",
                        type : "double",
                        def : 0.0,
                        value : null
                },
                        dY : {
                        name : null,
                                description : "Y velocity of the entity in meters per tick.",
                                type : "double",
                                def : 0.0,
                                value : null
                        },
                        dZ : {
                        name : null,
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
                description : "",
                type : "list",
                def : {
                yaw : {
                name : null,
                        description : "The entity\"s rotation clockwise around the Y axis (called yaw). Due west is 0. Does not exceed 360 degrees.",
                        type : "float",
                        def : 0.0,
                        value : null
                },
                        pitch : {
                        name : null,
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
                def : null,
                value : null
        },
        invulnerable : {
        name : "Invulnerable",
                description : "1 or 0 (true/false) - true if the entity should not take damage. This applies to living and nonliving entities alike: mobs will not take damage from any source (including potion effects) and objects such as vehicles and item frames cannot be destroyed unless their supports are removed. Note that these entities also cannot be moved by fishing rods, attacks, explosions, or projectiles.",
                type : "byte",
                def : 0,
                value : null
        },
        portalCooldown : { // [NOTE] Need to verify default setting
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
                type : "compound",
                def : {},
                value : null
        }
};
        Mob = {
        __proto__ : Object.create( Entity ),
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
                                description : "Item in hand",
                                type : "compound",
                                def : {},
                                value : null
                        },
                                feet : {
                                name : null,
                                        description : "Armor on feet",
                                        type : "compound",
                                        def : {},
                                        value : null
                                },
                                legs : {
                                name : null,
                                        description : "Armor on legs",
                                        type : "compound",
                                        def : {},
                                        value : null
                                },
                                chest : {
                                name : null,
                                        description : "Armor on chest",
                                        type : "compound",
                                        def : {},
                                        value : null
                                },
                                head : {
                                name : null,
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
                                description : "Chance to drop this item.",
                                type : "float",
                                def : 0.085,
                                value : null
                        },
                                feet : {
                                name : null,
                                        description : "Chance to drop this item.",
                                        type : "float",
                                        def : 0.085,
                                        value : null
                                },
                                legs : {
                                name : null,
                                        description : "Chance to drop this item.",
                                        type : "float",
                                        def : 0.085,
                                        value : null
                                },
                                chest : {
                                name : null,
                                        description : "Chance to drop this item.",
                                        type : "float",
                                        def : 0.085,
                                        value : null
                                },
                                head : {
                                name : null,
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
                        def : 0,
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
                        def : {}, //UUIDMost, UUIDLeast, X, Y, Z<---
                        value : null
                }
        };
        Breedable = {
        __proto__ : Object.create( Mob ),
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
        __proto__ : Object.create( Breedable ),
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
        Drop = {
        __proto__ : Object.create( Entity ),
                health : {
                name : "Health",
                        description : "The health of the item, which starts at 5. Items take damage from fire, lava, and explosions. The item is destroyed when its health reaches 0.",
                        type : "short",
                        def : 5,
                        value : null
                },
                age : {
                name : "Age",
                        description : "The number of ticks the item has been \"untouched\". After 6000 ticks (5 minutes) the item is destroyed.",
                        type : "int",
                        def : 6000,
                        value : null
                }
        };
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
        Minecart = {
        __proto__ : Object.create( Entity ),
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
                        description : "Optional. The custom name of this minecart. (\"@\" by default for command block minecarts)",
                        type : "string",
                        def : null,
                        value : null
                }
        };
        TileEntity = {
        id : {
        name : "id",
                description : "Tile entity ID",
                type : "string",
                def : null,
                value : null
        },
                x : {
                name : "x",
                        description : "X coordinate of the Tile Entity",
                        type : "int",
                        def : null,
                        value : null
                },
                y : {
                name : "y",
                        description : "Y coordinate of the Tile Entity",
                        type : "int",
                        def : null,
                        value : null
                },
                z : {
                name : "z",
                        description : "Z coordinate of the Tile Entity",
                        type : "int",
                        def : null,
                        value : null
                }
        };
//Mob
        Bat = {
        __proto__ : Object.create( Mob ),
                batFlags : {
                name : "BatFlags",
                        description : "1 when hanging upside-down from a block, 0 when flying.",
                        type : "byte",
                        def : 0,
                        value : null
                }
        };
        Blaze = {
        __proto__ : Object.create( Mob )
        };
        CaveSpider = {
        __proto__ : Object.create( Mob )
        };
        Chicken = {
        __proto__ : Object.create( Mob )
        };
        Cow = {
        __proto__ : Object.create( Breedable )
        };
        Creeper = {
        __proto__ : Object.create( Mob ),
                powered : {
                name : "Powered",
                        description : "",
                        type : "byte",
                        def : 0,
                        value : null
                }
        };
        EnderDragon = {
        __proto__ : Object.create( Mob )
        };
        Enderman = {
        __proto__ : Object.create( Mob ),
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
        __proto__ : Object.create( Breedable ),
                bred : {
                name : "Bred",
                        description : "1 or 0 (true/false) - Unknown. Remains 0 after breeding. Causes horse to become persistent.",
                        type : "byte",
                        def : 0,
                        value : null
                },
                chestedHorse : {
                name : "hestedHorse",
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
                        def : null,
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
        __proto__ : Object.create( Mob ),
                explosionPower : {
                name : "ExplosionPower",
                        description : "The radius of the explosion created by the fireballs this ghast fires. Default value of 1",
                        type : "int",
                        def : 1,
                        value : null
                }
        };
        Giant = {
        __proto__ : Object.create( Mob )
        };
        LavaSlime = {
        __proto__ : Object.create( Mob ),
                size : {
                name : "Size",
                        description : "The size of the slime.",
                        type : "int",
                        def : 1,
                        value : null
                }
        };
        MushroomCow = {
        __proto__ : Object.create( Breedable )
        };
        Ozelot = {
        __proto__ : Object.create( Tamable ),
                catType : {
                name : "CatType",
                        description : "The ID of the skin the ocelot has. 0 is wild ocelot, 1 is tuxuedo, 2 is tabby and 3 is siamese. Does not determine an ocelots behavior: it will be wild unless its Owner string is not empty, meaning wild ocelot\"s can look like cats and vice versa.",
                        type : "int",
                        def : 0,
                        value : null
                }
        };
        Pig = {
        __proto__ : Object.create( Breedable ),
                saddle : {
                name : "Saddle",
                        description : "1 or 0 (true/false) - true if there is a saddle on the pig.",
                        type : "byte",
                        def : 0,
                        value : null
                }
        };
        PigZombie = {
        __proto__ : Object.create( Mob ),
                anger : {
                name : "Anger",
                        description : "Anger level. Determines the aggressivity of the creature towards players. 0 for neutral Zombie Pigmen.",
                        type : "short",
                        def : 0,
                        value : null
                }
        };
        Sheep = {
        __proto__ : Object.create( Breedable ),
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
        Silverfish = {
        __proto__ : Object.create( Mob )
        };
        Skeleton = {
        __proto__ : Object.create( Mob ),
                skeletonType : {
                name : "SkeletonType",
                        description : "0 for normal skeleton, 1 for wither skeleton.",
                        type : "int",
                        def : 0,
                        value : null
                }
        };
        Slime = {
        __proto__ : Object.create( Mob ),
                size : {
                name : "Size",
                        description : "The size of the slime.",
                        type : "int",
                        def : 1,
                        value : null
                }
        };
        Spider = {
        __proto__ : Object.create( Mob )
        };
        Squid = {
        __proto__ : Object.create( Mob )
        };
        Witch = {
        __proto__ : Object.create( Mob )
        };
        WitherBoss = {
        __proto__ : Object.create( Mob ),
                invul : {
                name : "Invul",
                        description : "The number of ticks of invulnerability left after being initially created. 0 once invulnerability has expired.",
                        type : "int",
                        def : 0,
                        value : null
                }
        };
        Wolf = {
        __proto__ : Object.create( Tamable ),
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
        __proto__ : Object.create( Mob ),
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
        __proto__ : Object.create( Mob ),
                playerCreated : {
                name : "PlayerCreated",
                        description : "1 or 0 (true/false) - true if this golem was created by a player.",
                        type : "byte",
                        def : 0,
                        value : null
                }
        };
        Zombie = {
        __proto__ : Object.create( Mob ),
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
                        def : - 1,
                        value : null
                }
        };
//Projectiles
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
        Egg = {
        __proto__ : Object.create( Projectile )
        };
        Fireball = {
        __proto__ : Object.create( Projectile ),
                direction : {
                name : "direction",
                        description : " List of 3 doubles. Should be identical to Motion.",
                        type : "list",
                        def : {
                        dX : {
                        name : null,
                                description : "X velocity of the entity in meters per tick.",
                                type : "double",
                                def : 0.0,
                                value : null
                        },
                                dY : {
                                name : null,
                                        description : "Y velocity of the entity in meters per tick.",
                                        type : "double",
                                        def : 0.0,
                                        value : null
                                },
                                dZ : {
                                name : null,
                                        description : "Z velocity of the entity in meters per tick.",
                                        type : "double",
                                        def : 0.0,
                                        value : null
                                }
                        },
                        value : null
                }
        };
        SmallFireball = {
        __proto__ : Object.create( Projectile ),
                direction : {
                name : "direction",
                        description : " List of 3 doubles. Should be identical to Motion.",
                        type : "list",
                        def : {
                        dX : {
                        name : null,
                                description : "X velocity of the entity in meters per tick.",
                                type : "double",
                                def : 0.0,
                                value : null
                        },
                                dY : {
                                name : null,
                                        description : "Y velocity of the entity in meters per tick.",
                                        type : "double",
                                        def : 0.0,
                                        value : null
                                },
                                dZ : {
                                name : null,
                                        description : "Z velocity of the entity in meters per tick.",
                                        type : "double",
                                        def : 0.0,
                                        value : null
                                }
                        },
                        value : null
                }
        };
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
                        def : {},
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
        WitherSkull = {
        __proto__ : Object.create( Projectile ),
                direction : {
                name : "direction",
                        description : " List of 3 doubles. Should be identical to Motion.",
                        type : "list",
                        def : {
                        dX : {
                        name : null,
                                description : "X velocity of the entity in meters per tick.",
                                type : "double",
                                def : 0.0,
                                value : null
                        },
                                dY : {
                                name : null,
                                        description : "Y velocity of the entity in meters per tick.",
                                        type : "double",
                                        def : 0.0,
                                        value : null
                                },
                                dZ : {
                                name : null,
                                        description : "Z velocity of the entity in meters per tick.",
                                        type : "double",
                                        def : 0.0,
                                        value : null
                                }
                        },
                        value : null
                }
        };
//Items
        ItemDrop = {
        __proto__ : Object.create( Drop ),
                item : {
                name : "Item",
                        description : "The inventory item, without the Slot tag.",
                        type : "compound",
                        def : {},
                        value : null
                }
        };
        XPOrb = {
        __proto__ : Object.create( Drop ),
                value : {
                name : "Value",
                        description : "The amount of experience the orb gives when picked up.",
                        type : "short",
                        def : 0,
                        value : null
                }
        };
//Vehicles
        Boat = {
        __proto__ : Object.create( Entity )
        };
        MinecartRideable = {
        __proto__ : Object.create( Minecart )
        };
        MinecartChest = {
        __proto__ : Object.create( Minecart ),
                items : {
                name : "Items",
                        description : "List of items.",
                        type : "list",
                        def : {},
                        value : null
                }
        };
        MinecartFurnace = {
        __proto__ : Object.create( Minecart ),
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
        __proto__ : Object.create( Minecart ),
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
                        description : "Overrides the maximum number of nearby (within a box of spawnrange*2+1 x spawnrange*2+1 x 8 centered around the spawner block) entities whose IDs match this spawner\"s entity ID. Note that this is relative to a mob\'s hitbox, not their physical position. Also note that all entities within all chunk sections (16x16x16 cubes) overlapped by this box are tested for their ID and hitbox overlap, rather than just entities which are within the box, meaning a large amount of entities outside the box (or within it, of course) can cause substantial lag.",
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
        __proto__ : Object.create( Minecart ),
                tntFuse : {
                name : "TNTFuse",
                        description : "Time until explosion or -1 if deactivated.",
                        type : "int",
                        def : - 1,
                        value : null
                }
        };
        MinecartHopper = {
        __proto__ : Object.create( Minecart ),
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
        __proto__ : Object.create( Minecart ),
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
//Dynamic Tiles
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
                        def : {},
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
                        description : "The number of ticks the entity has existed. If set to 0, the moment it ticks to 1, it will vanish if the block at its location has a different ID than the entitys TileID. If the block at its location has the same ID as its TileID when Time ticks from 0 to 1, the block will instead be deleted, and the entity will continue to fall, having overwritten it. (This was the result of Mojangs failed attempt to "fix" infinite sand/gravel/dragon egg/anvil/etc. generators by trying to have the falling sand entity delete the duplicated block the next tick) When Time goes above 600, or above 100 while the block is below Y=0, the entity is deleted.", //entity " s Mojang " s
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
//Tile Entity Format
        Airportal = {
        __proto__ : Object.create( TileEntity )
        };
        Beacon = {
        __proto__ : Object.create( TileEntity ),
                levels : {
                name : "Levels",
                        description : "The number of levels available from the pyramid.",
                        type : "int",
                        def : 0,
                        value : null
                },
                primary : {
                name : "Primary",
                        description : "The primary power selected, see Potion effects for IDs. 0 means none.",
                        type : "int",
                        def : 0,
                        value : null
                },
                secondary : {
                name : "Secondary",
                        description : "The secondary power selected, see Potion effects for IDs. 0 means none.",
                        type : "int",
                        def : 0,
                        value : null
                }
        };
        Cauldron = {
        __proto__ : Object.create( TileEntity ),
                customName : {
                name : "CustomName",
                        description : "Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual \"@\" when using commands such as \"say\" and \"tell\".",
                        type : "string",
                        def : null,
                        value : null
                },
                items : {
                name : "Items",
                        description : "List of items in the brewing stand.",
                        type : "list",
                        def : {},
                        value : null
                },
                brewTime : {
                name : "BrewTime",
                        description : "The number of ticks the potions have been brewing for.",
                        type : "int",
                        def : 0,
                        value : null
                }
        };
        Chest = {
        __proto__ : Object.create( TileEntity ),
                customName : {
                name : "CustomName",
                        description : "Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual \"@\" when using commands such as \"say\" and \"tell\".",
                        type : "string",
                        def : null,
                        value : null
                },
                items : {
                name : "Items",
                        description : "List of items in the brewing stand.",
                        type : "compound",
                        def : {},
                        value : null
                }
        };
        Comparator = {
        __proto__ : Object.create( TileEntity ),
                outputSignal : {
                name : "OutputSignal",
                        description : " Represents the strength of the analog signal output by this redstone comparator. Likely used because the block itself uses its four bits of metadata to determine its rotation, powered state, and subtraction mode state, and comparators can hold a specific amount of power even in circuits without redstone wire.",
                        type : "int",
                        def : 0,
                        value : null
                }
        };
        Control = {
        __proto__ : Object.create( TileEntity ),
                customName : {
                name : "CustomName",
                        description : "Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual \"@\" when using commands such as \"say\" and \"tell\".",
                        type : "string",
                        def : null,
                        value : null
                },
                command : {
                name : "Command",
                        description : "The command to issue to the server.",
                        type : "string",
                        def : 0,
                        value : null
                },
                successCount : {
                name : "SuccessCount",
                        description : "Represents the strength of the analog signal output by redstone comparators attached to this command block. Only updated when the command block is activated with a redstone signal.",
                        type : "int",
                        def : 0,
                        value : null
                }
        };
        DLDetector = {
        __proto__ : Object.create( TileEntity ),
        };
        Dropper = {
        __proto__ : Object.create( TileEntity ),
                customName : {
                name : "CustomName",
                        description : "Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual \"@\" when using commands such as \"say\" and \"tell\".",
                        type : "string",
                        def : null,
                        value : null
                },
                items : {
                name : "Items",
                        description : "List of items in the dispenser",
                        type : "compound",
                        def : {},
                        value : null
                }
        };
        EnchantTable = {
        __proto__ : Object.create( TileEntity ),
                customName : {
                name : "CustomName",
                        description : "Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual \"@\" when using commands such as \"say\" and \"tell\".",
                        type : "string",
                        def : null,
                        value : null
                }
        };
        EnderChest = {
        __proto__ : Object.create( TileEntity )
        };
        Furnace = {
        __proto__ : Object.create( TileEntity ),
                customName : {
                name : "CustomName",
                        description : "Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual \"@\" when using commands such as \"say\" and \"tell\".",
                        type : "string",
                        def : null,
                        value : null
                },
                burnTime : {
                name : "BurnTime",
                        description : "Number of ticks left before the current fuel runs out.",
                        type : "short",
                        def : 0,
                        value : null
                },
                cookTime : {
                name : "CookTime",
                        description : "Number of ticks the item has been smelting for. The item finishes smelting when this value reaches 200 (10 seconds). Is reset to 0 if BurnTime reaches 0.",
                        type : "short",
                        def : 0,
                        value : null
                },
                items : {
                name : "Items",
                        description : "List of items in the furnace slots.",
                        type : "list",
                        def : {},
                        value : null
                }
        };
        Hopper = {
        __proto__ : Object.create( TileEntity ),
                customName : {
                name : "CustomName",
                        description : "Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual \"@\" when using commands such as \"say\" and \"tell\".",
                        type : "string",
                        def : null,
                        value : null
                },
                items : {
                name : "Items",
                        description : "List of items in the hopper slots.",
                        type : "list",
                        expected : "Item", //This needs to be an item!
                        def : {},
                        value : null
                },
                transferCooldown : {
                name : "TransferCooldown",
                        description : "Time unil the next transfer, naturaly between 1 and 8 or 0 if there is no transfer.",
                        type : "int",
                        def : 0,
                        value : null
                }
        };
        MobSpawner = {
        __proto__ : Object.create( TileEntity ),
                spawnPotentials : {
                name : "SpawnPotentials",
                        description : "Optional. List of possible entities to spawn. If this tag does not exist, but SpawnData exists, Minecraft will generate it the next time the spawner tries to spawn an entity. The generated list will contain a single entry derived from the EntityId and SpawnData tags.",
                        type : "list",
                        expected : "Entity",
                        def : {},
                        value : null
                },
                entityId : {
                name : "EntityId",
                        description : "The Entity ID of the next entity(s) to spawn. Both Mob Entity IDs and other Entity IDs will work. Warning: If SpawnPotentials exists, this tag will get overwritten after the next spawning attempt: see above for more details.",
                        type : "string",
                        def : "",
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
                        def : 200, //[NOTE] verify
                        value : null
                },
                maxSpawnDelay : {
                name : "MaxSpawnDelay",
                        description : "The maximum random delay for the next spawn delay. Warning: Setting this value to 0 crashes Minecraft. Set to at least 1.",
                        type : "short",
                        def : 600, //[Note] verify
                        value : null
                },
                maxNearbyEntities : {
                name : "MaxNearbyEntities",
                        description : "Overrides the maximum number of nearby (within a box of spawnrange*2+1 x spawnrange*2+1 x 8 centered around the spawner block) entities whose IDs match this spawner\"s entity ID. Note that this is relative to a mob\'s hitbox, not their physical position. Also note that all entities within all chunk sections (16x16x16 cubes) overlapped by this box are tested for their ID and hitbox overlap, rather than just entities which are within the box, meaning a large amount of entities outside the box (or within it, of course) can cause substantial lag.",
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
        Music = {
        __proto__ : Object.create( TileEntity ),
                note : {
                name : "note",
                        description : "Pitch (number of right-clicks).",
                        type : "byte",
                        def : 0,
                        value : null
                }
        };
        Piston = {
        __proto__ : Object.create( TileEntity ),
                blockId : {
                name : "blockid",
                        description : "Block_IDs of the block being moved.",
                        type : "int",
                        def : null,
                        value : null
                },
                blockData : {
                name : "blockData",
                        description : " Data value of the block being moved.",
                        type : "int",
                        def : null,
                        value : null
                },
                facing : {
                name : "facing",
                        description : "Direction in which the block will be pushed.",
                        type : "byte",
                        def : 0,
                        value : null
                },
                progress : {
                name : "progress",
                        description : "How far the block has been moved.",
                        type : "float",
                        def : 0.0,
                        value : null
                },
                extending : {
                name : "extending",
                        description : "1 or 0 (true/false) - true if the block is being pushed.",
                        type : "byte",
                        def : 0,
                        value : null
                }
        };
        RecordPlayer = {
        __proto__ : Object.create( TileEntity ),
                record : {
                name : "Record",
                        description : " Record currently playing. 0 is no record. Otherwise, it is the item ID of the record (e.g. 2261 for the "mall" record). Other IDs can be used to make other items or blocks pop out with a data value of 0. This is always overridden by the ID in RecordItem.",
                        type : "int",
                        def : 0,
                        value : null
                },
                recordItem : {
                name : "RecordItem",
                        description : "1 or 0 (true/false) - true if the block is being pushed.",
                        type : "compound",
                        def : {},
                        value : null
                }
        };
        Sign = {
        __proto__ : Object.create( TileEntity ),
                text1 : {
                name : "Text1",
                        description : "First row of text.",
                        type : "string",
                        def : null,
                        value : null
                },
                text2 : {
                name : "Text2",
                        description : "Second row of text.",
                        type : "string",
                        def : null,
                        value : null
                },
                text3 : {
                name : "Text3",
                        description : "Thrid row of text.",
                        type : "string",
                        def : null,
                        value : null
                },
                text4 : {
                name : "Text4",
                        description : "Fourth row of text.",
                        type : "string",
                        def : null,
                        value : null
                }
        };
        Skull = {
        __proto__ : Object.create( TileEntity ),
                skullType : {
                name : "SkullType",
                        description : "The type of the skull, similar to the Item IDs.",
                        type : "byte",
                        def : 0,
                        value : null
                },
                extraType : {
                name : "ExtraType",
                        description : "Name of the player this is a skull of.",
                        type : "string",
                        def : null,
                        value : null
                },
                rot : {
                name : "Rot",
                        description : "The orientation, similar to signs.",
                        type : "byte",
                        def : 0,
                        value : null
                }
        };
        Trap = {
        __proto__ : Object.create( TileEntity ),
                customName : {
                name : "CustomName",
                        description : "Optional. The name of this container, which will display in its GUI where the default name ordinarily is. For Command Blocks, the name will replace the usual \"@\" when using commands such as \"say\" and \"tell\".",
                        type : "string",
                        def : null,
                        value : null
                },
                items : {
                name : "Items",
                        description : "List of items in the dispenser",
                        type : "compound",
                        def : {},
                        value : null
                }
        };
//Other
        EnderCrystal = {
        __proto__ : Object.create( Entity )
        };
        EyeOfEnderSignal = {
        __proto__ : Object.create( Entity )
        };
        FireworksRocketEntity = {
        __proto__ : Object.create( Entity ),
                life : {
                name : "Life",
                        description : "The number of ticks this fireworks rocket has been flying for.",
                        type : "int",
                        def : 0,
                        value : null
                },
                lifeTime : {
                name : "LifeTime",
                        description : "The number of ticks before this fireworks rocket explodes. This value is randomized when the firework is launched: ((Flight + 1) * 10 + random(0 to 5) + random(0 to 6))",
                        type : "int",
                        def : 25,
                        value : null
                },
                fireworksItem : {
                name : "FireworksItem",
                        description : "The crafted Firework Rocket item.",
                        type : "compound",
                        def : {},
                        value : null
                }
        };
        ItemFrame = {
        __proto__ : Object.create( Entity ),
                tileX : {
                name : "TileX",
                        description : "The X coordinate of the block the painting is placed on.",
                        type : "int",
                        def : null,
                        value : null
                },
                tileY : {
                name : "TileY",
                        description : "The Y coordinate of the block the painting is placed on.",
                        type : "int",
                        def : null,
                        value : null
                },
                tileZ : {
                name : "TileZ",
                        description : "The Z coordinate of the block the painting is placed on.",
                        type : "int",
                        def : null,
                        value : null
                },
                direction : {
                name : "Direction",
                        description : "Direction the painting faces: 0 is south, 1 is west, 2 is north, and 3 is east.",
                        type : "int",
                        def : 0,
                        value : null
                },
                dir : {
                name : "Dir",
                        description : "Same as Direction, except the meaning of values 2 and 0 are swapped. Ignored if Direction is present.",
                        type : "byte",
                        def : 0,
                        value : null
                },
                item : {
                name : "Item",
                        description : "The item, without the slot tag. If the item frame is empty, this tag does not exist.",
                        type : "compound",
                        def : {},
                        value : null
                },
                itemDropChance : {
                name : "ItemDropChance",
                        description : "The chance the item will drop when the item frame breaks. 1.0 by default.",
                        type : "float",
                        def : 1.0,
                        value : null
                },
                itemRotation : {
                name : "ItemRotation",
                        description : "The number of times the item has been rotated 90 degrees clockwise.",
                        type : "byte",
                        def : 0,
                        value : null
                }
        };
        LeashKnot = {
        __proto__ : Object.create( Entity )
        };
        Painting = {
        __proto__ : Object.create( Entity ),
                tileX : {
                name : "TileX",
                        description : "The X coordinate of the block the painting is placed on.",
                        type : "int",
                        def : 0,
                        value : null
                },
                tileY : {
                name : "TileY",
                        description : "The Y coordinate of the block the painting is placed on.",
                        type : "int",
                        def : null,
                        value : null
                },
                tileZ : {
                name : "TileZ",
                        description : "The Z coordinate of the block the painting is placed on.",
                        type : "int",
                        def : null,
                        value : null
                },
                direction : {
                name : "Direction",
                        description : "Direction the painting faces: 0 is south, 1 is west, 2 is north, and 3 is east.",
                        type : "int",
                        def : null,
                        value : null
                },
                dir : {
                name : "Dir",
                        description : "Same as Direction, except the meaning of values 2 and 0 are swapped. Ignored if Direction is present.",
                        type : "byte",
                        def : 0,
                        value : null
                },
                motive : {
                name : "Motive",
                        description : "The name of this Painting\"s art.",
                        type : "string",
                        def : null,
                        value : null
                }
        };
