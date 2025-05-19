ServerEvents.recipes(e => {

    //Adjustments
    e.replaceInput({id:"occultism:ritual/craft_storage_remote"}, 
        "minecraft:ender_pearl", "kubejs:moment"
    );
    e.replaceInput({id:"occultism:ritual/craft_storage_remote"}, 
        "minecraft:quartz", "minecraft:ender_pearl"
    );
});