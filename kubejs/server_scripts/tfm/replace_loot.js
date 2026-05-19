LootJS.lootTables(event => {

    //const all = event.modifyLootTables(/.*/)

    /*

    // Materials
    all.replaceItem("minecraft:coal", "tfc:ore/bituminous_coal")
    all.replaceItem("minecraft:iron_ingot", "tfc:metal/ingot/cast_iron")
    all.replaceItem("minecraft:gold_ingot", "tfc:metal/ingot/gold")
    all.replaceItem("minecraft:diamond", "tfc:gem/diamond")
    all.replaceItem("minecraft:emerald", "tfc:gem/emerald")
    all.replaceItem("minecraft:iron_nugget", "tfc:powder/hematite")
    all.replaceItem("minecraft:gold_nugget", "tfc:powder/native_gold")
    all.replaceItem("minecraft:leather", "tfc:small_raw_hide")

    // Foods
    all.replaceItem("minecraft:porkchop", "tfc:food/pork")
    all.replaceItem("minecraft:beef", "tfc:food/beef")
    all.replaceItem("minecraft:chicken", "tfc:food/chicken")
    all.replaceItem("minecraft:carrot", "tfc:food/carrot")
    all.replaceItem("minecraft:potato", "tfc:food/potato")

    // Woods
    all.replaceItem("minecraft:oak_log", "tfc:wood/log/oak")
    all.replaceItem("minecraft:spruce_log", "tfc:wood/log/spruce")
    all.replaceItem("minecraft:birch_log", "tfc:wood/log/birch")
    all.replaceItem("minecraft:acacia_log", "tfc:wood/log/acacia")
    all.replaceItem("minecraft:mangrove_log", "tfc:wood/log/mangrove")
    all.replaceItem("minecraft:jungle_log", "tfc:wood/log/hickory")
    all.replaceItem("minecraft:dark_oak_log", "tfc:wood/log/hickory")
    all.replaceItem("minecraft:cherry_log", "tfc:wood/log/hickory")

    // Items
    all.replaceItem("minecraft:shield", "tfc:metal/shield/copper")
    all.replaceItem("minecraft:fishing_rod", "tfc:metal/fishing_rod/copper")
    all.replaceItem("minecraft:bucket", "tfc:wooden_bucket")

    // Copper Tools
    all.replaceItem("minecraft:stone_pickaxe", "tfc:metal/pickaxe/copper")
    all.replaceItem("minecraft:stone_axe", "tfc:metal/axe/copper")
    all.replaceItem("minecraft:stone_hoe", "tfc:metal/hoe/copper")
    all.replaceItem("minecraft:stone_shovel", "tfc:metal/shovel/copper")
    all.replaceItem("minecraft:stone_sword", "tfc:metal/sword/copper")
    all.replaceItem("minecraft:iron_pickaxe", "tfc:metal/pickaxe/copper")
    all.replaceItem("minecraft:iron_axe", "tfc:metal/axe/copper")
    all.replaceItem("minecraft:iron_shovel", "tfc:metal/shovel/copper")
    all.replaceItem("minecraft:iron_sword", "tfc:metal/sword/copper")
    all.replaceItem("minecraft:iron_hoe", "tfc:metal/hoe/copper")
    all.replaceItem("minecraft:diamond_sword", "tfc:metal/sword/copper")
    all.replaceItem("minecraft:diamond_pickaxe", "tfc:metal/pickaxe/copper")
    all.replaceItem("minecraft:diamond_hoe", "tfc:metal/hoe/copper")

    // Copper Armour
    all.replaceItem("minecraft:leather_helmet", "tfc:metal/helmet/copper")
    all.replaceItem("minecraft:leather_chestplate", "tfc:metal/chestplate/copper")
    all.replaceItem("minecraft:leather_leggings", "tfc:metal/greaves/copper")
    all.replaceItem("minecraft:leather_boots", "tfc:metal/boots/copper")
    all.replaceItem("minecraft:chainmail_helmet", "tfc:metal/helmet/copper")
    all.replaceItem("minecraft:chainmail_chestplate", "tfc:metal/chestplate/copper")
    all.replaceItem("minecraft:chainmail_leggings", "tfc:metal/greaves/copper")
    all.replaceItem("minecraft:chainmail_boots", "tfc:metal/boots/copper")
    all.replaceItem("minecraft:iron_helmet", "tfc:metal/helmet/copper")
    all.replaceItem("minecraft:iron_chestplate", "tfc:metal/chestplate/copper")
    all.replaceItem("minecraft:iron_leggings", "tfc:metal/greaves/copper")
    all.replaceItem("minecraft:iron_boots", "tfc:metal/boots/copper")
    all.replaceItem("minecraft:diamond_helmet", "tfc:metal/helmet/copper")

    // Removing items
    all.removeItem('eidolon_repraised:pewter_ingot')

    */

    //#region Hexalia

    event.getLootTable("hexalia:chests/herbalist_hut_chest")
        .replaceItem("minecraft:amethyst_shard", "tfc:gem/amethyst")
        .removeItem("hexalia:spirit_powder")
        .removeItem("hexalia:siren_kelp")
        .removeItem("hexalia:ghost_powder")
        .createPool(pool => {
            pool.rolls(1)
            pool.when(conditions => conditions.randomChance(0.05))
            pool.addEntry(
                LootEntry.of("tfc:ore/poor_native_copper")
                    .setCount([1, 8]))
            pool.addEntry(
                LootEntry.tag("tfm:crops")
                    .setCount([1, 4]))
        })

    //#region Eidolon

    event.getLootTable("eidolon_repraised:chests/catacomb_coffin")
        .removeItem("eidolon_repraised:shadow_gem")
        .removeItem("eidolon_repraised:gold_inlay")
        .removeItem("eidolon_repraised:death_essence")

    event.getLootTable("eidolon_repraised:chests/catacomb_basic")
        .removeItem("eidolon_repraised:pewter_ingot")
        .removeItem("eidolon_repraised:death_essence")
        .removeItem("eidolon_repraised:silver_helmet")
        .removeItem("eidolon_repraised:silver_chestplate")
        .removeItem("eidolon_repraised:silver_leggings")
        .removeItem("eidolon_repraised:silver_boots")

    event.getLootTable("eidolon_repraised:chests/lab")
        .removeItem("eidolon_repraised:pewter_ingot")
        .removeItem("eidolon_repraised:fungus_sprouts")
        .removeItem("eidolon_repraised:pewter_inlay")

})