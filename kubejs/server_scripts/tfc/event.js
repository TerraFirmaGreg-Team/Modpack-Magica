// priority: 0
"use strict";

function registerTFCEvents(event) {

    registerTFCDamageResistence(event)

    event.heat({
            ingredient: 'eidolon_repraised:lead_ingot',
            heatCapacity: 2.1
        }, 'tfm:lead_ingot')


    event.fluidHeat({
        fluid: 'tfm:metal/lead',
        meltTemperature: 1550,
        specificHeatCapacity: 0.023
    }, 'tfm:lead')

    event.heat({
            ingredient: 'tfm:wood_iron',
            heatCapacity: 0.5
        }, 'tfm:wood_iron')

    event.heat({
            ingredient: 'eidolon_repraised:pewter_ingot',
            heatCapacity: 2.5
        }, 'tfm:pewter_ingot')

    event.heat({
            ingredient: 'tfm:mundane_bronze',
            heatCapacity: 2.5
        }, 'tfm:mundane_bronze')


    event.fluidHeat({
        fluid: 'tfm:wood_iron',
        meltTemperature: 1550,
        specificHeatCapacity: 0.008571429
    }, 'tfm:wood_iron')

    event.knappingType({
        inputItem: Ingredient.of('tfm:mutated_clay_ball', 5),
        amountToConsume: 5,
        clickSound: 'minecraft:entity.warden.roar',
        icon: 'tfm:mutated_clay_ball',
        spawnsParticles: true
    }, 'tfm:mutated_clay')


}