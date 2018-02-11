// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var Control = require('enyo/Control');

enyo.kind({
	name: "PoweredLight",
	kind: "Light",
	published: {
		powered: true
	},
	handlers: {
		"ontap": "tapped"
	},
	create: function() {
		this.inherited(arguments);
		this.poweredChanged();
	},
	tapped: function(inSender, inEvent) {
		this.setPowered(!this.getPowered());
	},
	poweredChanged: function(oldValue) {
		this.applyStyle("opacity", this.powered ? "1" : "0.2");
	}
});

var TrafficLight = Control.kind({
	name: "TrafficLight",
	components: [
		{name: "stop", kind: "Light", color: "red"},
		{name: "slow", kind: "Light", color: "yellow"},
		{name: "go", kind: "Light", color: "green"}
	]
});

ready(function() {
	new TrafficLight().renderInto(document.body);
});
