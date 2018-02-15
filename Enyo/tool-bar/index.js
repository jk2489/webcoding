// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var Control = require('enyo/Control');

var onyx = Control.kind({
	name: "OnyxSample",
	compoents: [
		{ kind: "onyx.Toolbar", components: [
			{ content: "Toolbar" },
			{ kind: "onyx.Button", content: "Toolbar Button" }
		]},
		{ content: "Radio Group" },
		{ kind: "onyx.RadioGroup", onActivate: "activated", components: [
			{ content: "One", active: true },
			{ content: "Two" },
			{ content: "Three" }
		]},
		{ content: "Groupbox" },
		{ kind: "onyx.Groupbox", components: [
			{ kind: "onyx.GroupboxHeader", content: "Groupbox Header" },
			{ content: "Groupdbox item" }
		]},
		{ content: "ProgressBar" },
		{ kind: "onyx.ProgressBar", progress: 25 }
	],
	activated: function(inSender, inEvent) {
		//...
	}
});

ready(function() {
	new onyx().renderInto(document.body);
});
