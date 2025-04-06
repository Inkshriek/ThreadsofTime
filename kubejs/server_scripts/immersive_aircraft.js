ServerEvents.recipes(e => {
    e.remove({id:"immersive_aircraft:propeller"});
    e.shaped(
        "immersive_aircraft:propeller", 
        [
            'AA ',
            ' B ',
            ' AA'
        ], 
        {
            A: "create:iron_sheet", 
            B: "create:andesite_alloy"
        }
    );
    e.remove({id:"immersive_aircraft:enhanced_propeller"});
    e.shaped(
        "immersive_aircraft:enhanced_propeller", 
        [
            ' A ',
            'ABA',
            ' A '
        ], 
        {
            A: "create:brass_sheet", 
            B: "create:andesite_alloy"
        }
    );
    e.remove({id:"immersive_aircraft:sail"});
    e.shaped(
        "immersive_aircraft:sail", 
        [
            'AB',
            'AB'
        ], 
        {
            A: "#minecraft:wool", 
            B: "minecraft:stick"
        }
    );
    e.remove({id:"immersive_aircraft:industrial_gears"});
    e.shaped(
        "immersive_aircraft:industrial_gears", 
        [
            ' AA',
            'BCA',
            'BB '
        ], 
        {
            A: "minecraft:iron_ingot", 
            B: "minecraft:copper_ingot",
            C: "create:andesite_alloy",
        }
    );
    e.remove({id:"immersive_aircraft:sturdy_pipes"});
    e.shaped(
        "immersive_aircraft:sturdy_pipes", 
        [
            '  B',
            'ABA',
            'B  '
        ], 
        {
            A: "minecraft:copper_ingot", 
            B: "create:iron_sheet",
        }
    );
    
});
