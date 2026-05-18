// priority: 10

function registerTFMOverworldPlacedFeatures(event) {

	// #region Etheria Features

	event.add('tfc:in_biome/surface_structures', 'tfm:etheria/ether_source')

	// #endregion

}

function registerTFMOverworldEntityTypeTags(event) {

	// Tag used by TFC to control monsters spawning on the surface
	event.add('tfc:vanilla_monsters', 'endermanoverhaul:flower_fields_enderman')
	event.add('tfc:vanilla_monsters', 'minecraft:enderman')
	event.add('tfc:vanilla_monsters', 'minecraft:husk')
	event.add('tfc:vanilla_monsters', 'minecraft:drowned')
	event.add('tfc:vanilla_monsters', 'minecraft:slime')

	event.add('tfc:deals_crushing_damage', 'minecraft:husk')
	event.add('tfc:deals_crushing_damage', 'minecraft:drowned')
	event.add('tfc:deals_crushing_damage', 'minecraft:slime')

	event.add('tfc:zombies', 'minecraft:drowned')
	event.add('tfc:zombies', 'minecraft:zombified_piglin')

	event.add('tfg:slimes', 'minecraft:slime')
	event.add('tfg:slimes', 'minecraft:magma_cube')

	event.add('enhancedai:mobs/can_mine', 'born_in_chaos_v1:krampus')

	// Tags for Totemic Integration

	event.add('totemic:buffalo_dance_targets', 'tfc:cow')

}

