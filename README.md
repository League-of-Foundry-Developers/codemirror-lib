![Code Mirror](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FLeague-of-Foundry-Developers%2Fleague-repo-status%2Fshields-endpoint%2F_CodeMirror.json)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2F_CodeMirror&colorB=4aa94a)
![Latest Release Download Count](https://img.shields.io/github/downloads/League-of-Foundry-Developers/codemirror-lib/latest/_CodeMirror.zip) 

# CodeMirror for Foundry VTT
This package includes the CodeMirror editor library. A lightweight editor that can be used as a drop-in replacement for a textarea. The editor can be configured with text highlighting for various languages.

This module also provides a small number of user configurable settings you can use when creating an editor instance to allow a degree of customization.
## Integration
Using the CM library as a dependency is very simple, this module already includes the following language modes:

```
javascript, css, xml, html, handlebars, markdown, toml, vue
```

Simply declare this module as a dependency by including the following in your manifest:

```json
"dependencies": [
    {
        "name": "_CodeMirror",
        "type": "module",
        "manifest": "https://raw.githubusercontent.com/League-of-Foundry-Developers/codemirror-lib/master/module.json"	
    }
]
```

You can now create an instance of CM in any way outlined in the CM documnetation. The simplest method is to "upgrade" a `textarea` into a CM instance, by passing a reference to the `textarea` element to the `fromTextArea` method.

```js
const editor = CodeMirror.fromTextArea(html.find("textarea")[0], { 
    mode: "javascript",             // A mode like "javascript" or "css"
    ...CodeMirror.userSettings,     // A special helper described later
    lineNumbers: true,              // CM has a number of settings you can configure
    inputStyle: "contenteditable",
    autofocus: true
});
```
This upgrades the `textarea` into a proper text editor.

CodeMirror "saves" the editor data back to the original `textarea`, however sometimes you need to explicitly tell it to save, such as immediately before submitting a form. This can be done by using the `save()` method on a CodeMirror instance. With the exampe above:

```js
editor.save();
```

This will ensure that the `textarea` has the same content as the editor. It's good to call this at some point before you parse the data of the form, allowing you to retrieve the data from the `textarea` as normal.

Another option is to save on every change, by attaching an event handler to the CM object:

```js
CodeMirror.fromTextArea(textarea, { 
    // options
}).on("change", (instance) => instance.save());
```

This may be less efficient for large inputs.

### CodeMirror.userSettings
This special getter has been added to the `CodeMirror` object, it returns an object of settings retrieved from Foundry's module settings. This includes a few editor configurations like tab type and size, or word wrap. These settings can be passed along with other options when creating an instance of a CodeMirror editor. The simplest method is to use the `...` spread operator to insert the key/value pairs of this object directly into the options:

```js
CodeMirror.fromTextArea(textarea, { 
    mode: "css",
    ...CodeMirror.userSettings,
    lineNumbers: true, // etc.
})
```

This allows the user to configer editor preferences globally, while giving you a simple way to include those settings in your instance of the editor.

# Original CodeMirror Readme

[![Build Status](https://travis-ci.org/codemirror/CodeMirror.svg)](https://travis-ci.org/codemirror/CodeMirror)
[![NPM version](https://img.shields.io/npm/v/codemirror.svg)](https://www.npmjs.org/package/codemirror)

CodeMirror is a versatile text editor implemented in JavaScript for
the browser. It is specialized for editing code, and comes with over
100 language modes and various addons that implement more advanced
editing functionality. Every language comes with fully-featured code
and syntax highlighting to help with reading and editing complex code.

A rich programming API and a CSS theming system are available for
customizing CodeMirror to fit your application, and extending it with
new functionality.

You can find more information (and the
[manual](https://codemirror.net/doc/manual.html)) on the [project
page](https://codemirror.net). For questions and discussion, use the
[discussion forum](https://discuss.codemirror.net/).

See
[CONTRIBUTING.md](https://github.com/codemirror/CodeMirror/blob/master/CONTRIBUTING.md)
for contributing guidelines.

The CodeMirror community aims to be welcoming to everybody. We use the
[Contributor Covenant
(1.1)](http://contributor-covenant.org/version/1/1/0/) as our code of
conduct.

### Installation

Either get the [zip file](https://codemirror.net/codemirror.zip) with
the latest version, or make sure you have [Node](https://nodejs.org/)
installed and run:

    npm install codemirror

**NOTE**: This is the source repository for the library, and not the
distribution channel. Cloning it is not the recommended way to install
the library, and will in fact not work unless you also run the build
step.

### Quickstart

To build the project, make sure you have Node.js installed (at least version 6)
and then `npm install`. To run, just open `index.html` in your
browser (you don't need to run a webserver). Run the tests with `npm test`.
