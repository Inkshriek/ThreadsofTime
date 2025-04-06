ServerEvents.recipes(e => {

    //Time in a Bottle
    e.remove({output:"tiab:time_in_a_bottle"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "tag": "c:gems/diamond"
        },
        {
            "item": "kubejs:moment"
        },
        {
            "tag": "c:gems/lapis"
        },
        {
            "item": "kubejs:moment"
        },
        {
            "item": "minecraft:clock"
        },
        {
            "item": "kubejs:moment"
        },
        {
            "tag": "c:gems/lapis"
        },
        {
            "item": "kubejs:moment"
        },

        ],
        "reagent": {
        "item": "supplementaries:lumisene_bottle"
        },
        "result": {
        "count": 1,
        "id": "tiab:time_in_a_bottle"
        },
        "sourceCost": 10000
    });

    //Warp stuff
    e.remove({id:"waystones:warp_stone"});
    e.remove({id:"ars_nouveau:warp_scroll"});
    e.remove({id:"waystones:warp_scroll"});
    e.shapeless(
        "2x ars_nouveau:warp_scroll", [
            "#c:gems/lapis",
            "ars_nouveau:blank_parchment",
            "kubejs:instant"
        ]
    );
    e.shapeless(
        "2x waystones:warp_scroll", [
            "minecraft:ink_sac",
            "minecraft:paper",
            "kubejs:instant"
        ]
    );
    e.shaped(
        "waystones:warp_stone", 
        [// arg 1: output
            'CBC',
            'A A',
            'CBC'
        ], 
        {
            A: "kubejs:instant", 
            B: "#c:ender_pearls",
            C: "#c:gems/amethyst",
        }
    );

    //Remote Drawer Upgrade
    /*
    e.replaceInput(
        { id: "storagedrawers:remote_upgrade" },
        "minecraft:redstone",         
        "kubejs:moment"       
    );
    e.replaceInput(
        { id: "storagedrawers:remote_group_upgrade" },
        "minecraft:redstone",         
        "kubejs:moment"       
    );
    */
    
    //Totem of Undying
    e.shaped(
        "minecraft:totem_of_undying", 
        [// arg 1: output
            'CBC',
            'BAB',
            'CBC'
        ], 
        {
            A: "minecraft:armor_stand", 
            B: "kubejs:moment",
            C: "ars_elemental:anima_essence",
        }
    );

    //Ender Source Jar
    e.remove({output:"ars_additions:ender_source_jar"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:epoch" },
        { "tag": "c:ender_pearls" },
        { "tag": "c:ender_pearls" },
        { "tag": "c:ender_pearls" },
        { "tag": "c:ender_pearls" },

        ],
        "reagent": {
        "item": "ars_nouveau:source_jar"
        },
        "result": {
        "count": 1,
        "id": "ars_additions:ender_source_jar"
        },
        "sourceCost": 10000
    });

    //Potion Flask
    e.remove({output:"ars_nouveau:potion_flask_amplify"});
    e.remove({output:"ars_nouveau:potion_flask_extend_time"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:instant"
        },
        {
            "item": "ars_nouveau:abjuration_essence"
        },
        {
            "item": "ars_nouveau:abjuration_essence"
        },
        {
            "item": "kubejs:instant"
        },
        {
            "item": "ars_nouveau:abjuration_essence"
        },
        {
            "item": "ars_nouveau:abjuration_essence"
        },

        ],
        "reagent": {
        "item": "ars_nouveau:potion_flask"
        },
        "result": {
        "count": 1,
        "id": "ars_nouveau:potion_flask_amplify"
        },
        "sourceCost": 0
    });
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:instant"
        },
        {
            "item": "ars_nouveau:manipulation_essence"
        },
        {
            "item": "ars_nouveau:manipulation_essence"
        },
        {
            "item": "kubejs:instant"
        },
        {
            "item": "ars_nouveau:manipulation_essence"
        },
        {
            "item": "ars_nouveau:manipulation_essence"
        },

        ],
        "reagent": {
        "item": "ars_nouveau:potion_flask"
        },
        "result": {
        "count": 1,
        "id": "ars_nouveau:potion_flask_extend_time"
        },
        "sourceCost": 0
    });

    //Boss Summoner
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:eon"
        },
        {
            "item": "apotheosis:gem_dust"
        },
        {
            "item": "apotheosis:gem_dust"
        },
        {
            "item": "apotheosis:gem_dust"
        },
        {
            "item": "apotheosis:gem_dust"
        },

        ],
        "reagent": {
        "item": "minecraft:skeleton_skull"
        },
        "result": {
        "count": 1,
        "id": "apotheosis:boss_summoner"
        },
        "sourceCost": 0
    });

    //Mimic Egg
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "minecraft:egg"
        },
        {
            "item": "kubejs:eon"
        },
        {
            "item": "kubejs:eon"
        },
        {
            "item": "kubejs:eon"
        },
        {
            "item": "kubejs:eon"
        },
        {
            "item": "kubejs:eon"
        },
        {
            "item": "kubejs:eon"
        },
        {
            "item": "kubejs:eon"
        },

        ],
        "reagent": {
        "tag": "c:chests"
        },
        "result": {
        "count": 1,
        "id": "artifacts:mimic_spawn_egg"
        },
        "sourceCost": 0
    });

    //Torcherino
    e.remove({output:"torcherino:torcherino"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:continuum"
        },
        {
            "tag": "c:storage_blocks/lapis"
        },
        {
            "item": "kubejs:continuum"
        },
        {
            "tag": "c:storage_blocks/lapis"
        },
        {
            "item": "kubejs:continuum"
        },
        {
            "tag": "c:storage_blocks/lapis"
        },
        {
            "item": "kubejs:continuum"
        },
        {
            "tag": "c:storage_blocks/lapis"
        },
        ],
        "reagent": {
        "item": "minecraft:torch"
        },
        "result": {
        "count": 1,
        "id": "torcherino:torcherino"
        },
        "sourceCost": 10000
    });
    
    //Tesseract
    e.remove({output:"tesseract:tesseract"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:continuum"
        },
        {
            "tag": "c:ender_pearls"
        },
        {
            "tag": "c:obsidians"
        },
        {
            "tag": "c:ender_pearls"
        },
        {
            "item": "kubejs:continuum"
        },
        {
            "tag": "c:ender_pearls"
        },
        {
            "tag": "c:obsidians"
        },
        {
            "tag": "c:ender_pearls"
        },
        ],
        "reagent": {
        "tag": "c:storage_blocks/diamond"
        },
        "result": {
        "count": 2,
        "id": "tesseract:tesseract"
        },
        "sourceCost": 10000
    });

    //Creative Fluid Tank
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:eternity"
        },
        ],
        "reagent": {
        "item": "create:fluid_tank"
        },
        "result": {
        "count": 1,
        "id": "create:creative_fluid_tank"
        },
        "sourceCost": 100000
    });

    //Creative Storage Drawer
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:eternity"
        },
        ],
        "reagent": {
        "item": "storagedrawers:upgrade_template"
        },
        "result": {
        "count": 1,
        "id": "storagedrawers:creative_storage_upgrade"
        },
        "sourceCost": 100000
    });

    //Creative Motor
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:eternity"
        },
        ],
        "reagent": {
        "item": "ars_technica:source_motor"
        },
        "result": {
        "count": 1,
        "id": "create:creative_motor"
        },
        "sourceCost": 100000
    });

    //Creative Dragon Meal
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:eternity"
        },
        ],
        "reagent": {
        "item": "iceandfire:dragon_meal"
        },
        "result": {
        "count": 1,
        "id": "iceandfire:creative_dragon_meal"
        },
        "sourceCost": 100000
    });

    //Creative Blaze Cake
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:eternity"
        },
        ],
        "reagent": {
        "item": "create:blaze_cake"
        },
        "result": {
        "count": 1,
        "id": "create:creative_blaze_cake"
        },
        "sourceCost": 100000
    });

    //Entangled Block
    e.remove({id:"entangled:block"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        {
            "item": "kubejs:eternity"
        },
        ],
        "reagent": {
        "tag": "c:chests/wooden"
        },
        "result": {
        "count": 4,
        "id": "entangled:block"
        },
        "sourceCost": 100000
    });
});