function registerTFMItemTagsOverworld(event) {

	// Switch to TFC Kelp

    event.add('tfm:kelps', 'tfc:plant/leafy_kelp')
	event.add('tfm:kelps', 'tfc:plant/giant_kelp_flower')
	event.add('tfm:kelps', 'tfc:plant/winged_kelp')

	// Climate Group

	const tfcColdPlants = [
		'tfc:plant/laminaria',
		'tfc:plant/shawiash',
		'tfc:plant/yellow_saxifrage',
		'tfc:plant/cornflower',
		'tfc:plant/ramunda',
		'tfc:plant/goldenrod',
		'tfc:plant/badderlocks',
		'tfc:plant/labrador_tea',
		'tfc:plant/yellow_water_lily',
		'tfc:plant/bur_reed',
		'tfc:plant/anemone_large_purple',
		'tfc:plant/edelweiss',
		'tfc:plant/tulip_white',
		'tfc:plant/allium',
		'tfc:plant/meads_milkweed',
		'tfc:plant/pulsatilla',
		'tfc:plant/tulip_pink',
		'tfc:plant/tulip_red'
	]
	tfcColdPlants.forEach(item => event.add('tfm:cold_plants', item))

	const tfcGeneralPlants = [
		'tfc:plant/orchard_grass',
		'tfc:plant/cobblestone_lichen',
		'tfc:plant/barnacles',
		'tfc:plant/starfish',
		'tfc:plant/green_algae',
		'tfc:plant/red_algae',
		'tfc:plant/ryegrass',
		'tfc:plant/saguaro_fruit',
		'tfc:plant/sea_palm',
		'tfc:plant/timothy_grass',
		'tfc:plant/cordgrass',
		'tfc:plant/dandelion',
		'tfc:plant/morning_glory',
		'tfc:plant/dry_grass',
		'tfc:plant/sago',
		'tfc:plant/artists_conk',
		'tfc:plant/cattail',
		'tfc:plant/butterfly_milkweed',
		'tfc:plant/moss',
		'tfc:plant/milfoil',
		'tfc:plant/beachgrass',
		'tfc:plant/dead_bush',
		'tfc:plant/scutch_grass',
		'tfc:plant/star_grass',
		'tfc:plant/eel_grass',
		'tfc:plant/purple_water_lily'
	]
	tfcGeneralPlants.forEach(item => event.add('tfm:general_plants', item))

	const tfcFlowersHot = [
		'tfc:plant/canna',
		'tfc:plant/anthurium',
		'tfc:plant/blood_lily',
		'tfc:plant/blue_orchid',
		'tfc:plant/hibiscus',
		'tfc:plant/nasturtium',
		'tfc:plant/pistia',
		'tfc:plant/sapphire_tower',
		'tfc:plant/snapdragon_red',
		'tfc:plant/snapdragon_white',
		'tfc:plant/snapdragon_yellow',
		'tfc:plant/tropical_milkweed',
		'tfc:plant/water_canna',
		'tfc:plant/penwortel',
		'tfc:plant/qantu',
		'tfc:plant/sunflower',
	]
	tfcFlowersHot.forEach(item => event.add('tfm:flowers_hot', item))

	const tfcFlowersArctic = [
		'tfc:plant/bear_grass',
		'tfc:plant/kinnikinnick',
		'tfc:plant/moss_campion',
	]
	tfcFlowersArctic.forEach(item => event.add('tfm:flowers_arctic', item))

	const tfcFlowersCold = [
		'tfc:plant/goldenrod',
		'tfc:plant/allium',
		'tfc:plant/bur_reed',
		'tfc:plant/labrador_tea',
		'tfc:plant/meads_milkweed',
		'tfc:plant/pulsatilla',
		'tfc:plant/tulip_pink',
		'tfc:plant/tulip_red',
		'tfc:plant/tulip_white',
		'tfc:plant/yellow_water_lily',
		'tfc:plant/edelweiss',
		'tfc:plant/ramunda',
		'tfc:plant/yellow_saxifrage',
		'tfc:plant/cornflower',
	]
	tfcFlowersCold.forEach(item => event.add('tfm:flowers_cold', item))

	const tfcFlowersTemperate = [
		'tfc:plant/perovskia',
		'tfc:plant/houstonia',
		'tfc:plant/calendula',
		'tfc:plant/marigold',
		'tfc:plant/desert_flame',
		'tfc:plant/field_horsetail',
		'tfc:plant/foxglove',
		'tfc:plant/grape_hyacinth',
		'tfc:plant/heather',
		'tfc:plant/lily_of_the_valley',
		'tfc:plant/lilac',
		'tfc:plant/lotus',
		'tfc:plant/maiden_pink',
		'tfc:plant/oxeye_daisy',
		'tfc:plant/phragmite',
		'tfc:plant/pickerelweed',
		'tfc:plant/poppy',
		'tfc:plant/primrose',
		'tfc:plant/rose',
		'tfc:plant/sacred_datura',
		'tfc:plant/sargassum',
		'tfc:plant/sea_lavender',
		'tfc:plant/trillium',
		'tfc:plant/tulip_orange',
		'tfc:plant/white_water_lily',
		'tfc:plant/yucca',
		'tfc:plant/azalea',
		'tfc:plant/buttercup',
		'hexalia:lavender',
	]
	tfcFlowersTemperate.forEach(item => event.add('tfm:flowers_temperate', item))

	const tfcFlowersTropical = [
		'tfc:plant/blue_ginger',
		'tfc:plant/black_orchid',
		'tfc:plant/heliconia',
		'tfc:plant/kangaroo_paw',
		'tfc:plant/guzmania',
		'tfc:plant/silver_spurflower',
		'tfc:plant/snapdragon_pink',
		'tfc:plant/strelitzia',
		'tfc:plant/vriesea',
		'tfc:plant/mountain_hullwort',
		'tfc:plant/palash',
		'tfc:plant/ramirezella',
		'tfc:plant/tank_bromeliad',
	]
	tfcFlowersTropical.forEach(item => event.add('tfm:flowers_tropical', item))

	const tfcFlowersGeneralist = [
		'tfc:plant/butterfly_milkweed',
		'tfc:plant/dandelion',
		'tfc:plant/morning_glory',
		'tfc:plant/purple_water_lily',
	]
	tfcFlowersGeneralist.forEach(item => event.add('tfm:flowers_generalist', item))

	const tfcLilyPad = [
		'tfc:plant/yellow_water_lily',
		'tfc:plant/white_water_lily',
		'tfc:plant/purple_water_lily']
	tfcLilyPad.forEach(item => event.add('tfm:lily_pad', item))

	// Ingot

	event.add('c:ingots', 'tfm:wood_iron')

	event.add('c:ingots/wood_iron', 'tfm:wood_iron')
	event.add('c:ingots/malignant_pewter','malum:malignant_pewter_ingot')
	event.add('c:ingots/soul_stained_steel','malum:soul_stained_steel_ingot')
	event.add('c:ingots/hallowed_gold','malum:hallowed_gold_ingot')
	event.add('c:ingots/arcane','irons_spellbooks:arcane_ingot')
	event.add('c:ingots/andesite_alloy','create:andesite_alloy')

	event.add('c:ingots/iron', "tfc:metal/ingot/wrought_iron")
	event.remove('c:ingots/iron', "minecraft:iron_ingot")

	// Mutated Clay Knapping

	event.add('tfc:mutated_clay_knapping', 'tfm:mutated_clay_ball')

}

	//#region Block Tag

	function registerTFMBlockTagsOverworld(event){

	event.removeAll('tfc:logs_that_log')

	const tfcGeneralPlants = [
		'tfc:plant/orchard_grass',
		'tfc:plant/cobblestone_lichen',
		'tfc:plant/barnacles',
		'tfc:plant/starfish',
		'tfc:plant/green_algae',
		'tfc:plant/red_algae',
		'tfc:plant/ryegrass',
		'tfc:plant/saguaro_fruit',
		'tfc:plant/sea_palm',
		'tfc:plant/timothy_grass',
		'tfc:plant/cordgrass',
		'tfc:plant/switchgrass',
		'tfc:plant/morning_glory',
		'tfc:plant/dry_grass',
		'tfc:plant/sago',
		'tfc:plant/artists_conk',
		'tfc:plant/cattail',
		'tfc:plant/butterfly_milkweed',
		'tfc:plant/moss',
		'tfc:plant/milfoil',
		'tfc:plant/beachgrass',
		'tfc:plant/dead_bush',
		'tfc:plant/scutch_grass',
		'tfc:plant/star_grass',
		'tfc:plant/eel_grass',
		'tfc:plant/purple_water_lily'
	]
	tfcGeneralPlants.forEach(block => event.add('tfm:general_plants', block))

	const tfcFlowersHot = [
		'tfc:plant/canna',
		'tfc:plant/anthurium',
		'tfc:plant/blood_lily',
		'tfc:plant/blue_orchid',
		'tfc:plant/hibiscus',
		'tfc:plant/nasturtium',
		'tfc:plant/pistia',
		'tfc:plant/sapphire_tower',
		'tfc:plant/snapdragon_red',
		'tfc:plant/snapdragon_white',
		'tfc:plant/snapdragon_yellow',
		'tfc:plant/tropical_milkweed',
		'tfc:plant/water_canna',
		'tfc:plant/penwortel',
		'tfc:plant/qantu',
		'tfc:plant/sunflower',
	]
	tfcFlowersHot.forEach(block => event.add('tfm:flowers_hot', block))

	const tfcFlowersArctic = [
		'tfc:plant/bear_grass',
		'tfc:plant/kinnikinnick',
		'tfc:plant/moss_campion',
	]
	tfcFlowersArctic.forEach(block => event.add('tfm:flowers_arctic', block))

	const tfcFlowersCold = [
		'tfc:plant/goldenrod',
		'tfc:plant/allium',
		'tfc:plant/bur_reed',
		'tfc:plant/labrador_tea',
		'tfc:plant/meads_milkweed',
		'tfc:plant/pulsatilla',
		'tfc:plant/tulip_pink',
		'tfc:plant/tulip_red',
		'tfc:plant/tulip_white',
		'tfc:plant/yellow_water_lily',
		'tfc:plant/edelweiss',
		'tfc:plant/ramunda',
		'tfc:plant/yellow_saxifrage',
		'tfc:plant/cornflower',
	]
	tfcFlowersCold.forEach(block => event.add('tfm:flowers_cold', block))

	const tfcFlowersTemperate = [
		'tfc:plant/perovskia',
		'tfc:plant/houstonia',
		'tfc:plant/calendula',
		'tfc:plant/marigold',
		'tfc:plant/desert_flame',
		'tfc:plant/field_horsetail',
		'tfc:plant/foxglove',
		'tfc:plant/grape_hyacinth',
		'tfc:plant/heather',
		'tfc:plant/lily_of_the_valley',
		'tfc:plant/lilac',
		'tfc:plant/lotus',
		'tfc:plant/maiden_pink',
		'tfc:plant/oxeye_daisy',
		'tfc:plant/phragmite',
		'tfc:plant/pickerelweed',
		'tfc:plant/poppy',
		'tfc:plant/primrose',
		'tfc:plant/rose',
		'tfc:plant/sacred_datura',
		'tfc:plant/sargassum',
		'tfc:plant/sea_lavender',
		'tfc:plant/trillium',
		'tfc:plant/tulip_orange',
		'tfc:plant/white_water_lily',
		'tfc:plant/yucca',
		'tfc:plant/azalea',
		'tfc:plant/buttercup',
	]
	tfcFlowersTemperate.forEach(block => event.add('tfm:flowers_temperate', block))

	const tfcFlowersTropical = [
		'tfc:plant/blue_ginger',
		'tfc:plant/black_orchid',
		'tfc:plant/heliconia',
		'tfc:plant/kangaroo_paw',
		'tfc:plant/guzmania',
		'tfc:plant/silver_spurflower',
		'tfc:plant/snapdragon_pink',
		'tfc:plant/strelitzia',
		'tfc:plant/vriesea',
		'tfc:plant/mountain_hullwort',
		'tfc:plant/palash',
		'tfc:plant/ramirezella',
		'tfc:plant/tank_bromeliad',
	]
	tfcFlowersTropical.forEach(block => event.add('tfm:flowers_tropical', block))

	const tfcFlowersGeneralist = [
		'tfc:plant/butterfly_milkweed',
		'tfc:plant/dandelion',
		'tfc:plant/morning_glory',
		'tfc:plant/purple_water_lily',
	]
	tfcFlowersGeneralist.forEach(block => event.add('tfm:flowers_generalist', block))

	//#region Spawning Blocks

	const tfmSpawnBlockAll = [
		'#tfc:coarse_dirt',
		'#tfc:duff',
		'#c:gravels',
		'#c:stones/raw',
		'#c:cobblestones',
		'#c:sands',
		'#tfc:grass',
		'#tfc:dirt',
		'#tfc:cold_ocean_blocks'
	]
	tfmSpawnBlockAll.forEach(block => event.add('tfm:spawn_blocks_all', block))

	const tfmSpawnBlockLand = [
		'#tfc:coarse_dirt',
		'#tfc:duff',
		'#c:gravels',
		'#c:stones/raw',
		'#c:cobblestones',
		'#tfc:grass',
		'#tfc:dirt',
		'#minecraft:snow'
	]
	tfmSpawnBlockLand.forEach(block => event.add('tfm:spawn_blocks_land', block))

	const tfmSpawnBlockShores = [
		'#c:gravels',
		'#c:sands',
		'#tfc:cold_ocean_blocks'
	]
	tfmSpawnBlockShores.forEach(block => event.add('tfm:spawn_blocks_shores', block))

}