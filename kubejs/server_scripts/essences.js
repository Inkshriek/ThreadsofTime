ServerEvents.recipes(e => {

    //Void Essence
    e.custom(
    {
        "type": "ars_nouveau:imbuement",
        "input": {
            "tag": "c:gems/source"
        },
        "output": {
            "count": 1,
            "id": "kubejs:void_essence"
        },
        "pedestalItems": [
            {
                "item": "minecraft:ender_eye"
            },
            {
                "item": "minecraft:echo_shard"
            },
            {
                "item": "minecraft:dragon_breath"
            }
        ],
        "source": 4000
    });

    //Making fluid versions of all essences
    let makeFluidEssence = (essence, mod) => {
        e.custom({
            "type": "create:mixing",
            "heat_requirement": "heated",
            "ingredients": [
                {
                    "item": mod + ":" + essence + "_essence"
                }
            ],
            "results": [
                {
                    "amount": 500,
                    "id": "kubejs:" + essence + "_essence_fluid"
                }
            ]
        });
    };
    //Making a recipe to revert fluid essences back into solid.
    let makeSolidEssence = (essence, mod) => {
        e.custom({
            "type": "create:compacting",
            "ingredients": [
                {
                    "type": "fluid_stack",
                    "amount": 500,
                    "fluid": "kubejs:" + essence + "_essence_fluid"
                }
            ],
            "results": [
                {
                    "id": mod + ":" + essence + "_essence"
                }
            ]
        });
    };

    let essences = [
        "abjuration",
        "conjuration",
        "manipulation",
        "fire",
        "water",
        "earth",
        "air",
    ]
    for (let i = 0; i < essences.length; i++) {
        makeFluidEssence(essences[i], "ars_nouveau");
        makeSolidEssence(essences[i], "ars_nouveau");
    }
    makeFluidEssence("anima", "ars_elemental");
    makeSolidEssence("anima", "ars_elemental");

    //Void essence is done uniquely.
    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "kubejs:void_essence"
            }
        ],
        "results": [
            {
                "amount": 500,
                "id": "kubejs:void_essence_fluid_corrupt"
            }
        ]
    });
    e.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "type": "fluid_stack",
                "amount": 500,
                "fluid": "kubejs:void_essence_fluid_corrupt"
            }
        ],
        "results": [
            {
                "id": "kubejs:void_essence"
            }
        ]
    });
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "kubejs:drained_void_essence_4"
            }
        ],
        "results": [
            {
                "amount": 25,
                "id": "kubejs:void_essence_fluid_pure"
            }
        ]
    });
    e.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "kubejs:void_essence"
            }
        ],
        "results": [
            {
                "id": "kubejs:drained_void_essence_1"
            },
            {
                "amount": 100,
                "id": "kubejs:void_essence_fluid_corrupt"
            }
        ]
    });
    e.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "kubejs:drained_void_essence_1"
            }
        ],
        "results": [
            {
                "id": "kubejs:drained_void_essence_2"
            },
            {
                "amount": 50,
                "id": "kubejs:void_essence_fluid_corrupt"
            }
        ]
    });
    e.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "kubejs:drained_void_essence_2"
            }
        ],
        "results": [
            {
                "id": "kubejs:drained_void_essence_3"
            },
            {
                "amount": 25,
                "id": "kubejs:void_essence_fluid_corrupt"
            }
        ]
    });
    e.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": "kubejs:drained_void_essence_3"
            }
        ],
        "results": [
            {
                "id": "kubejs:drained_void_essence_4"
            },
            {
                "amount": 25,
                "id": "kubejs:void_essence_fluid_corrupt"
            }
        ]
    });

});