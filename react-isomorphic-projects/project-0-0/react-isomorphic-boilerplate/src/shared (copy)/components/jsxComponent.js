import React from 'react';
/**
 * Internal dependencies
 */

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'New Story !',
			headline: 'default headline value'
		};
	},
	getInitialState: function() {
		return {
			headline: 'state-headline value'
		};
	},
    render() {
        return (
          	<div>
							New Story - { this.state.headline }
          	</div>
        );
    }
} );
