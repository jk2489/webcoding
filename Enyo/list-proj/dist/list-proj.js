(function (scope, bundled) {
	
	var   enyo     = scope.enyo || (scope.enyo = {})
		, manifest = enyo.__manifest__ || (defineProperty(enyo, '__manifest__', {value: {}}) && enyo.__manifest__)
		, exported = enyo.__exported__ || (defineProperty(enyo, '__exported__', {value: {}}) && enyo.__exported__)
		, require  = enyo.require || (defineProperty(enyo, 'require', {value: enyoRequire}) && enyo.require)
		, local    = bundled()
		, entries;

	// below is where the generated entries list will be assigned if there is one
	entries = ['index'];


	if (local) {
		Object.keys(local).forEach(function (name) {
			var value = local[name];
			if (manifest.hasOwnProperty(name)) {
				if (!value || !(value instanceof Array)) return;
			}
			manifest[name] = value;
		});
	}

	function defineProperty (o, p, d) {
		if (Object.defineProperty) return Object.defineProperty(o, p, d);
		o[p] = d.value;
		return o;
	}
	
	function enyoRequire (target) {
		if (!target || typeof target != 'string') return undefined;
		if (exported.hasOwnProperty(target))      return exported[target];
		var   request = enyo.request
			, entry   = manifest[target]
			, exec
			, map
			, ctx
			, reqs
			, reqr;
		if (!entry) throw new Error('Could not find module "' + target + '"');
		if (!(entry instanceof Array)) {
			if (typeof entry == 'object' && (entry.source || entry.style)) {
				throw new Error('Attempt to require an asynchronous module "' + target + '"');
			} else if (typeof entry == 'string') {
				throw new Error('Attempt to require a bundle entry "' + target + '"');
			} else {
				throw new Error('The shared module manifest has been corrupted, the module is invalid "' + target + '"');
			}
		}
		exec = entry[0];
		map  = entry[1];
		if (typeof exec != 'function') throw new Error('The shared module manifest has been corrupted, the module is invalid "' + target + '"');
		ctx  = {exports: {}};
		if (request) {
			if (map) {
				reqs = function (name) {
					return request(map.hasOwnProperty(name) ? map[name] : name);
				};
				defineProperty(reqs, 'isRequest', {value: request.isRequest});
			} else reqs = request;
		}
		reqr = !map ? require : function (name) {
			return require(map.hasOwnProperty(name) ? map[name] : name);
		};
		exec(
			ctx,
			ctx.exports,
			scope,
			reqr,
			reqs
		);
		return exported[target] = ctx.exports;
	}

	// in occassions where requests api are being used, below this comment that implementation will
	// be injected
	

	// if there are entries go ahead and execute them
	if (entries && entries.forEach) entries.forEach(function (name) { require(name); });
})(this, function () {
	// this allows us to protect the scope of the modules from the wrapper/env code
	return {'index':[function (module,exports,global,require,request){
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

}]
	};

});
//# sourceMappingURL=list-proj.js.map