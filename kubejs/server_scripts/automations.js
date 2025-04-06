ServerEvents.recipes(e => {
    let conversion = (type, ingredient, result, isTag) => {
        e.custom({
            "type": "create:mixing",
            "ingredients": [
                {
                    "tag": isTag ? ingredient : null,
                    "item": isTag ? null : ingredient
                },
                {
                    "tag": isTag ? ingredient : null,
                    "item": isTag ? null : ingredient
                },
                {
                    "type": "fluid_stack",
                    "amount": 50,
                    "fluid": "kubejs:" + type + "_essence_fluid"
                }
            ],
            "results": [
                {
                    "count": 2,
                    "id": result
                }
            ]
        });
    };
    let shapedconversion = (type, ingredient, result) => {
            e.shaped("8x " + result, [// arg 1: output
                'AAA', 
                'ABA', // arg 2: the shape (array of strings)
                'AAA'  
            ], {
                A: ingredient, 
                B: "ars_nouveau:" + type + "_essence",
            }
        );
    }
    //This script adds new recipes to facilitate automation of certain items.

    //Glowstone Dust
    e.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "minecraft:glow_berries"
            },
        ],
        "results": [
            {
                "count": 4,
                "id": "minecraft:glowstone_dust"
            },
        ]
    });

    //Lumisene
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:glow_berries"
            },
            {
                "item": "minecraft:glow_berries"
            },
            {
                "item": "minecraft:glow_berries"
            },
            {
                "item": "minecraft:glow_berries"
            },
        ],
        "results": [
            {
                "amount": 500,
                "id": "supplementaries:lumisene"
            },
        ]
    });
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": "minecraft:glass_bottle"
            },
            {
            "type": "fluid_stack",
            "amount": 250,
            "fluid": "supplementaries:lumisene"
            }
        ],
        "results": [
            {
            "id": "supplementaries:lumisene_bottle"
            }
        ]
    });
    e.custom({
        "type": "create:emptying",
        "ingredients": [
            {
            "item": "supplementaries:lumisene_bottle"
            },
        ],
        "results": [
            {
            "amount": 250,
            "id": "supplementaries:lumisene"
            },
            {
            "id": "minecraft:glass_bottle"
            },
        ]
    });
    e.custom({
        "type": "create:emptying",
        "ingredients": [
            {
            "item": "supplementaries:lumisene_bucket"
            },
        ],
        "results": [
            {
            "amount": 1000,
            "id": "supplementaries:lumisene"
            },
            {
            "id": "minecraft:bucket"
            },
        ]
    });

    //Liquid Source
    e.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "ars_nouveau:sourceberry_bush"
            }
        ],
        "results": [
            {
                "amount": 50,
                "id": "starbunclemania:source_fluid"
            }
        ]
    });

    //Source Gems
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "c:gems/amethyst"
            },
            {
                "type": "fluid_stack",
                "amount": 500,
                "fluid": "starbunclemania:source_fluid"
            }
        ],
        "results": [
            {
                "id": "ars_nouveau:source_gem"
            }
        ]
    });
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "c:gems/lapis"
            },
            {
                "type": "fluid_stack",
                "amount": 500,
                "fluid": "starbunclemania:source_fluid"
            }
        ],
        "results": [
            {
                "id": "ars_nouveau:source_gem"
            }
        ]
    });

    //Regalium Crystals
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
            "item": "undergarden:utherium_crystal"
            },
            {
            "tag": "c:ingots/gold"
            },
            {
            "type": "fluid_stack",
            "amount": 1000,
            "fluid": "kubejs:conjuration_essence_fluid"
            }
        ],
        "results": [
            {
            "id": "undergarden:regalium_crystal"
            }
        ]
    });

    //Combine nether quartz with prismarine crystals for a prismarine shard.
    e.shapeless("minecraft:prismarine_shard",
        ["2x #c:gems/prismarine", "#c:gems/quartz"]
    );

    //Blast saplings for ash
    e.blasting("supplementaries:ash", "#minecraft:saplings");

    //Silver from crushing Scorchia
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "create:scorchia"
            }
        ],
        "processingTime": 250,
        "results": [
            {
            "chance": 0.4,
            "id": "create:crushed_raw_silver"
            },
            {
            "chance": 0.4,
            "id": "iceandfire:silver_nugget"
            }
        ]
    });
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "tag": "create:stone_types/scorchia"
            }
        ],
        "processingTime": 250,
        "results": [
            {
            "chance": 0.4,
            "id": "create:crushed_raw_silver"
            },
            {
            "chance": 0.4,
            "id": "iceandfire:silver_nugget"
            }
        ]
    })

    //Get calcite from bonemeal and amethyst
    e.shapeless("minecraft:calcite", [ // arg 1: output
        "2x minecraft:quartz",
        "2x minecraft:bone_meal",
    ]);

    //Get lapis lazuli from limestone by crushing
    //Disabling this one because it's too easy to do.
    /*
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "create:limestone"
            }
        ],
        "processingTime": 250,
        "results": [
            {
            "id": "minecraft:bone_meal"
            },
            {
            "chance": 0.5,
            "id": "minecraft:bone_meal"
            },
            {
            "chance": 0.5,
            "id": "minecraft:lapis_lazuli"
            }
        ]
    })
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "tag": "create:stone_types/limestone"
            }
        ],
        "processingTime": 250,
        "results": [
            {
            "id": "minecraft:bone_meal"
            },
            {
            "chance": 0.5,
            "id": "minecraft:bone_meal"
            },
            {
            "chance": 0.5,
            "id": "minecraft:lapis_lazuli"
            }
        ]
    })
    */
    //Lapis lazuli from conjuration essence
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": "minecraft:stone"
            },
            {
            "type": "fluid_stack",
            "amount": 500,
            "fluid": "kubejs:conjuration_essence_fluid"
            }
        ],
        "results": [
            {
            "id": "minecraft:lapis_ore"
            }
        ]
    });
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": "minecraft:deepslate"
            },
            {
            "type": "fluid_stack",
            "amount": 500,
            "fluid": "kubejs:conjuration_essence_fluid"
            }
        ],
        "results": [
            {
            "id": "minecraft:deepslate_lapis_ore"
            }
        ]
    });

    //Wither skulls from anima essence.
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "iceandfire:witherbone"
        },
        {
            "item": "iceandfire:witherbone"
        },
        {
            "item": "ars_elemental:anima_essence"
        }
        ],
        "reagent": {
        "item": "minecraft:skeleton_skull"
        },
        "result": {
        "count": 1,
        "id": "minecraft:wither_skeleton_skull"
        },
        "sourceCost": 0
    });
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": "minecraft:bone"
            },
            {
            "type": "fluid_stack",
            "amount": 100,
            "fluid": "kubejs:anima_essence_fluid"
            }
        ],
        "results": [
            {
            "id": "iceandfire:witherbone"
            }
        ]
    });
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "tag": "minecraft:saplings"
            },
            {
            "type": "fluid_stack",
            "amount": 500,
            "fluid": "kubejs:anima_essence_fluid"
            }
        ],
        "results": [
            {
            "id": "minecraft:wither_rose"
            }
        ]
    });

    //BOP rose quartz into Create rose quartz
    e.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
            {
                "item": "biomesoplenty:rose_quartz_chunk"
            }
        ],
        "results": [
            {
                "id": "create:rose_quartz"
            }
        ]
    });

    //Crush BOP rose quartz blocks into rose quartz chunks, also adds another renewable source of redstone
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "biomesoplenty:rose_quartz_block"
            }
        ],
        "processingTime": 250,
        "results": [
            {
            "count": 4,
            "id": "biomesoplenty:rose_quartz_chunk"
            },
            {
            "chance": 0.5,
            "id": "minecraft:redstone"
            }
        ]
    })

    //Sourcestone
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "c:stones"
            },
            {
                "tag": "c:stones"
            },
            {
                "type": "fluid_stack",
                "amount": 75,
                "fluid": "starbunclemania:source_fluid"
            }
        ],
        "results": [
            {
                "count": 2,
                "id": "ars_nouveau:sourcestone"
            }
        ]
    });
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "c:stones"
            },
            {
                "tag": "c:stones"
            },
            {
                "type": "fluid_stack",
                "amount": 25,
                "fluid": "kubejs:condensed_source_fluid"
            }
        ],
        "results": [
            {
                "count": 2,
                "id": "ars_nouveau:sourcestone"
            }
        ]
    });

    //Source Bottle
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "type": "fluid_stack",
                "amount": 250,
                "fluid": "starbunclemania:source_fluid"
            }
        ],
        "results": [
            {
                "id": "kubejs:bottle_of_source"
            }
        ]
    });

    //Apotheosis Mats
    e.shaped("2x apotheosis:uncommon_material", [// arg 1: output
            ' A ', 
            'BCB', // arg 2: the shape (array of strings)
            ' A '  
        ], {
            A: "kubejs:instant", 
            B: "minecraft:glowstone_dust",
            C: "apotheosis:uncommon_material",
        }
    );
    e.shaped("2x apotheosis:rare_material", [// arg 1: output
            ' A ', 
            'BCB', // arg 2: the shape (array of strings)
            ' A '  
        ], {
            A: "kubejs:moment", 
            B: "#c:gems/amethyst", 
            C: "apotheosis:rare_material",
        }
    );
    e.shaped("2x apotheosis:epic_material", [// arg 1: output
            ' A ', 
            'BCB', // arg 2: the shape (array of strings)
            ' A '  
        ], {
            A: "kubejs:epoch", 
            B: "minecraft:suspicious_sand", 
            C: "apotheosis:epic_material",
        }
    );
    e.shaped("2x apotheosis:mythic_material", [// arg 1: output
            ' A ', 
            'BCB', // arg 2: the shape (array of strings)
            ' A '  
        ], {
            A: "kubejs:eon", 
            B: "minecraft:ender_eye", 
            C: "apotheosis:mythic_material",
        }
    );

    //Manipulation Essence Conversions
    conversion("manipulation", "minecraft:diorite", "minecraft:granite", false);
    conversion("manipulation", "minecraft:andesite", "minecraft:diorite", false);
    conversion("manipulation", "minecraft:granite", "minecraft:andesite", false);
    conversion("manipulation", "minecraft:calcite", "minecraft:deepslate", false);
    conversion("manipulation", "minecraft:deepslate", "minecraft:tuff", false);
    conversion("manipulation", "minecraft:moss_block", "minecraft:grass_block", false);
    conversion("manipulation", "minecraft:grass_block", "minecraft:mycelium", false);
    conversion("manipulation", "minecraft:mycelium", "minecraft:moss_block", false);
    conversion("manipulation", "minecraft:tuff", "minecraft:calcite", false);
    conversion("manipulation", "ars_nouveau:magebloom_block", "ars_nouveau:sky_block", false);
    conversion("manipulation", "minecraft:sand", "minecraft:red_sand", false);
    conversion("manipulation", "minecraft:red_sand", "biomesoplenty:orange_sand", false);
    conversion("manipulation", "biomesoplenty:orange_sand", "biomesoplenty:white_sand", false);
    conversion("manipulation", "biomesoplenty:white_sand", "biomesoplenty:black_sand", false);
    conversion("manipulation", "biomesoplenty:black_sand", "minecraft:sand", false);
    shapedconversion("manipulation", "minecraft:sand", "minecraft:red_sand");
    shapedconversion("manipulation", "minecraft:red_sand", "biomesoplenty:orange_sand");
    shapedconversion("manipulation", "biomesoplenty:orange_sand", "biomesoplenty:white_sand");
    shapedconversion("manipulation", "biomesoplenty:white_sand", "biomesoplenty:black_sand");
    shapedconversion("manipulation", "biomesoplenty:black_sand", "minecraft:sand");

    //Conjuration Essence Conversions
    conversion("conjuration", "c:stones", "minecraft:end_stone", true);
    conversion("conjuration", "c:sands", "minecraft:soul_sand", true);
    conversion("conjuration", "minecraft:dirt", "minecraft:soul_soil", true);
    conversion("conjuration", "ars_nouveau:magebloom_block", "ars_nouveau:mirrorweave", false);

    shapedconversion("conjuration", "#minecraft:dirt", "minecraft:soul_soil");

    //Abjuration Essence Conversions
    conversion("abjuration", "ars_nouveau:magebloom_block", "ars_nouveau:ghostweave", false);

    //Doesn't work.
    /*
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:potion",
                "components": {
                    "minecraft:potion_contents": { "potion": "minecraft:water" }
                }
            },
            {
                "type": "fluid_stack",
                "amount": 100,
                "fluid": "kubejs:abjuration_essence_fluid"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "minecraft:potion",
                "components": {
                    "minecraft:potion_contents": { "potion": "minecraft:awkward" }
                }
            }
        ]
    })
    */

    //Fire Essence Conversions
    conversion("fire", "c:stones", "minecraft:magma_block", true);
    /*
    conversion("fire", "minecraft:grass_block", "iceandfire:chared_grass", false);
    conversion("fire", "iceandfire:chared_grass", "iceandfire:crackled_grass", false);
    shapedconversion("fire", "minecraft:grass_block", "iceandfire:chared_grass");
    shapedconversion("fire", "iceandfire:chared_grass", "iceandfire:crackled_grass");
    */
    //Get lava from superheating fire essence
    e.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item": "ars_nouveau:fire_essence"
            }
        ],
        "results": [
            {
                "amount": 1000,
                "id": "minecraft:lava"
            }
        ]
    });

    //Air Essence Conversions
    conversion("air", "ars_nouveau:magebloom_block", "ars_nouveau:falseweave", false);

    //Water Essence Conversions
    conversion("water", "minecraft:calcite", "create:limestone", false);
    shapedconversion("water", "minecraft:calcite", "create:limestone");
    conversion("water", "c:stones", "minecraft:dripstone_block", true);
    shapedconversion("water", "#c:stones", "minecraft:dripstone_block");
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "type": "fluid_stack",
                "amount": 1000,
                "fluid": "minecraft:lava"
            },
            {
                "type": "fluid_stack",
                "amount": 500,
                "fluid": "kubejs:water_essence_fluid"
            }
        ],
        "results": [
            {
                "id": "minecraft:obsidian"
            }
        ]
    });
    //Can drain water essence directly into water.
    e.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "ars_nouveau:water_essence"
            }
        ],
        "results": [
            {
                "amount": 1000,
                "id": "minecraft:water"
            },
            {
                "id": "minecraft:prismarine_crystals"
            }
        ]
    });

    //Earth Essence Conversions
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": "minecraft:dirt"
            },
            {
            "type": "fluid_stack",
            "amount": 100,
            "fluid": "kubejs:earth_essence_fluid"
            }
        ],
        "results": [
            {
            "id": "minecraft:grass_block"
            }
        ]
    });
});