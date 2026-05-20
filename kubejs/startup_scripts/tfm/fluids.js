const registerTFGFluids = (event) => {

const $SoundActions = Java.loadClass('net.neoforged.neoforge.common.SoundActions')
const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

	//#region Metal

	event.create('tfm:wood_iron')
		.stillTexture('tfm:block/fluids/fluid.wood_iron')
        .flowingTexture('tfm:block/fluids/fluid.wood_iron')

	event.create('tfm:metal/mundane_bronze', 'thick')
		.tint(0x191F28)
		//.noBlock()
		.tag('c:molten_mundane_bronze')
		.tag('tfchotornot:hot_whitelist')
		.tag('tfc:usable_in_ingot_mold')
		.tag('tfc:molten_metals')
		.tag('tfchotornot:fluid_whitelist')
		.type(type => type
			.renderType(3)
			)

	//#region Resin

	event.create('tfm:metal/lead', 'thick')
		.tint(0x4f7cc4)
		//.noBlock()
		.tag('c:molten_lead')
		.tag('tfchotornot:hot_whitelist')
		.tag('tfc:usable_in_ingot_mold')
		.tag('tfc:molten_metals')
		.tag('tfchotornot:fluid_whitelist')
		.type(type => type
			.renderType(3)
			)

  	event.create('tfm:pine_resin', 'thin')
		.tint(0xFFBF00)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.tag('firmalife:usable_in_vat')
		.tag('tfc:usable_in_pot')
		.tag('tfc:usable_in_wooden_bucket')
		.tag('tfc:usable_in_blue_steel_bucket')
		.tag('tfc:usable_in_red_steel_bucket')
		.type(type => type
			.renderType(3)
			)

	event.create('tfm:conifer_rosin', 'thin')
		.tint(0xfce18d)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.tag('firmalife:usable_in_vat')
		.tag('tfc:usable_in_pot')
		.tag('tfc:usable_in_wooden_bucket')
		.tag('tfc:usable_in_blue_steel_bucket')
		.tag('tfc:usable_in_red_steel_bucket')
		.type(type => type
			.renderType(3)
			)

	event.create('tfm:aged_conifer_rosin', 'thick')
		.tint(0xfce18d)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.tag('firmalife:usable_in_vat')
		.tag('tfc:usable_in_pot')
		.tag('tfc:usable_in_wooden_bucket')
		.tag('tfc:usable_in_blue_steel_bucket')
		.tag('tfc:usable_in_red_steel_bucket')
		.type(type => type
			.renderType(3)
			)

	event.create('tfm:sticky_resin', 'thin')
		.tint(0xf5533d)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.tag('firmalife:usable_in_vat')
		.tag('tfc:usable_in_pot')
		.tag('tfc:usable_in_wooden_bucket')
		.tag('tfc:usable_in_blue_steel_bucket')
		.tag('tfc:usable_in_red_steel_bucket')
		.type(type => type
			.renderType(3)
			)

	event.create('tfm:dusky_resin', 'thin')
		.tint(0x401812)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.tag('firmalife:usable_in_vat')
		.tag('tfc:usable_in_pot')
		.tag('tfc:usable_in_wooden_bucket')
		.tag('tfc:usable_in_blue_steel_bucket')
		.tag('tfc:usable_in_red_steel_bucket')
		.type(type => type
			.renderType(3)
			)

	event.create('tfm:white_resin', 'thin')
		.tint(0xf2eae9)
		//.noBlock()
		.tag('tfc:usable_in_barrel')
		.tag('firmalife:usable_in_vat')
		.tag('tfc:usable_in_pot')
		.tag('tfc:usable_in_wooden_bucket')
		.tag('tfc:usable_in_blue_steel_bucket')
		.tag('tfc:usable_in_red_steel_bucket')
		.type(type => type
			.renderType(3)
			)

}