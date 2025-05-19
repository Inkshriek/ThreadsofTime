ServerEvents.recipes(e => {

    //Having wires just sitting around specifically for this craft is awkward so this fixes it. Electrum is easier to get anyway.
    e.replaceInput({id:"createaddition:crafting/modular_accumulator"}, 
        "createaddition:electrum_wire", "createaddition:electrum_spool"
    );

});