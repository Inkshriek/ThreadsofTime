ServerEvents.recipes(e => {

    //Removing redundant doughs and replacing them with Create.
    e.remove({ output: "farmersdelight:wheat_dough" });
    e.remove({ output: "refurbished_furniture:dough" });
    e.replaceInput(
        { input: "farmersdelight:wheat_dough" }, 
        "farmersdelight:wheat_dough",            
        "create:dough"         
    );
    e.replaceInput(
        { input: "refurbished_furniture:dough" },
        "refurbished_furniture:dough",           
        "create:dough"         
    );
    e.remove({ id: "create:smelting/bread" });
    e.remove({ id: "create:smoking/bread" });

    //Removing Refurbished Furniture's cutting board entirely and making each combining recipe shapeless instead.
    e.remove({id:"refurbished_furniture:knife"});
    e.remove({id:"refurbished_furniture:combining/wheat_flour"});
    e.remove({id:"refurbished_furniture:combining/wheat_flour"});
    e.remove({id:"refurbished_furniture:combining/raw_meatlovers_pizza"});
    e.remove({id:"refurbished_furniture:combining/raw_vegetable_pizza"});
    e.shapeless("refurbished_furniture:raw_meatlovers_pizza", [
        "#c:foods/dough", "#c:foods/tomato", "#c:foods/cooked_beef", "#c:foods/cooked_chicken", "#c:foods/cheese"
    ]);
    e.shapeless("refurbished_furniture:raw_vegetable_pizza", [
        "#c:foods/dough", "#c:foods/tomato", "#c:crops/carrot", "#c:mushrooms", "#c:foods/cheese"
    ]);

    e.forEachRecipe({ type: "refurbished_furniture:cutting_board_combining" }, r => {
        let result = r.originalRecipeResult;
        let ingredients = r.originalRecipeIngredients;

        e.remove({ output: result });
        e.shapeless(result, ingredients);
    });
    e.forEachRecipe({ type: "refurbished_furniture:workbench_constructing" }, r => {
        let result = r.originalRecipeResult;
        if (result.toString().includes("cutting_board")) e.remove({ output: result });
    });
    e.remove({type:"refurbished_furniture:cutting_board_slicing"});

    e.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
            "item": "refurbished_furniture:cooked_meatlovers_pizza"
            }
        ],
        "result": [
            {
            "item": {
                "count": 8,
                "id": "refurbished_furniture:meatlovers_pizza_slice"
            }
            }
        ],
        "tool": {
            "tag": "c:tools/knife"
        }
    });
    e.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
            "item": "refurbished_furniture:cooked_vegetable_pizza"
            }
        ],
        "result": [
            {
            "item": {
                "count": 8,
                "id": "refurbished_furniture:vegetable_pizza_slice"
            }
            }
        ],
        "tool": {
            "tag": "c:tools/knife"
        }
    });
    e.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
            "item": "minecraft:bread"
            }
        ],
        "result": [
            {
            "item": {
                "count": 6,
                "id": "refurbished_furniture:bread_slice"
            }
            }
        ],
        "tool": {
            "tag": "c:tools/knife"
        }
    });

    //Removing Ice and Fire's copper nuggets completely in favor of Create's.
    /*
    e.remove({output: "iceandfire:copper_nugget"});
    e.remove({id: "iceandfire:copper_nuggets_to_ingot"});
    e.replaceInput(
        { input: "iceandfire:copper_nugget" }, 
        "iceandfire:copper_nugget",            
        "create:copper_nugget"        
    );
    e.replaceOutput(
        { input: "iceandfire:copper_nugget" }, 
        "iceandfire:copper_nugget",            
        "create:copper_nugget"        
    );

    e.replaceInput(
        { id:"bhc:red_heart_canister" },
        "bhc:wither_bone",            
        "iceandfire:witherbone"   
    );
    */

    //Storage Drawers
    /*
    e.forEachRecipe({ mod: "storagedrawers" }, r => {
        let result = r.originalRecipeResult;
        let resultString = result.toString();
        if ((resultString.includes("storage_upgrade") || resultString.includes("remote") || resultString.includes("controller") || resultString.includes("priority")) && resultString != "storagedrawers:creative_storage_upgrade") {
            e.remove({ output: result });
        }
    });
    */
    e.remove({id:"storagedrawers:remote_upgrade"});
    e.remove({id:"storagedrawers:remote_group_upgrade"});

    //Removing MrCrayfish's post box and mailbox.
    //This is already covered by Create 6.
    e.forEachRecipe([{ mod: "refurbished_furniture" }, { mod: "everycomp" }], r => {
        let result = r.originalRecipeResult;
        let resultString = result.toString();
        if (resultString.includes("mail_box") || resultString.includes("post_box")) {
            e.remove({ output: result });
        }
    });
});

LootJS.lootTables((e) => {
    //e.modifyBlockTables("iceandfire:copper_pile").replaceItem("iceandfire:copper_nugget", "create:copper_nugget");
    //e.modifyLootTables(LootType.CHEST).replaceItem("iceandfire:copper_nugget", "create:copper_nugget");
    //e.getLootTable("minecraft:entities/wither_skeleton")
    //    .removeItem("bhc:wither_bone")

});