// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
//var Control = require('enyo/Control');

enyo.kind({
	name: "Heartbeat",
	events: {
		onBeat: ""
	},
	create: function() {
		this.inherited(arguments);
		this.timer = window.setInterval(heartbeat.bind(this, "beat"), 1000);
	},
	destroy: function() {
		if(this.timer !== undefined) {
			window.clearInterval(this.timer);
		}
		this.inherited(arguments);
	},
	beat: function() {
		this.doBeat({});
	}
})

enyo.kind({
	name: "App",
	components: [
		{kind: "Heartbeat", onBeat: "beat"},
		{name: "text", kind: "TextArea"}
	],
	beat: function() {
		this.$.text.setValue(this.$.text.getValue() + "tick");
	}
});

ready(function() {
	new App().renderInto(document.body);
});
