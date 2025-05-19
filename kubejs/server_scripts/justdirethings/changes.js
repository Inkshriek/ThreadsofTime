ServerEvents.recipes(e => {

    e.remove({id:"justdirethings:gooblock_tier1"});
    e.shaped(
        "justdirethings:gooblock_tier1", 
        [
            'BCB',
            'DAD',
            'BCB'
        ], 
        {
            A: "#minecraft:dirt", 
            B: "minecraft:clay_ball",
            C: "minecraft:sugar",
            D: "kubejs:instant",
        }
    );
    e.remove({id:"justdirethings:gooblock_tier2"});
    e.shaped(
        "justdirethings:gooblock_tier2", 
        [
            'BCB',
            'DAD',
            'BCB'
        ], 
        {
            A: "justdirethings:gooblock_tier1", 
            B: "#c:dusts/blaze",
            C: "#c:crops/nether_wart",
            D: "kubejs:moment",
        }
    );
    e.remove({id:"justdirethings:gooblock_tier3"});
    e.shaped(
        "justdirethings:gooblock_tier3", 
        [
            'BCB',
            'DAD',
            'BCB'
        ], 
        {
            A: "justdirethings:gooblock_tier2", 
            B: "#c:ender_pearls",
            C: "#c:end_stones",
            D: "kubejs:epoch",
        }
    );
    e.remove({id:"justdirethings:gooblock_tier4"});
    e.shaped(
        "justdirethings:gooblock_tier4", 
        [
            'BCB',
            'DAD',
            'BCB'
        ], 
        {
            A: "#minecraft:dirt", 
            B: "minecraft:clay_ball",
            C: "minecraft:sugar",
            D: "kubejs:instant",
        }
    );

    e.remove({id:"justdirethings:experienceholder"});
});