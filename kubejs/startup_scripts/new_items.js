StartupEvents.registry("item", e => {

    /*
    e.create("kinetic_matrix").maxStackSize(64)
        .tooltip("Chapter 1A");
    e.create("arcane_matrix").maxStackSize(64)
        .tooltip("Chapter 1B");
    e.create("hyperkinetic_matrix").maxStackSize(64)
        .tooltip("Chapter 3A");
    e.create("eldritch_matrix").maxStackSize(64)
        .tooltip("Chapter 3B");

    e.create("incomplete_kinetic_matrix").maxStackSize(64);
    e.create("incomplete_arcane_matrix").maxStackSize(64);
    e.create("incomplete_hyperkinetic_matrix").maxStackSize(64);
    e.create("incomplete_eldritch_matrix").maxStackSize(64);
    e.create("incomplete_bottle_of_void").maxStackSize(1);
    e.create("incomplete_fabric_of_time").maxStackSize(1);
    */
    
    e.create("peculiar_steel").maxStackSize(64);
    e.create("primordial_globule").maxStackSize(64);
    e.create("paradoxical_reactant").maxStackSize(64);
    e.create("void_essence").maxStackSize(64).rarity("rare");
    e.create("drained_void_essence_1").maxStackSize(1)
        .displayName("Slightly Drained Void Essence");
    e.create("drained_void_essence_2").maxStackSize(1)
        .displayName("Partially Drained Void Essence");
    e.create("drained_void_essence_3").maxStackSize(1)
        .displayName("Mostly Drained Void Essence");
    e.create("drained_void_essence_4").maxStackSize(1)
        .displayName("Drained Void Essence");
    e.create("timelost_figment").maxStackSize(64)
        .tooltip("Used in crafting Epochs");
    e.create("ashen_sapling").maxStackSize(64)
        .tooltip("Used for a Timelost Figment.");
    e.create("fascinating_crystal").maxStackSize(64)
        .tooltip("Used in crafting Eons");
    e.create("untold_experiences").maxStackSize(64)
        .tooltip("Used in crafting Continual Manifold");
    e.create("vision_of_the_past").maxStackSize(64)
        .tooltip("Used in crafting Continuums");
    e.create("vision_of_the_future").maxStackSize(64)
        .tooltip("Used in crafting Continuums");
    e.create("past_fragment").maxStackSize(64)
        .tooltip("Combine with other fragments into a Vision of the Past");
    e.create("future_fragment").maxStackSize(64)
        .tooltip("Combine with other fragments into a Vision of the Future");


    e.create("instant").maxStackSize(64)
        .displayName("Instant")
        .tooltip("Ephemera Tier 1");
    e.create("moment").maxStackSize(64).rarity("uncommon")
        .tooltip("Ephemera Tier 2");
    e.create("epoch").maxStackSize(64).rarity("uncommon")
        .tooltip("Ephemera Tier 3");
    e.create("eon").maxStackSize(64).rarity("uncommon")
        .tooltip("Ephemera Tier 4");
    e.create("continuum").maxStackSize(64).rarity("rare")
        .tooltip("Ephemera Tier 5");
    e.create("eternity").maxStackSize(64).rarity("epic")
        .tooltip("Ephemera Tier 6 - The end of your journey. Craftable into certain Creative items.");
    e.create("creative_spark").maxStackSize(1).rarity("epic")
        .tooltip("Used in crafting a Creative Spell Book");

    e.create("bottle_of_source").maxStackSize(64)
        .displayName("Bottle o' Source")
        .tooltip("That's a lot of magic in a little bottle.");

    e.create("incomplete_moment").maxStackSize(1).rarity("uncommon");
    e.create("incomplete_epoch").maxStackSize(1).rarity("uncommon");
    e.create("incomplete_eon").maxStackSize(1).rarity("uncommon");
    e.create("incomplete_continuum").maxStackSize(1).rarity("rare");
});

StartupEvents.registry("fluid", e => {
    
    e.create("manipulation_essence_fluid", "thin")
        .displayName("Swirling Manipulation Essence")
        .noBlock() 
        .tint(0xFFA244);
    e.create("conjuration_essence_fluid", "thin")
        .displayName("Manifesting Conjuration Essence")
        .noBlock() 
        .tint(0x41C6F2);
    e.create("abjuration_essence_fluid", "thin")
        .displayName("Intensifying Abjuration Essence")
  	    .noBlock() 
        .tint(0xE041F2);
    e.create("anima_essence_fluid", "thin")
        .displayName("Fluid Anima Essence")
        .noBlock() 
        .tint(0xA00C0C);
    e.create("water_essence_fluid", "thin")
        .displayName("Mystifying Water Essence")
        .noBlock() 
        .tint(0x1E3BCC);
    e.create("earth_essence_fluid", "thin")
        .displayName("Awaiting Earth Essence")
        .noBlock() 
        .tint(0x41F246);
    e.create("fire_essence_fluid", "thin")
        .displayName("Roaring Fire Essence")
        .noBlock() 
        .tint(0xF24141);
    e.create("air_essence_fluid", "thin")
        .displayName("Coalesced Air Essence")
        .noBlock() 
        .tint(0xC3F422);

    e.create("void_essence_fluid_pure", "thin")
        .displayName("Purified Void Essence")
        .noBlock() 
        .tint(0x05050F);
    e.create("void_essence_fluid_corrupt", "thick")
        .displayName("Corrupt Void Essence")
        .noBlock() 
        .tint(0x5DE2E7);

    e.create("continual_manifold", "thick")
        .displayName("Continual Manifold")
        .noBlock() 
        .tint(0xFFFFFF);

    e.create("condensed_source_fluid", "thick")
        .displayName("Condensed Liquefied Source")
        .noBlock() 
        .tint(0x8233F7);
});
Platform.mods.kubejs.name = "Threads of Time"