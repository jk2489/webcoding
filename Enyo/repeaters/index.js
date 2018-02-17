// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var Repeater = require('enyo/Repeater');

enyo.kind({
	name: "RepeaterSample",
	kind: "Scroller",
	components: [{
		kind: "Repeater",
		count: 100,
		components: [{ name: "text" }],
		onSetupItem: "setupItem",
		ontap: "tapped"
	}],
	setupItem: function(inSender, inEvent) {
		var item = inEvent.item;
		item.$.text.setContent("This is row " + inEvent.index);
		return(true);
	},
	tapped: function(inSender, inEvent) {
		//enyo.log(inEvent.index);
		this.$.text.setValue(this.item[inEvent.index]);
		return(true);
	}
});

ready(function() {
	new RepeaterSample().renderInto(document.body);
});
