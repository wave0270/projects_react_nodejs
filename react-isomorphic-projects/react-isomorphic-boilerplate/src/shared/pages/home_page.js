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
					<Helmet title="home binh title" />
          <h1>Hello { this.props.name }</h1>
        </div>
      );
  }
} );
