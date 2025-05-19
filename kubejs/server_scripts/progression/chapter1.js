ServerEvents.recipes(e => {

    //Instant
    e.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "ars_nouveau:magebloom_fiber" },
            { "tag": "c:sands" },
            { "tag": "c:sands" },
            { "type": "fluid_stack", "amount": 250, 
            "fluid": "kubejs:manipulation_essence_fluid" }
        ],
        "results": [{"id": "kubejs:instant"}]
    });
    e.shaped(
        "kubejs:instant", 
        [
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
});