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
		// console.log(this)
		return {
			headline: 'state-headline value'
		};
	},
    render() {
        return (
          	<div>
							JSX PAGE - { this.state.headline }
          	</div>
        );
    }
} );
