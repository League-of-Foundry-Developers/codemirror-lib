// Defines a set of configuartion options for CodeMirror editors
Hooks.once("init", function () {
	const namespace ="_CodeMirror";

	const name = function(setting) {
		return game.i18n.localize(`${namespace}.settings.${setting}.name`);
	}
	const hint = function(setting) {
		return game.i18n.localize(`${namespace}.settings.${setting}.hint`);
	}

	game.settings.register(namespace, "smartIndent", {
		name: name("smartIndent"),		
		hint: hint("smartIndent"),
		scope: "world",
		config: true,
		type: Boolean,
		default: true
	});
	game.settings.register(namespace, "indentUnit", {
		name: name("indentUnit"),		
		hint: hint("indentUnit"),
		scope: "world",
		config: true,
		type: Number,
		default: 4
	});
	game.settings.register(namespace, "tabSize", {
		name: name("tabSize"),		
		hint: hint("tabSize"),
		scope: "world",
		config: true,
		type: Number,
		default: 4
	});
	game.settings.register(namespace, "indentWithTabs", {
		name: name("indentWithTabs"),		
		hint: hint("indentWithTabs"),
		scope: "world",
		config: true,
		type: Boolean,
		default: true
	});
	game.settings.register(namespace, "lineWrapping", {
		name: name("lineWrapping"),		
		hint: hint("lineWrapping"),
		scope: "world",
		config: true,
		type: Boolean,
		default: false
	});
})