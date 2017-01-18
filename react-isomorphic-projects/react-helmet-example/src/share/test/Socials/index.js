import React from 'react';
import Helmet from 'react-helmet';

import Instagram from './instagram';

/*Private components*/

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
					]} />
				<div className="main-layout">

					{/*Main-area*/}
					<div className="container-fluid">

						{/*Content-area*****************/}
						<div className="main-content">
							<p>{this.props.name}page</p>
							<hr />
							<Instagram />
							<hr />
						</div>
						{/*End Content-area****************/}

					</div>
					{/*End Main-area*/}
				</div>
			</div>
		);
	}
});
