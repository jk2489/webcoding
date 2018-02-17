// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var Control = require('enyo/Control');
var kind = require('enyo/kind');
var List = require('layout/List');
var Input = require('enyo/Input');

var ListSample = Control.kind({
	//name: "ListSample",
	kind: "List",
	count: 1000,
	items: [],
	handlers: {
		onSetupItem: "setupItem"
	},
	components: [
		{ name: "text", kind: "Input", ontap: "tapped", onchange: "changed", onblur: "blur" }
	],
	create: function() {
		this.inherited(arguments);
		for(var i = 0; i < this.count; i++) {
			this.items[i] = "This is row " + i;
		}
	},
	setupItem: function(inSender, inEvent) {
		this.$.text.setValue(this.items[inEvent.index]);
		return(true);
	},
	tapped: function(inSender, inEvent) {
		this.prepareRow(inEvent.index);
		this.$.text.setValue(this.items[inEvent.index]);
		this.$.text.focus();
		return(true);
	},
	changed: function(inSender, inEvent) {
		this.items[inEvent.index] = inSender.getValue();
	},
	blur: function(inSender, inEvent) {
		this.lockRow();
	}
});

ready(function() {
	new ListSample().renderInto(document.body);
});
