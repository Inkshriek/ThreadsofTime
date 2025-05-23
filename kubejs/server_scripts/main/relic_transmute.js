ServerEvents.recipes(e => {
    //At Eon tier, you're able to transmute relics and artifacts into other ones using Eons.
    let relicTransmute = (newItem, ingredient, isTag) => {
        e.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": false,
            "pedestalItems": [
            { "tag": "rarcompat:mimic_loot" },
            { "item": "kubejs:eon" },
            { "item": "kubejs:eon" },
            { "item": "kubejs:eon" },
            { "item": "kubejs:eon" },
            ],
            "reagent": {
            "tag": isTag ? ingredient : null, "item": isTag ? null : ingredient
            },
            "result": {
            "count": 1,
            "id": newItem
            },
            "sourceCost": 10000
        });
    }

    /*
    relicTransmute("artifacts:onion_ring", "farmersdelight:onion", false);
    relicTransmute("artifacts:plastic_drinking_hat", "minecraft:glass_bottle", false);
    relicTransmute("artifacts:snorkel", "minecraft:water_bucket", false);
    relicTransmute("reliquified_ars_nouveau:mana_ring", "ars_elemental:base_bangle", false);
    relicTransmute("reliquified_ars_nouveau:ring_of_thrift", "ars_nouveau:ring_of_greater_discount", false);
    relicTransmute("artifacts:everlasting_beef", "minecraft:beef", false);
    relicTransmute("artifacts:eternal_steak", "minecraft:cooked_beef", false);
    */
});