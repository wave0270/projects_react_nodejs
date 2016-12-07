import React from "react";
import GM from "./gm-react-example";


export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Fetch Content',
			html: "<b>Hello <i>World</i></b>",
		};
	},

  render() {
      return (
        <div className="container" >
				      <GM />
        </div>
      );
  }
} );
