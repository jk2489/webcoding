// This is the default "main" file, specified from the root package.json file
// The ready function is excuted when the DOM is ready for usage.

var Control = require('enyo/Control');
var ready = require('enyo/ready');

var HelloWorld = Control.kind({
	content: 'Hello World'
});

ready(function() {
	new HelloWorld().renderInto(document.body);
})