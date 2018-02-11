// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var Control = require('enyo/Control');

var Light = Control.kind({
	published: {
		"color": "green"
	},
	style: "width: 50px; height: 50px; border-radius: 50%",
	create: function() {
		this.inherited(arguments);
		this.colorChanged();
	},
	colorChanged: function(oldValue) {
		this.applyStyle("background-color", this.color);
	}
});

ready(function() {
	new Light().renderInto(document.body);
});
