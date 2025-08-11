Hooks.once("init", function () {
  // Rename default skills for W&W
  CONFIG.DND5E.skills["ani"] = { label: "WANDS.SkillAnimal" };     // Magical Creatures
  CONFIG.DND5E.skills["arc"] = { label: "WANDS.SkillArcana" };     // Magical Theory
  CONFIG.DND5E.skills["his"] = { label: "WANDS.SkillHistory" };    // Muggle Studies
  CONFIG.DND5E.skills["nat"] = { label: "WANDS.SkillHerbology" };  // Herbology
  CONFIG.DND5E.skills["ptn"] = { label: "WANDS.SkillPotion", ability: "wis" }; // Potion Making (custom)

  // Add custom spell schools
  CONFIG.DND5E.spellSchools["cha"] = { label: "WANDS.SchoolCharms" };
  CONFIG.DND5E.spellSchools["jhc"] = { label: "WANDS.SchoolJHC" };
  CONFIG.DND5E.spellSchools["trf"] = { label: "WANDS.SchoolTransfig" };
  CONFIG.DND5E.spellSchools["hea"] = { label: "WANDS.SchoolHealing" };

  // Currency labels
  CONFIG.DND5E.currencies.pp.label = "Ruby";
  CONFIG.DND5E.currencies.gp.label = "Galleon";
  CONFIG.DND5E.currencies.sp.label = "Sickle";
  CONFIG.DND5E.currencies.cp.label = "Knut";

  // Pick the best available base class (v5 default sheet if present)
  const BaseCharSheet =
    dnd5e?.applications?.actor?.ActorSheet5eCharacter2 ??
    dnd5e?.applications?.actor?.ActorSheet5eCharacter;

  // Helper to make a themed sheet class that just adds a CSS class
  const makeTheme = (theme) =>
    class extends BaseCharSheet {
      static get defaultOptions() {
        const opts = super.defaultOptions;
        // ensure array exists (it does) then append our theme class
        opts.classes.push(theme);
        return opts;
      }
    };

  // Register your themed character sheets
  Actors.registerSheet("dnd5e", makeTheme("badger"),      { types: ["character"], makeDefault: false, label: "WANDS.Sheets.Badger" });
  Actors.registerSheet("dnd5e", makeTheme("eagle"),       { types: ["character"], makeDefault: false, label: "WANDS.Sheets.Eagle" });
  Actors.registerSheet("dnd5e", makeTheme("lion"),        { types: ["character"], makeDefault: false, label: "WANDS.Sheets.Lion" });
  Actors.registerSheet("dnd5e", makeTheme("snake"),       { types: ["character"], makeDefault: false, label: "WANDS.Sheets.Snake" });
  Actors.registerSheet("dnd5e", makeTheme("beauxbatons"), { types: ["character"], makeDefault: false, label: "WANDS.Sheets.Beauxbatons" });
  Actors.registerSheet("dnd5e", makeTheme("ilvermorny"),  { types: ["character"], makeDefault: false, label: "WANDS.Sheets.Ilvermorny" });
  Actors.registerSheet("dnd5e", makeTheme("durmstrang"),  { types: ["character"], makeDefault: false, label: "WANDS.Sheets.Durmstrang" });
});
