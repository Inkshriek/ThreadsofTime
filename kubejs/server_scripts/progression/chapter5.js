ServerEvents.recipes(e => {

    e.custom({
        "type": "ars_nouveau:imbuement",
        "input": {"item": "justdirethings:time_crystal"},
        "output": {"count": 1, "id": "kubejs:paradoxical_reactant"},
        "pedestalItems": [],
        "source": 10000
    });

    //Past
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "tag": "c:gems/lapis" },
        { "tag": "c:gems/lapis" },
        { "tag": "c:gems/lapis" },
        { "tag": "c:gems/lapis" },
        ],
        "reagent": {
        "item": "minecraft:torchflower"
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
        { "item": "minecraft:popped_chorus_fruit" },
        { "item": "minecraft:popped_chorus_fruit" },
        { "item": "minecraft:popped_chorus_fruit" },
        { "item": "minecraft:popped_chorus_fruit" },
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
            { "item": "biomesoplenty:white_sand" },
            { "item": "biomesoplenty:white_sand" },
            { "item": "biomesoplenty:orange_sand" },
            { "item": "biomesoplenty:orange_sand" },
            { "item": "minecraft:red_sand" },
            { "item": "minecraft:red_sand" },
            { "item": "biomesoplenty:black_sand" },
            { "item": "biomesoplenty:black_sand" },
            { "item": "kubejs:paradoxical_reactant" },
        ],
        "results": [{"amount": 25,"id": "kubejs:continual_manifold"}]
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