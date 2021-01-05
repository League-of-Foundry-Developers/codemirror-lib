// Defines a set of configuartion options for CodeMirror editors
Hooks.once("init", function () {
	const namespace ="_CodeMirror";

	const register = function(name, type, def) {
		game.settings.register(namespace, name, {
			name: game.i18n.localize(`${namespace}.settings.${name}.name`),
			hint: game.i18n.localize(`${namespace}.settings.${name}.hint`),
			scope: "world",
			config: true,
			type: type,
			default: def
		});
	}

	register("smartIndent"   , Boolean,  true);
	register("indentUnit"    , Number ,     4);
	register("tabSize"       , Number ,     4);
	register("indentWithTabs", Boolean,  true);
	register("smartIndent"   , Boolean,  true);
	register("lineWrapping"  , Boolean, false);
})