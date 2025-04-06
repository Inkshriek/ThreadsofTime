ServerEvents.recipes(e => {

    //Instant
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
            "item": "ars_nouveau:magebloom_fiber"
            },
            {
            "tag": "c:sands"
            },
            {
            "tag": "c:sands"
            },
            {
            "type": "fluid_stack",
            "amount": 250,
            "fluid": "kubejs:manipulation_essence_fluid"
            }
        ],
        "results": [
            {
                "id": "kubejs:instant"
            }
        ]
    });
    e.shaped(
        "kubejs:instant", 
        [// arg 1: output
            ' C ',
            'BAB',
            ' B '
        ], 
        {
            A: "ars_nouveau:magebloom_fiber", 
            B: "#c:sands",
            C: "ars_nouveau:manipulation_essence",
        }
    );

    //Moment Assembly
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
            "item": "supplementaries:hourglass"
            },
            "loops": 1,
            "results": [
            {
                "id": "kubejs:moment"
            }
            ],
            "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_moment"
                },
                {
                    "item": "kubejs:instant"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_moment"
                }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_moment"
                },
                {
                    "item": "kubejs:instant"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_moment"
                }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                    "item": "kubejs:incomplete_moment"
                    },
                    {
                    "type": "fluid_stack",
                    "amount": 500,
                    "fluid": "supplementaries:lumisene"
                    }
                ],
                "results": [
                    {
                    "id": "kubejs:incomplete_moment"
                    }
                ]
            },
            /*
            {
                "type": "create:pressing",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_moment"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_moment"
                }
                ]
            }
            */
            ],
            "transitional_item": {
            "id": "kubejs:incomplete_moment"
            }
        }
    );
    //Energized/Condensed Source
    /*
    e.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "type": "fluid_stack",
                "amount": 250,
                "fluid": "kubejs:condensed_source_fluid"
            },
        ],
        "results": [
            {
                "id": "kubejs:energized_source"
            }
        ]
    });
    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "kubejs:energized_source"
            }

        ],
        "results": [
            {
                "amount": 250,
                "id": "kubejs:condensed_source_fluid"
            }
        ]
    });
    */
    e.custom({
        "type": "create:compacting",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "type": "fluid_stack",
                "amount": 500,
                "fluid": "kubejs:abjuration_essence_fluid"
            },
            {
                "type": "fluid_stack",
                "amount": 500,
                "fluid": "starbunclemania:source_fluid"
            },
            {
                "tag": "c:gems/amethyst",
            },
            {
                "tag": "c:gems/amethyst",
            },
            {
                "tag": "c:gems/amethyst",
            },
            {
                "tag": "c:gems/amethyst",
            },

        ],
        "results": [
            {
                "amount": 250,
                "id": "kubejs:condensed_source_fluid"
            }
        ]
    });

    //Timelost Sapling
    e.shapeless("kubejs:dusty_sapling", [ // arg 1: output
        "4x supplementaries:ash", "#kubejs:archwood_sapling"
    ]);
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {
            "item": "kubejs:dusty_sapling"
            },
            {
            "type": "fluid_stack",
            "amount": 500,
            "fluid": "kubejs:abjuration_essence_fluid"
            }
        ],
        "results": [
            {
            "id": "kubejs:timelost_sapling"
            }
        ]
    });

    //Epoch Assembly
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
            "item": "kubejs:moment"
            },
            "loops": 1,
            "results": [
            {
                "id": "kubejs:epoch"
            }
            ],
            "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_epoch"
                },
                {
                    "item": "kubejs:timelost_sapling"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_epoch"
                }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_epoch"
                },
                {
                    "item": "kubejs:timelost_sapling"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_epoch"
                }
                ]
            },
            /*
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_epoch"
                },
                {
                    "tag": "c:dusts/obsidian"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_epoch"
                }
                ]
            },
            */
            {
                "type": "create:filling",
                "ingredients": [
                    {
                    "item": "kubejs:incomplete_epoch"
                    },
                    {
                    "type": "fluid_stack",
                    "amount": 1000,
                    "fluid": "starbunclemania:source_fluid"
                    }
                ],
                "results": [
                    {
                    "id": "kubejs:incomplete_epoch"
                    }
                ]
            },
            ],
            "transitional_item": {
            "id": "kubejs:incomplete_epoch"
            }
        }
    );

    //Untold Experiences
    e.custom(
    {
        "type": "ars_nouveau:imbuement",
        "input": {
            "item": "minecraft:book"
        },
        "output": {
            "count": 1,
            "id": "kubejs:untold_experiences"
        },
        "pedestalItems": [
            {
                "item": "undergarden:forgotten_ingot"
            },
            {
                "item": "apotheosis:mythic_material"
            },
            {
                "item": "minecraft:nether_star"
            }
        ],
        "source": 10000
    });
    //Fascinating Crystals
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "tag": "c:gems/lapis"
        },
        {
            "tag": "c:gems/lapis"
        },
        {
            "tag": "c:gems/quartz"
        },
        {
            "tag": "c:gems/quartz"
        },
        ],
        "reagent": {
        "item": "undergarden:regalium_crystal"
        },
        "result": {
        "count": 1,
        "id": "kubejs:fascinating_crystal"
        },
        "sourceCost": 5000
    });


    //Eon Assembly
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
            "item": "kubejs:epoch"
            },
            "loops": 1,
            "results": [
            {
                "id": "kubejs:eon"
            }
            ],
            "sequence": [
                            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_eon"
                },
                {
                    "item": "minecraft:prismarine_shard"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_eon"
                }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_eon"
                },
                {
                    "item": "minecraft:prismarine_shard"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_eon"
                }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_eon"
                },
                {
                    "item": "kubejs:fascinating_crystal"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_eon"
                }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_eon"
                },
                {
                    "item": "kubejs:fascinating_crystal"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_eon"
                }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                    "item": "kubejs:incomplete_eon"
                    },
                    {
                    "type": "fluid_stack",
                    "amount": 500,
                    "fluid": "kubejs:void_essence_fluid_corrupt"
                    }
                ],
                "results": [
                    {
                    "id": "kubejs:incomplete_eon"
                    }
                ]
            },
            ],
            "transitional_item": {
            "id": "kubejs:incomplete_eon"
            }
        }
    );

    //Past
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "arsdelight:flourishing_bark"
        },
        {
            "item": "arsdelight:flourishing_bark"
        },
        {
            "item": "arsdelight:vexing_bark"
        },
        {
            "item": "arsdelight:vexing_bark"
        },
        {
            "item": "arsdelight:cascading_bark"
        },
        {
            "item": "arsdelight:cascading_bark"
        },
        {
            "item": "arsdelight:blazing_bark"
        },
        {
            "item": "arsdelight:blazing_bark"
        }
        ],
        "reagent": {
        "tag": "minecraft:saplings"
        },
        "result": {
        "count": 1,
        "id": "kubejs:past_fragment"
        },
        "sourceCost": 1000
    });
    e.shapeless("kubejs:vision_of_the_past", [ // arg 1: output
        "9x kubejs:past_fragment"
    ]);

    //Future
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "minecraft:ender_eye"
        },
        {
            "item": "minecraft:ender_eye"
        },
        {
            "item": "minecraft:ender_eye"
        },
        {
            "item": "minecraft:ender_eye"
        },
        {
            "item": "minecraft:popped_chorus_fruit"
        },
        {
            "item": "minecraft:popped_chorus_fruit"
        },
        {
            "item": "minecraft:popped_chorus_fruit"
        },
        {
            "item": "minecraft:popped_chorus_fruit"
        },
        ],
        "reagent": {
        "item": "minecraft:wither_rose"
        },
        "result": {
        "count": 1,
        "id": "kubejs:future_fragment"
        },
        "sourceCost": 1000
    });
    e.shapeless("kubejs:vision_of_the_future", [ // arg 1: output
        "9x kubejs:future_fragment"
    ]);

    //Continual Manifold
    e.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item": "biomesoplenty:white_sand"
            },
            {
                "item": "biomesoplenty:white_sand"
            },
            {
                "item": "biomesoplenty:orange_sand"
            },
            {
                "item": "biomesoplenty:orange_sand"
            },
            {
                "item": "minecraft:red_sand"
            },
            {
                "item": "minecraft:red_sand"
            },
            {
                "item": "biomesoplenty:black_sand"
            },
            {
                "item": "biomesoplenty:black_sand"
            },
            {
                "item": "kubejs:untold_experiences"
            },
        ],
        "results": [
            {
                "amount": 25,
                "id": "kubejs:continual_manifold"
            }
        ]
    });
    //Continuum Assembly
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
            "item": "kubejs:eon"
            },
            "loops": 1,
            "results": [
            {
                "id": "kubejs:continuum"
            }
            ],
            "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_continuum"
                },
                {
                    "item": "kubejs:vision_of_the_past"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_continuum"
                }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                    "item": "kubejs:incomplete_continuum"
                    },
                    {
                    "type": "fluid_stack",
                    "amount": 500,
                    "fluid": "kubejs:void_essence_fluid_pure"
                    }
                ],
                "results": [
                    {
                    "id": "kubejs:incomplete_continuum"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                    "item": "kubejs:incomplete_continuum"
                    },
                    {
                    "type": "fluid_stack",
                    "amount": 500,
                    "fluid": "kubejs:continual_manifold"
                    }
                ],
                "results": [
                    {
                    "id": "kubejs:incomplete_continuum"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                    "item": "kubejs:incomplete_continuum"
                    },
                    {
                    "type": "fluid_stack",
                    "amount": 500,
                    "fluid": "kubejs:void_essence_fluid_pure"
                    }
                ],
                "results": [
                    {
                    "id": "kubejs:incomplete_continuum"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                {
                    "item": "kubejs:incomplete_continuum"
                },
                {
                    "item": "kubejs:vision_of_the_future"
                }
                ],
                "results": [
                {
                    "id": "kubejs:incomplete_continuum"
                }
                ]
            }
            ],
            "transitional_item": {
            "id": "kubejs:incomplete_continuum"
            }
        }
    );

    //Final Craft (Eternity)
    e.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": {
                "item": "kubejs:continuum"
            },
            "B": {
                "tag": "c:storage_blocks/netherite"
            },
            "C": {
                "tag": "c:nether_stars"
            },
        },
        "pattern": [
            "AAAA     ",
            "  AAAAB  ",
            "    AAAAB",
            "   BCAAAB",
            " BBCCCBB ",
            "BAAACB   ",
            "BAAAA    ",
            "  BAAAA  ",
            "     AAAA"
        ],
        "result": {
            "count": 1,
            "id": "kubejs:eternity"
        }
    });
});