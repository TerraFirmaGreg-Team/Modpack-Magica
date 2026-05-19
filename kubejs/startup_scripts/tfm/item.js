// priority: 0
"use strict";

/**
 * 
 * @param {Registry.Item} event 
 */
const registerTFMItems = (event) => {

	event.create('tfm:baykok_bone')
			.texture('tfm:item/bone')

	event.create('tfm:wood_iron')
			.texture('tfm:item/ironwood_ingot')

	event.create('tfm:wood_bloom')
			.texture('tfm:item/ironwood_bloom')
			
	event.create('tfm:mutated_clay_ball')
			//.texture('tfm:item/ironwood_ingot')

	event.create('tfm:conifer_rosin_ball')
			.texture('tfm:item/conifer_rosin')

	event.create('tfm:shrouded_resin_ball')
			.texture('tfm:item/shrouded_resin')

	event.create('tfm:sticky_resin_ball')
			.texture('tfm:item/sticky_resin')

	event.create('tfm:white_resin_ball')
			.texture('tfm:item/white_resin')

	event.create('tfm:spring_node')
			.texture('tfm:item/spring_node')

	event.create('tfm:celestial_bronze')
			.texture('tfm:item/celestial_bronze')

	event.create('tfm:mundane_bronze')
			.texture('tfm:item/mundane_bronze')

}