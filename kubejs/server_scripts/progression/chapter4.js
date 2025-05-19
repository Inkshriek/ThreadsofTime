ServerEvents.recipes(e => {
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:epoch"},
        "loops": 1,
        "results": [{"id": "kubejs:eon"}],
        "sequence": [
        {
            "type": "create:deploying",
            "ingredients": [
            {"item": "kubejs:incomplete_eon"},
            {"item": "justdirethings:time_crystal"}
            ],
            "results": [{"id": "kubejs:incomplete_eon"}]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {"item": "kubejs:incomplete_eon"},
            {"item": "justdirethings:time_crystal"}
            ],
            "results": [{"id": "kubejs:incomplete_eon"}]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {"item": "kubejs:incomplete_eon"},
            {"item": "tempad:chronon_battery"}
            ],
            "results": [{"id": "kubejs:incomplete_eon"}]
        },
        ],
        "transitional_item": {"id": "kubejs:incomplete_eon"}
    });
});