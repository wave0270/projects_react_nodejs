import React from 'react';
import Helmet from 'react-helmet';

import Instagram from './instagram';
import GoogleMap from './googlemap';
import Youtube from './youtube';

/*Private components*/

const GOOGLEKEY = 'AIzaSyCjSMwy6zbHmfzXiaZpTxRhQKQJXFAd8vM';

export default React.createClass({
	getDefaultProps: function () {
		return {
			name: 'Social Page.'
		};
	},
	
	render: function () {
		return (
			<div className="w-pages">
				<Helmet
					title={this.props.name + " page"}
					meta={[
						{ property: 'og:title', content: 'About' },
					]} 
					script={[
						{"src": `https://maps.googleapis.com/maps/api/js?key=${GOOGLEKEY}&libraries=places`, "type": "text/javascript"},
					]}
				/>
					
				<div className="main-layout">

					{/*Main-area*/}
					<div className="container-fluid">

						{/*Content-area*****************/}
						<div className="main-content">
							<p>{this.props.name} page</p>
							<hr />
							<p>Instagram:</p>
							<Instagram />
							<hr />
							<p>GoogleMap:</p>
							<GoogleMap />
							<hr />
							<p>Youtube:</p>
							<Youtube />
						</div>
						{/*End Content-area****************/}

					</div>
					{/*End Main-area*/}
				</div>
			</div>
		);
	}
});
