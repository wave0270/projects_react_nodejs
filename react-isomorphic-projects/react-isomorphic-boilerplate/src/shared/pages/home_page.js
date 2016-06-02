import React from "react";
import Helmet from "react-helmet";

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Home page',
		};
	},
  render() {
      return (
        <div>
					<Helmet
								htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
								title="My Title"
								titleTemplate="MySite.com - %s"/>
          <h1>Hello { this.props.name }</h1>
        </div>
      );
  }
} );
