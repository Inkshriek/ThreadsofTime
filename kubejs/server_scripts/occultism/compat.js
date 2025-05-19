ServerEvents.recipes(e => {

    //Washing crushed silver now properly gives you a byproduct.
    e.custom({
        "type": "create:splashing",
        "ingredients": [{"item": "create:crushed_raw_silver"}],
        "results": [
            {"count": 9,"id": "occultism:silver_nugget"},
            {"chance": 0.75,"id": "minecraft:amethyst_shard"},
        ]
    });

    //Silver from crushing Scorchia
    e.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "create:scorchia"}],
        "processingTime": 250,
        "results": [
            {"chance": 0.4,"id": "create:crushed_raw_silver"},
            {"chance": 0.4,"id": "occultism:silver_nugget"}
        ]
    });
    e.custom({
        "type": "create:crushing",
        "ingredients": [{"tag": "create:stone_types/scorchia"}],
        "processingTime": 250,
        "results": [
            {"chance": 0.4,"id": "create:crushed_raw_silver"},
            {"chance": 0.4,"id": "occultism:silver_nugget"}
        ]
    });
});