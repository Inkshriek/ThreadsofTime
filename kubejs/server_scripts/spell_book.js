ServerEvents.recipes(e => {
    //Changes the novice spellbook recipe to be done differently.
    e.remove({id: "ars_nouveau:novice_spell_book"});
    e.remove({id: "ars_nouveau:novice_spellbook_alt"});
    e.remove({id: "ars_nouveau:apprentice_book_upgrade"});
    e.remove({id: "ars_nouveau:archmage_book_upgrade"});
    e.shapeless(
        "ars_nouveau:novice_spell_book", 
        ["minecraft:book", "#c:gems/amethyst", "#c:ingots/gold", "#c:gems/lapis", "#c:ingots/iron", "#c:ingots/copper"]
    ).id("ars_nouveau:novice_spell_book");

    e.custom({
        "type": "ars_nouveau:book_upgrade",
        "category": "misc",
        "ingredients": [
        {"item": "ars_nouveau:novice_spell_book"},
        {"tag": "c:obsidians"},
        {"tag": "c:gems/quartz"},
        {"tag": "c:gems/diamond"},
        {"tag": "c:ingots/brass"},
        {"tag": "c:ingots/utherium"},
        ],
        "result": {
        "count": 1,
        "id": "ars_nouveau:apprentice_spell_book"
        }
    }).id("ars_nouveau:apprentice_book_upgrade");

    e.custom({
        "type": "ars_nouveau:book_upgrade",
        "category": "misc",
        "ingredients": [
        {"item": "ars_nouveau:apprentice_spell_book"},
        {"item": "kubejs:void_essence"},
        {"item": "ars_elemental:mark_of_mastery"},
        {"item": "minecraft:totem_of_undying"},
        {"item": "apotheosis:mythic_material"},
        {"tag": "c:nether_stars"},
        ],
        "result": {
        "count": 1,
        "id": "ars_nouveau:archmage_spell_book"
        }
    }).id("ars_nouveau:archmage_book_upgrade");

    e.custom({
        "type": "ars_nouveau:book_upgrade",
        "category": "misc",
        "ingredients": [
        {"item": "ars_nouveau:archmage_spell_book"},
        {"item": "kubejs:creative_spark"},
        {"item": "kubejs:eternity"},
        ],
        "result": {
        "count": 1,
        "id": "ars_nouveau:creative_spell_book"
        }
    }).id("ars_nouveau:creative_book_upgrade");

    /*
        GLYPHS
    */

    // TIER 1

    e.remove({ id: "ars_nouveau:glyph_ignite", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 27,
        inputs: [
            { item: "ars_nouveau:fire_essence" },
            { item: "iceandfire:fire_lily" },
            { item: "minecraft:charcoal" },
            { item: "minecraft:charcoal" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_ignite"
        }
        })
    .id("ars_nouveau:glyph_ignite");

    e.remove({ id: "ars_elemental:glyph_spark", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 27,
        inputs: [
            { item: "ars_nouveau:air_essence" },
            { tag: "minecraft:wool" },
            { item: "iceandfire:lightning_lily" },
        ],
        output: {
            count: 1,
            id: "ars_elemental:glyph_spark"
        }
        })
    .id("ars_elemental:glyph_spark");

    e.remove({ id: "ars_technica:glyph_pack", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 27,
        inputs: [
            { item: "ars_nouveau:manipulation_essence" },
            { tag: "c:storage_blocks/iron" },
            { item: "minecraft:crafting_table" },
            { item: "create:basin" },
        ],
        output: {
            count: 1,
            id: "ars_technica:glyph_pack"
        }
        })
    .id("ars_technica:glyph_pack");

    e.remove({ id: "ars_nouveau:glyph_rotate", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 27,
        inputs: [
            { item: "supplementaries:wrench" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_rotate"
        }
        })
    .id("ars_nouveau:glyph_rotate");


    e.remove({ id: "ars_nouveau:glyph_gust", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 27,
        inputs: [
            { item: "ars_nouveau:air_essence" },
            { item: "minecraft:piston" },
            { item: "minecraft:breeze_rod" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_gust"
        }
        })
    .id("ars_nouveau:glyph_gust");

    e.remove({ id: "ars_nouveau:glyph_freeze", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 27,
        inputs: [
            { item: "minecraft:snow_block" },
            { item: "minecraft:snow_block" },
            { item: "iceandfire:ice_lily" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_freeze"
        }
        })
    .id("ars_nouveau:glyph_freeze");

    e.remove({ id: "ars_nouveau:glyph_cut", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 27,
        inputs: [
            { item: "farmersdelight:iron_knife" },
            { item: "farmersdelight:iron_knife" },
            { tag: "c:tools/shears" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_cut"
        }
        })
    .id("ars_nouveau:glyph_cut");

    // TIER 2

    e.remove({ id: "ars_elemental:glyph_envenom", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 55,
        inputs: [
            { item: "minecraft:poisonous_potato" },
            { item: "minecraft:fermented_spider_eye" },
            { item: "iceandfire:hydra_fang" }
        ],
        output: {
            count: 1,
            id: "ars_elemental:glyph_envenom"
        }
        })
    .id("ars_elemental:glyph_envenom");

    e.remove({ id: "ars_nouveau:glyph_smelt", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 55,
        inputs: [
            { item: "ars_nouveau:fire_essence" },
            { item: "minecraft:blast_furnace" },
            { item: "minecraft:blaze_rod" },
            { item: "minecraft:blaze_rod" },
            { item: "create:brass_ingot" },
            { item: "create:brass_ingot" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_smelt"
        }
        })
    .id("ars_nouveau:glyph_smelt");

    e.remove({ id: "ars_nouveau:glyph_cold_snap", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 55,
        inputs: [
            { item: "ars_nouveau:water_essence" },
            { item: "minecraft:powder_snow_bucket" },
            { item: "iceandfire:ice_dragon_blood" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_cold_snap"
        }
        })
    .id("ars_nouveau:glyph_cold_snap");

    e.remove({ id: "ars_nouveau:glyph_flare", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 55,
        inputs: [
            { item: "ars_nouveau:fire_essence" },
            { item: "supplementaries:ash" },
            { item: "supplementaries:ash" },
            { item: "minecraft:blaze_rod" },
            { item: "minecraft:fire_charge" },
            { item: "minecraft:fire_charge" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_flare"
        }
        })
    .id("ars_nouveau:glyph_flare");

    /*
    e.remove({ id: "ars_nouveau:glyph_extend_time", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 55,
        inputs: [
            { item: "kubejs:instant" },
            { item: "minecraft:redstone" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_extend_time"
        }
        })
    .id("ars_nouveau:glyph_extend_time");

    e.remove({ id: "ars_nouveau:glyph_duration_down", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 55,
        inputs: [
            { item: "kubejs:instant" },
            { item: "minecraft:glowstone_dust" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_duration_down"
        }
        })
    .id("ars_nouveau:glyph_duration_down");
    */

    e.remove({ id: "ars_nouveau:glyph_heal", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        exp: 55,
        inputs: [
            { item: "ars_nouveau:abjuration_essence" },
            { item: "minecraft:glistering_melon_slice" },
            { item: "minecraft:glistering_melon_slice" },
            { item: "create:bar_of_chocolate" },
            { item: "create:bar_of_chocolate" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_heal"
        }
        })
    .id("ars_nouveau:glyph_heal");

    // TIER 3

    e.remove({ id: "ars_technica:glyph_obliterate", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 160,
        inputs: [
            { item: "ars_nouveau:manipulation_essence" },
            { item: "create:crushing_wheel" },
            { item: "create:crushing_wheel" },
        ],
        output: {
            count: 1,
            id: "ars_technica:glyph_obliterate"
        }
        })
    .id("ars_technica:glyph_obliterate");
    
    e.remove({ id: "ars_nouveau:rewind", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 160,
        inputs: [
            { item: "ars_nouveau:manipulation_essence" },
            { item: "kubejs:instant" },
            { item: "kubejs:instant" },
            { item: "kubejs:instant" },
            { item: "kubejs:instant" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:rewind"
        }
        })
    .id("ars_nouveau:rewind");


    e.remove({ id: "ars_nouveau:glyph_lightning", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 160,
        inputs: [
            { item: "ars_nouveau:air_essence" },
            { item: "minecraft:heart_of_the_sea" },
            { item: "iceandfire:lightning_dragon_blood" },
            { item: "minecraft:lightning_rod" },
            { item: "minecraft:lightning_rod" },
            { item: "minecraft:lightning_rod" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_lightning"
        }
        })
    .id("ars_nouveau:glyph_lightning");

    e.remove({ id: "ars_nouveau:glyph_orbit", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 160,
        inputs: [
            { item: "kubejs:void_essence" },
            { tag: "c:storage_blocks/redstone" },
            { tag: "c:storage_blocks/lapis" },
            { item: "minecraft:ender_eye" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_orbit"
        }
        })
    .id("ars_nouveau:glyph_orbit");

    e.remove({ id: "ars_nouveau:glyph_fangs", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 160,
        inputs: [
            { item: "ars_nouveau:conjuration_essence" },
            { item: "kubejs:void_essence" },
            { item: "iceandfire:sea_serpent_fang" },
            { item: "iceandfire:sea_serpent_fang" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_fangs"
        }
        })
    .id("ars_nouveau:glyph_fangs");

    e.remove({ id: "ars_elemental:glyph_conflagrate", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 160,
        inputs: [
            { item: "ars_nouveau:bombegranate_pod" },
            { item: "iceandfire:fire_dragon_blood" },
            { item: "ars_nouveau:fire_essence" },
            { item: "minecraft:gunpowder" },
        ],
        output: {
            count: 1,
            id: "ars_elemental:glyph_conflagrate"
        }
        })
    .id("ars_elemental:glyph_conflagrate");

    e.remove({ id: "ars_nouveau:glyph_blink", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 160,
        inputs: [
            { item: "ars_nouveau:manipulation_essence" },
            { item: "kubejs:void_essence" },
            { item: "minecraft:ender_pearl" },
            { item: "minecraft:ender_pearl" },
            { item: "minecraft:ender_pearl" },
            { item: "minecraft:ender_pearl" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_blink"
        }
        })
    .id("ars_nouveau:glyph_blink");

    e.remove({ id: "ars_nouveau:glyph_wither", type: "ars_nouveau:glyph" });
    e.custom({
        type: "ars_nouveau:glyph",
        count: 1,
        exp: 160,
        inputs: [
            { item: "kubejs:void_essence" },
            { item: "minecraft:wither_skeleton_skull" },
            { item: "minecraft:wither_skeleton_skull" },
            { item: "minecraft:wither_skeleton_skull" },
        ],
        output: {
            count: 1,
            id: "ars_nouveau:glyph_wither"
        }
        })
    .id("ars_nouveau:glyph_wither");
});