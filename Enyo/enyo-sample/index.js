// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var Control = require('enyo/Control');

var G11nSample = Control.kind({
	components: [
		{ name: "date" },
		{ name: "number" }
	],
	create: function() {
		this.inherited(arguments);
		var dateFmt = new enyo.g11n.DateFmt({ date: "short" });
		this.$.date.setContent(dateFmt.format(new Date()));
		var numFmt = new enyo.g11n.NumberFmt({ fractionDigits: 1});
		this.$.number.setContent(numFmt.format("86753.09"));
	},
	setContent: function(oldValue) {
		// add something
	}
});

ready(function() {
	new G11nSample().renderInto(document.body);
});
