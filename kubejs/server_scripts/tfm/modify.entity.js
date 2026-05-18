EntityJSEvents.addGoalSelectors('born_in_chaos_v1:krampus', event => {
  event.customGoal(
    'krampus_spells', 10,
    mob => mob.getTarget() !== null,
    mob => mob.getTarget() !== null,
    true,
    mob => {}, mob => {}, true,
    mob => {
      try {
        if (mob.tickCount % 5 !== 0) return;

        var spellTarget = mob.getTarget();
        if (!spellTarget) return;

        var SpellRegistry = Java.loadClass('io.redspace.ironsspellbooks.api.registry.SpellRegistry');
        var MagicData = Java.loadClass('io.redspace.ironsspellbooks.api.magic.MagicData');
        var CastSource = Java.loadClass('io.redspace.ironsspellbooks.api.spells.CastSource');
        var magicData = MagicData.getPlayerMagicData(mob);
        var dist = mob.distanceTo(spellTarget);
        var dy = spellTarget.y - mob.y;
        var data = mob.persistentData;

        if (mob.tickCount % 20 === 0) {
          if (data.getInt('cd_sonic') > 0) data.putInt('cd_sonic', data.getInt('cd_sonic') - 1);
          if (data.getInt('cd_frost') > 0) data.putInt('cd_frost', data.getInt('cd_frost') - 1);
          if (data.getInt('cd_snow') > 0) data.putInt('cd_snow', data.getInt('cd_snow') - 1);
        }

        if (data.getInt('cd_sonic') <= 0 && (dy > 2 || (dist > 6 && !mob.getSensing().hasLineOfSight(spellTarget)))) {
          mob.lookAt(spellTarget, 30, 30);
          var spell = SpellRegistry.SONIC_BOOM_SPELL.get();
          spell.onCast(mob.level, 10, mob, CastSource.MOB, magicData);
          spell.onServerCastComplete(mob.level, 5, mob, magicData, false);
          data.putInt('cd_sonic', 10);
          return;
        }

        if (data.getInt('cd_frost') <= 0 && !mob.getSensing().hasLineOfSight(spellTarget) && dist > 4) {
          mob.lookAt(spellTarget, 30, 30);
          var spell = SpellRegistry.FROST_STEP_SPELL.get();
          spell.onCast(mob.level, 8, mob, CastSource.MOB, magicData);
          spell.onServerCastComplete(mob.level, 5, mob, magicData, false);
          data.putInt('cd_frost', 15);
          return;
        }

        if (data.getInt('cd_snow') <= 0 && dist > 3) {
        mob.lookAt(spellTarget, 30, 30);
        var spell = SpellRegistry.SNOWBALL_SPELL.get();
        spell.onCast(mob.level, 3, mob, CastSource.MOB, magicData);
        spell.onServerCastComplete(mob.level, 3, mob, magicData, false);
        data.putInt('cd_snow', 4);
      }

      } catch(e) {
        console.log(`[K spells] Erreur: ${e}`);
      }
    }
  );
});