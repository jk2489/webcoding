// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var ready = require('enyo/ready');
var Control = require('enyo/Control');
var FittableRows = require('layout/FittableRows');
var CollapsingArranger = require('layout/CollapsingArranger');

var PanelsSample = Control.kind({
	//name: "PanelsSample",
	kind: "FittableRows",
	components: [
		{kind: "Panels", fit: true, arrangerKind: "CollapsingArranger", 
		classes: "panels-sample", narrowFit: false,
		components: [
			{name: "panel1", style: "background-color: blue"},
			{name: "panel2", style: "background-color: red"},
			{name: "panel3", style: "background-color: green"}
		]}
	]
});

ready(function() {
	new PanelsSample().renderInto(document.body);
});
