ServerEvents.recipes(e => {

    e.remove({id:"starbunclemania:fluid/source_reverse"});
    e.custom({
        "type": "starbunclemania:fluid_sourcelink",
        "fluid": "starbunclemania:source_fluid",
        "mb_to_source_ratio": 1
    });
    e.custom({
        "type": "starbunclemania:fluid_sourcelink",
        "fluid": "kubejs:condensed_source_fluid",
        "mb_to_source_ratio": 3
    });

    //Adds a hopper recipe that's similar to the pipe recipe.
    e.remove({output: "minecraft:hopper"});
    e.shaped(
        "minecraft:hopper", 
        [// arg 1: output
            ' A ',
            ' B ',
            ' A '
        ], 
        {
            A: "create:iron_sheet", 
            B: "#c:chests/wooden",
        }
    );

    //Makes warp dust able to be crushed.
    e.remove({output: "waystones:warp_dust"});
    e.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "waystones:warp_stone"
            }
        ],
        "results": [
            {
                "count": 4,
                "id": "waystones:warp_dust"
            }
        ]
    });

    //Drawer controllers are slightly easier to craft.
    e.replaceInput({mod: "storagedrawers"}, "minecraft:comparator", "minecraft:redstone");

    //Blaze burners now require a fire essence. The purpose of this is to stop you from progressing any further until you've at least gotten started on Ars Nouveau.
    /*
    e.remove({output: "create:empty_blaze_burner"});
    e.shaped(
        "create:empty_blaze_burner", 
        [// arg 1: output
            ' C ',
            'ABA',
            ' A '
        ], 
        {
            A: "create:iron_sheet", 
            B: "minecraft:netherrack",
            C: "ars_nouveau:fire_essence"
        }
    );
    */

    //Washing crushed silver now properly gives you a byproduct.
    e.remove({id:"create:splashing/iceandfire/crushed_raw_silver"});
    e.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "create:crushed_raw_silver"
            }
        ],
        "results": [
            {
                "count": 9,
                "id": "iceandfire:silver_nugget"
            },
            {
                "chance": 0.75,
                "id": "minecraft:amethyst_shard"
            },
        ]
    });

    //Some cookie recipes!
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "type": "fluid_stack",
                "amount": 250,
                "fluid": "create:honey"
            },
            {
                "item": "create:dough"
            }
        ],
        "results": [
            {
                "count": 16,
                "id": "farmersdelight:honey_cookie"
            }
        ]
    });
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "type": "fluid_stack",
                "amount": 250,
                "fluid": "create:chocolate"
            },
            {
                "item": "create:dough"
            }
        ],
        "results": [
            {
                "count": 16,
                "id": "minecraft:cookie"
            }
        ]
    });
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "type": "fluid_stack",
                "amount": 250,
                "fluid": "starbunclemania:source_fluid"
            },
            {
                "item": "create:dough"
            }
        ],
        "results": [
            {
                "count": 16,
                "id": "arsdelight:source_berry_cookie"
            }
        ]
    });
    e.shapeless("12x minecraft:cookie", [ // arg 1: output
        "create:dough",
        "minecraft:cocoa_beans",
    ]);
    e.shapeless("12x farmersdelight:sweet_berry_cookie", [ // arg 1: output
        "create:dough",
        "minecraft:sweet_berries",
    ]);
    e.shapeless("12x farmersdelight:honey_cookie", [ // arg 1: output
        "create:dough",
        "minecraft:honey_bottle",
    ]);
    e.shapeless("12x arsdelight:source_berry_cookie", [ // arg 1: output
        "create:dough",
        "ars_nouveau:sourceberry_bush",
    ]);

    //Can craft between supplementaries ash and ice and fire's ash blocks.
    e.shapeless("4x supplementaries:ash", [ // arg 1: output
        "iceandfire:ash",
    ]);
    e.shaped(
        "iceandfire:ash", 
        [// arg 1: output
            'AA',
            'AA',
        ], 
        {
            A: "supplementaries:ash"
        }
    );

    //Lets Create XP nuggets and Ars Nouveau XP gems be used interchangeably.
    e.shapeless("ars_nouveau:greater_experience_gem", [
        "4x create:experience_nugget",
    ]);
    e.shapeless("create:experience_block", [
        "9x ars_nouveau:experience_gem",
    ]);

    //Precision mechanism is now a guarantee to be crafted successfully.
    e.remove({output:"create:precision_mechanism"});
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "c:plates/gold"
        },
        "loops": 5,
        "results": [
            {
            "id": "create:precision_mechanism"
            }
        ],
        "sequence": [
            {
            "type": "create:deploying",
            "ingredients": [
                {
                "item": "create:incomplete_precision_mechanism"
                },
                {
                "item": "create:cogwheel"
                }
            ],
            "results": [
                {
                "id": "create:incomplete_precision_mechanism"
                }
            ]
            },
            {
            "type": "create:deploying",
            "ingredients": [
                {
                "item": "create:incomplete_precision_mechanism"
                },
                {
                "item": "create:large_cogwheel"
                }
            ],
            "results": [
                {
                "id": "create:incomplete_precision_mechanism"
                }
            ]
            },
            {
            "type": "create:deploying",
            "ingredients": [
                {
                "item": "create:incomplete_precision_mechanism"
                },
                {
                "tag": "c:nuggets/iron"
                }
            ],
            "results": [
                {
                "id": "create:incomplete_precision_mechanism"
                }
            ]
            }
        ],
        "transitional_item": {
            "id": "create:incomplete_precision_mechanism"
        }
    });

    //You can now get refined radiance and shadowsteel.
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "tag": "c:dusts/obsidian"
        },
        {
            "tag": "c:dusts/obsidian"
        },
        ],
        "reagent": {
        "item": "create:andesite_alloy"
        },
        "result": {
        "count": 1,
        "id": "create:shadow_steel"
        },
        "sourceCost": 0
    });
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "supplementaries:lumisene_bottle"
        },
        {
            "item": "supplementaries:lumisene_bottle"
        },
        ],
        "reagent": {
        "item": "create:andesite_alloy"
        },
        "result": {
        "count": 1,
        "id": "create:refined_radiance"
        },
        "sourceCost": 0
    });
    e.custom({
        "type": "create:item_application",
        "ingredients": [
            {
            "tag": "c:stripped_logs"
            },
            {
            "item": "create:refined_radiance"
            }
        ],
        "results": [
            {
            "id": "create:refined_radiance_casing"
            }
        ]
    });
    e.custom({
        "type": "create:item_application",
        "ingredients": [
            {
            "tag": "c:stripped_logs"
            },
            {
            "item": "create:shadow_steel"
            }
        ],
        "results": [
            {
            "id": "create:shadow_steel_casing"
            }
        ]
    });
    e.custom({
        "type": "create:item_application",
        "ingredients": [
            {
            "tag": "c:stripped_wood"
            },
            {
            "item": "create:refined_radiance"
            }
        ],
        "results": [
            {
            "id": "create:refined_radiance_casing"
            }
        ]
    });
    e.custom({
        "type": "create:item_application",
        "ingredients": [
            {
            "tag": "c:stripped_wood"
            },
            {
            "item": "create:shadow_steel"
            }
        ],
        "results": [
            {
            "id": "create:shadow_steel_casing"
            }
        ]
    });

    //You now get 4 times as many chains from the relevant crafting recipes.
    e.remove({output:"minecraft:chain"});
    e.remove({id:"ars_additions:crafting/chains/archwood_chain"});
    e.remove({id:"ars_additions:crafting/chains/sourcestone_chain"});
    e.remove({id:"ars_additions:crafting/chains/golden_chain"});
    e.shaped(
        "4x minecraft:chain", 
        [// arg 1: output
            'A',
            'B',
            'A'
        ], 
        {
            A: "#c:nuggets/iron",
            B: "#c:ingots/iron",
        }
    );
    e.shaped(
        "4x minecraft:chain", 
        [// arg 1: output
            'A',
            'B',
            'A'
        ], 
        {
            A: "#c:nuggets/zinc",
            B: "#c:ingots/zinc",
        }
    );
    e.shaped(
        "4x ars_additions:archwood_chain", 
        [// arg 1: output
            'A',
            'B',
            'A'
        ], 
        {
            A: "#c:nuggets/iron",
            B: "#c:planks/archwood",
        }
    );
    e.shaped(
        "4x ars_additions:sourcestone_chain", 
        [// arg 1: output
            'A',
            'B',
            'A'
        ], 
        {
            A: "#c:nuggets/iron",
            B: "ars_nouveau:sourcestone",
        }
    );
    e.shaped(
        "4x ars_additions:golden_chain", 
        [// arg 1: output
            'A',
            'B',
            'A'
        ], 
        {
            A: "#c:nuggets/gold",
            B: "#c:ingots/gold",
        }
    );

    //Chorium is simplified since it's just used for cosmetics anyway.
    e.remove({output: "createcasing:chorium_ingot"});
    e.shapeless("createcasing:chorium_ingot", ["create:polished_rose_quartz", "minecraft:popped_chorus_fruit"]);

    //Wand of Symmetry takes refined radiance.
    e.remove({output: "create:wand_of_symmetry"})
    e.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": {
                "tag": "c:glass_blocks"
            },
            "B": {
                "tag": "c:ingots/brass"
            },
            "C": {
                "item": "create:refined_radiance"
            },
            "D": {
                "tag": "c:obsidians"
            },
        },
        "pattern": [
            " A ",
            "ACA",
            " B ",
            " B ",
            " D "

        ],
        "result": {
            "count": 1,
            "id": "create:wand_of_symmetry"
        }
    });

    //Tweaks some charms to take void essence
    e.remove({output:"ars_additions:void_protection_charm"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:void_essence" },
        { "tag": "c:ender_pearls" },

        ],
        "reagent": {
        "item": "minecraft:glass_bottle"
        },
        "result": {
        "count": 1,
        "id": "ars_additions:void_protection_charm"
        },
        "sourceCost": 0
    });
    e.remove({output:"ars_additions:sonic_boom_protection_charm"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "minecraft:sculk" },
        { "item": "kubejs:void_essence" },
        { "tag": "minecraft:wool" },

        ],
        "reagent": {
        "item": "minecraft:glass_bottle"
        },
        "result": {
        "count": 1,
        "id": "ars_additions:sonic_boom_protection_charm"
        },
        "sourceCost": 0
    });

    //Spell turrets and source relays now take golden sheets instead.
    /*
    e.remove({id:"ars_nouveau:basic_spell_turret"});
    e.shaped(
        "ars_nouveau:basic_spell_turret", 
        [// arg 1: output
            'AB ',
            'ACB',
            'AB '
        ], 
        {
            A: "#c:gems/source",
            B: "#c:plates/gold",
            C: "#c:storage_blocks/redstone",
        }
    );
    e.remove({id:"ars_nouveau:relay"});
    e.shaped(
        "ars_nouveau:relay", 
        [// arg 1: output
            'A A',
            'ABA',
            'A A'
        ], 
        {
            A: "#c:plates/gold",
            B: "#c:storage_blocks/source",
        }
    );
    */
});

