import ReactDom from 'react-dom';
import React from 'react';
import page from 'page';
import route from 'lib/route';
var TYPE = 'story';

export default {
	redirectToTeam() {
			page.redirect('/');
		},

		enforceSiteEnding(context, next) {
			// let siteId = route.getSiteFragment( context.path );
			//
			// if ( ! siteId ) {
			// this.redirectToTeam();
			// }

			next();
		},
		view(context) {
			view(context);
		},
};

function view(context) {
	console.log(context)
	const MainDiv = require('frankly-binh/my-sites/dashboard/main');
	ReactDom.render(React.createElement(MainDiv, {
		id: 'dashboard-container',
	}), document.getElementById('primary'));
}
