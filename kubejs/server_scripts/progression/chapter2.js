ServerEvents.recipes(e => {
    
    //Lumisene
    e.remove({id:"supplementaries:lumisene_bottle"});
    e.remove({id:"supplementaries:lumisene_bucket"});
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "minecraft:glow_berries" },
            { "item": "minecraft:glow_berries" },
            { "type": "fluid_stack","amount": 250,"fluid": "starbunclemania:source_fluid" }
        ],
        "results": [{ "amount": 250, "id": "supplementaries:lumisene" },]
    });
    e.custom({
        "type": "create:filling",
        "ingredients": [
            {"item": "minecraft:glass_bottle"},
            {"type": "fluid_stack","amount": 250,
            "fluid": "supplementaries:lumisene"}
        ],
        "results": [{"id": "supplementaries:lumisene_bottle"}]
    });
    e.custom({
        "type": "create:emptying",
        "ingredients": [{"item": "supplementaries:lumisene_bottle"},],
        "results": [
            {"amount": 250,"id": "supplementaries:lumisene"},
            {"id": "minecraft:glass_bottle"},
        ]
    });
    e.custom({
        "type": "create:emptying",
        "ingredients": [{"item": "supplementaries:lumisene_bucket"},],
        "results": [
            {"amount": 1000,"id": "supplementaries:lumisene"},
            {"id": "minecraft:bucket"},
        ]
    });

    //Moment
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "supplementaries:hourglass"},
        "loops": 1,
        "results": [{"id": "kubejs:moment"}],
        "sequence": [
        {
            "type": "create:deploying",
            "ingredients": [
            {"item": "kubejs:incomplete_moment"},
            {"item": "kubejs:instant"}
            ],
            "results": [{"id": "kubejs:incomplete_moment"}]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {"item": "kubejs:incomplete_moment"},
            {"item": "kubejs:instant"}
            ],
            "results": [{"id": "kubejs:incomplete_moment"}]
        },
        {
            "type": "create:filling",
            "ingredients": [
                {"item": "kubejs:incomplete_moment"},
                {"type": "fluid_stack", "amount": 500,"fluid": "supplementaries:lumisene"}
            ],
            "results": [{"id": "kubejs:incomplete_moment"}]
        },
        ],
        "transitional_item": {"id": "kubejs:incomplete_moment"}
    });
});