EntityJSEvents.attributes(event => {
  event.modify('born_in_chaos_v1:krampus', attr => {
    attr.add('irons_spellbooks:spell_power', 2.0);
    attr.add('irons_spellbooks:eldritch_spell_power', 2.0);
    attr.add('irons_spellbooks:ice_spell_power', 2.0);
  });
});