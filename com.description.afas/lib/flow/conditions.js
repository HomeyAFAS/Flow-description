"use strict";

module.exports = {
	createConditions: function () {
		Homey.manager('flow').on('condition.description', function( callback, args ){
			callback( null, true );
		});
	}
};