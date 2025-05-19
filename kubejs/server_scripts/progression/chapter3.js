ServerEvents.recipes(e => {
    //Time Steel
    e.remove({output:"tempad:time_steel"});
    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            { "tag": "c:ingots/ferricore" },
            { "tag": "c:ingots/ferricore" },
            { "item": "kubejs:moment" },
        ],
        "results": [{"count": 2, "id": "kubejs:peculiar_steel"}]
    });
    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            { "tag": "c:ingots/ferricore" },
            { "tag": "c:ingots/ferricore" },
            { "item": "kubejs:moment" },
        ],
        "results": [{"count": 2, "id": "tempad:time_steel"}]
    });

    //Condensed Source
    /*
    e.custom({
        "type": "create:compacting",
        "ingredients": [
            {"type": "fluid_stack", "amount": 5,"fluid": "justdirethings:polymorphic_fluid_source"},
            {"type": "fluid_stack","amount": 500,"fluid": "starbunclemania:source_fluid"},

        ],
        "results": [{"amount": 250,"id": "kubejs:condensed_source_fluid"}]
    });
    */

    //Timelost Figment
    e.shapeless("kubejs:ashen_sapling", [ // arg 1: output
        "4x supplementaries:ash", "#kubejs:archwood_sapling"
    ]);
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "pedestalItems": [
        { "item": "ars_nouveau:abjuration_essence" },
        { "tag": "arsdelight:barks" },
        ],
        "reagent": {"item": "kubejs:ashen_sapling"},
        "result": {"count": 1, "id": "kubejs:timelost_figment"},
        "sourceCost": 0
    });
    e.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "kubejs:ashen_sapling"},
            { "tag": "arsdelight:barks" },
            {"type": "fluid_stack","amount": 500, "fluid": "kubejs:abjuration_essence_fluid"}
        ],
        "results": [{"id": "kubejs:timelost_figment"}]
    });

    //Epoch Assembly
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:moment"},
        "loops": 1,
        "results": [{ "id": "kubejs:epoch" }],
        "sequence": [
        {
            "type": "create:deploying",
            "ingredients": [
            { "item": "kubejs:incomplete_epoch"},
            { "item": "kubejs:timelost_figment" }
            ],
            "results": [{ "id": "kubejs:incomplete_epoch" }]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            { "item": "kubejs:incomplete_epoch"},
            { "item": "kubejs:timelost_figment" }
            ],
            "results": [{ "id": "kubejs:incomplete_epoch" }]
        },
        {
            "type": "create:pressing",
            "ingredients": [
            { "item": "kubejs:incomplete_epoch"},
            ],
            "results": [{ "id": "kubejs:incomplete_epoch" }]
        },
        /*
        {
            "type": "create:filling",
            "ingredients": [
                {"item": "kubejs:incomplete_moment"},
                {"type": "fluid_stack", "amount": 500,"fluid": "starbunclemania:source_fluid"}
            ],
            "results": [{"id": "kubejs:incomplete_moment"}]
        },
        */
        ],
        "transitional_item": {"id": "kubejs:incomplete_epoch"}
    });
});