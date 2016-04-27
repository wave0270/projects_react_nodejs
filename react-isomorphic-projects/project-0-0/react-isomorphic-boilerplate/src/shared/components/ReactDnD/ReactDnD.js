import React from "react";
export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'React DnD Component',
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
