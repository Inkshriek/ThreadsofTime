ServerEvents.recipes(e => {

    //Time in a Bottle
    e.remove({output:"tiab:time_in_a_bottle"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "tag": "c:gems/diamond" },
        { "item": "kubejs:instant" },
        { "tag": "c:gems/lapis" },
        { "item": "kubejs:instant" },
        { "item": "minecraft:clock" },
        { "item": "kubejs:instant" },
        { "tag": "c:gems/lapis" },
        { "item": "kubejs:instant" },

        ],
        "reagent": { "item": "supplementaries:lumisene_bottle" },
        "result": { "count": 1, "id": "tiab:time_in_a_bottle"},
        "sourceCost": 5000
    });

    //Warp stuff
    e.remove({id:"ars_nouveau:warp_scroll"});
    e.shapeless(
        "2x ars_nouveau:warp_scroll", [
            "#c:gems/lapis",
            "ars_nouveau:blank_parchment",
            "kubejs:instant"
        ]
    );

    e.remove({id:"reliquary:fertile_lily_pad"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "reliquary:fertile_essence" },
        { "item": "reliquary:fertile_essence" },
        { "item": "kubejs:moment" },
        { "item": "reliquary:fertile_essence" },
        ],
        "reagent": { "item": "minecraft:lily_pad" },
        "result": { "count": 1, "id": "reliquary:fertile_lily_pad"},
        "sourceCost": 2500
    });

    /*
    e.remove({id:"waystones:warp_stone"});
    e.remove({id:"waystones:warp_scroll"});
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
    */

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

    //Warp Nexus
    e.shaped(
        "ars_additions:warp_nexus", 
        [// arg 1: output
            'CBC',
            'ADA',
            'CBC'
        ], 
        {
            A: "kubejs:instant", 
            B: "ars_nouveau:sourcestone",
            C: "#c:ingots/gold",
            D: "#c:gems/amethyst"
        }
    );

    //Warp Index
    e.remove({output:"ars_additions:stabilized_warp_index"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:void_essence" },
        { "item": "kubejs:moment" },
        { "item": "minecraft:end_stone" },
        { "item": "kubejs:moment" },
        ],
        "reagent": {
        "item": "ars_additions:warp_index"
        },
        "result": {
        "count": 1,
        "id": "ars_additions:stabilized_warp_index"
        },
        "sourceCost": 0
    });
    
    //Totem of Undying
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "ars_elemental:anima_essence" },
        { "item": "ars_elemental:anima_essence" },
        { "item": "ars_elemental:anima_essence" },
        { "item": "ars_elemental:anima_essence" },
        { "tag": "c:ingots/gold" },
        { "tag": "c:ingots/gold" },
        { "tag": "c:ingots/gold" },
        { "tag": "c:ingots/gold" },
        ],
        "reagent": {"item": "minecraft:armor_stand"},
        "result": {"count": 1,"id": "minecraft:totem_of_undying"},
        "sourceCost": 0
    });

    //Ender Source Jar
    e.remove({output:"ars_additions:ender_source_jar"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:epoch" },
        { "tag": "c:rods/blaze" },
        { "tag": "c:ender_pearls" },
        { "item": "kubejs:epoch" },
        { "tag": "c:rods/blaze" },
        { "tag": "c:ender_pearls" },
        ],
        "reagent": {"item": "ars_nouveau:source_jar"},
        "result": {"count": 1,"id": "ars_additions:ender_source_jar"},
        "sourceCost": 0
    });

    //Ender Chest
    e.remove({id:"enderstorage:ender_chest"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "tag": "minecraft:wool" },
        { "tag": "c:rods/blaze" },
        { "tag": "c:rods/blaze" },
        { "item": "kubejs:epoch" },
        { "tag": "c:rods/blaze" },
        { "tag": "c:rods/blaze" },
        ],
        "reagent": {"item": "minecraft:ender_chest"},
        "result": {"count": 1,"id": "enderstorage:ender_chest"},
        "sourceCost": 0
    });

    //Hyperbox
    e.remove({id:"hyperbox:hyperbox"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:void_essence" },
        { "item": "kubejs:void_essence" },
        { "item": "petrolsparts:pneumatic_tube" },
        { "item": "petrolsparts:pneumatic_tube" },
        { "item": "petrolsparts:pneumatic_tube" },
        { "item": "petrolsparts:pneumatic_tube" },
        { "item": "kubejs:eon" },
        { "item": "kubejs:eon" },
        ],
        "reagent": {"item": "minecraft:crying_obsidian"},
        "result": {"count": 1,"id": "hyperbox:hyperbox"},
        "sourceCost": 5000
    });

    //Potion Flask
    e.remove({output:"ars_nouveau:potion_flask_amplify"});
    e.remove({output:"ars_nouveau:potion_flask_extend_time"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:instant" },
        { "item": "ars_nouveau:abjuration_essence" },
        { "item": "ars_nouveau:abjuration_essence" },
        { "item": "kubejs:instant" },
        { "item": "ars_nouveau:abjuration_essence" },
        { "item": "ars_nouveau:abjuration_essence" },
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
        { "item": "kubejs:instant" },
        { "item": "ars_nouveau:manipulation_essence" },
        { "item": "ars_nouveau:manipulation_essence" },
        { "item": "kubejs:instant" },
        { "item": "ars_nouveau:manipulation_essence" },
        { "item": "ars_nouveau:manipulation_essence" },
        ],
        "reagent": {"item": "ars_nouveau:potion_flask"},
        "result": {"count": 1,"id": "ars_nouveau:potion_flask_extend_time"},
        "sourceCost": 0
    });

    //Boss Summoner
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:eon" },
        { "item": "kubejs:eon" },
        { "tag": "c:bones" },
        { "tag": "c:bones" },
        { "item": "apotheosis:gem_dust" },
        { "item": "apotheosis:gem_dust" },
        { "item": "apotheosis:gem_dust" },
        { "item": "apotheosis:gem_dust" },
        ],
        "reagent": {"tag": "c:skulls"},
        "result": {"count": 1,"id": "apotheosis:boss_summoner"},
        "sourceCost": 0
    });

    //Source Condenser
    /*
    e.remove({id:"starbunclemania:source_condenser"});
    e.shapeless("starbunclemania:source_condenser", [
        "starbunclemania:fluid_jar", "ars_nouveau:relay", "kubejs:moment"
    ]);
    */

    //Paradox Machine
    e.remove({id:"justdirethings:paradoxmachine"})
    e.shaped(
        "justdirethings:paradoxmachine", 
        [// arg 1: output
            'ABA',
            'BCB',
            'ABA'
        ], 
        {
            A: "#c:ingots/eclipsealloy", 
            B: "justdirethings:time_crystal",
            C: "kubejs:paradoxical_reactant",
        }
    );

    //Spawn Eggs
    let spawnEgg = (ingredient, reagent, result) => {
        e.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": true,
            "pedestalItems": [
            { "item": "ars_nouveau:manipulation_essence" },
            { "item": "ars_nouveau:manipulation_essence" },
            { "item": "kubejs:moment" },
            { "item": "kubejs:moment" },
            { "item": ingredient },
            { "item": ingredient },
            ],
            "reagent": {"item": reagent},
            "result": {"count": 1,"id": result},
            "sourceCost": 5000
        });
    }

    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "ars_nouveau:manipulation_essence" },
        { "item": "ars_nouveau:manipulation_essence" },
        { "item": "kubejs:moment" },
        { "item": "kubejs:moment" },
        { "tag": "c:chests/wooden" },
        { "tag": "c:chests/wooden" },
        ],
        "reagent": {"tag": "rarcompat:mimic_loot"},
        "result": {"count": 1,"id": "artifacts:mimic_spawn_egg"},
        "sourceCost": 5000
    });

    spawnEgg("minecraft:bone", "minecraft:egg", "minecraft:wolf_spawn_egg");
    spawnEgg("minecraft:salmon", "minecraft:egg", "minecraft:cat_spawn_egg");
    spawnEgg("minecraft:bow", "minecraft:egg", "minecraft:skeleton_spawn_egg");
    spawnEgg("minecraft:rotten_flesh", "minecraft:egg", "minecraft:zombie_spawn_egg");

    //Torcherino
    e.remove({output:"torcherino:torcherino"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:continuum" },
        { "tag": "c:storage_blocks/lapis"},
        { "item": "kubejs:continuum" },
        { "tag": "c:storage_blocks/lapis" },
        { "item": "kubejs:continuum" },
        { "tag": "c:storage_blocks/lapis" },
        { "item": "kubejs:continuum" },
        { "tag": "c:storage_blocks/lapis" },
        ],
        "reagent": {
        "item": "minecraft:torch"
        },
        "result": {
        "count": 1,
        "id": "torcherino:torcherino"
        },
        "sourceCost": 50000
    });
    
    //Tesseract
    e.remove({output:"tesseract:tesseract"});
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:eon" },
        { "tag": "c:ender_pearls" },
        { "tag": "c:obsidians" },
        { "tag": "c:ender_pearls" },
        { "item": "kubejs:eon" },
        { "tag": "c:ender_pearls" },
        { "tag": "c:obsidians" },
        { "tag": "c:ender_pearls" },
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
        { "item": "kubejs:eternity" },
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
        { "item": "kubejs:eternity" },
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
        { "item": "kubejs:eternity" },
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

    //Creative Blaze Cake
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:eternity" },
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
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "A": {"item": "kubejs:continuum"},
            "B": {"item": "create:shadow_steel"},
            "C": {"tag": "c:nether_stars"},
            "D": {"item": "tesseract:tesseract"},
        },
        "pattern": [
            " BAB ",
            "BDCDB",
            " BAB ",
        ],
        "result": {
            "count": 2,
            "id": "entangled:block"
        }
    });
    /*
    e.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "pedestalItems": [
        { "item": "kubejs:eternity" },
        ],
        "reagent": {
        "tag": "c:chests/wooden"
        },
        "result": {
        "count": 8,
        "id": "entangled:block"
        },
        "sourceCost": 100000
    });
    */
});