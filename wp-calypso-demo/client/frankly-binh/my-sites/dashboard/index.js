/**
 * External dependencies
 */
var page = require( 'page' );

/**
 * Internal dependencies
 */
var controller = require( 'my-sites/controller' ),
	config = require( 'config' ),
	dashboardController = require( './controller' );

module.exports = function() {
	if ( true ) {
		page(
			'/dashboard',
			// dashboardController.enforceSiteEnding,
			// controller.siteSelection,
			// controller.navigation,
			dashboardController.view
		);
		// Anything else is unexpected and should be redirected to the default people management URL: /people/team
		page( '/dashboard/(.*)?', controller.siteSelection, dashboardController.view );
	}
};
