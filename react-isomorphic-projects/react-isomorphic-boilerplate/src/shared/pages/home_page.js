import React from "react";

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Home page',
		};
	},
  render() {
      return (
        <div>
          <h1>Hello { this.props.name }</h1>
        </div>
      );
  }
} );
