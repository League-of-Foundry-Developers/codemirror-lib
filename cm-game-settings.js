/** 
 * Defines a set of configuartion options for CodeMirror editors
 */
Hooks.once("init", function () {
	const namespace ="_CodeMirror";
	const settings = [];

	/**
	 * Registers a single game setting for this module.
	 *
	 * The settings is registered with the module's namespace, 
	 * and the name and hint are assigned translated values 
	 * based on the setting name.
	 *
	 * All the settings are world scoped.
	 *
	 * @param {string} name - The name of the setting, also used for .
	 * @param {type} type - The data type of the setting value.
	 * @param {Number|Boolean|String} def - The default value of the setting.
	 * @param {Boolean} include - Whether or not to include this setting in the settings array.
	 */
	const register = function(name, type, def, include) {
		game.settings.register(namespace, name, {
			name: game.i18n.localize(`${namespace}.settings.${name}.name`),
			hint: game.i18n.localize(`${namespace}.settings.${name}.hint`),
			scope: "world",
			config: true,
			type: type,
			default: def
		});
		if (include) settings.push(name);
	}

	/** 
	  * Add a getter to CodeMirror that returns an object containing all the settings
	  * from the settings array. These can be passed directly to the CM initialization.
	  */
	Object.defineProperty(CodeMirror, "userSettings", {
		get: function() { return Object.fromEntries(
			settings.map(name => [name, game.settings.get(namespace, name)])
		)}
	});


	register("macroEditor"   , Boolean, false, false);

	register("indentUnit"    , Number ,     4,  true);
	register("smartIndent"   , Boolean,  true,  true);
	register("tabSize"       , Number ,     4,  true);
	register("indentWithTabs", Boolean,  true,  true);
	register("smartIndent"   , Boolean,  true,  true);
	register("lineWrapping"  , Boolean, false,  true);


	/**
	 * When the macro config renders, if the setting to replace the editor is enabled,
	 * initialize an editor there.
	 */
	Hooks.on("renderMacroConfig", (application, html, data) => {
		if (!game.settings.get(namespace, "macroEditor")) return;

		CodeMirror.fromTextArea(html.find("textarea[name=command]")[0], { 
            mode: "javascript",
            ...CodeMirror.userSettings,
            lineNumbers: true,
            inputStyle: "contenteditable",
            autofocus: true
        }).on("change", (instance) => instance.save());
	});
});