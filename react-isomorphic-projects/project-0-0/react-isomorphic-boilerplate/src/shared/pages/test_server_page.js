import React from "react";

import config from '../../server/config';

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Home page',
		};
	},
  render() {
      return (
        <div>
          <img src={config.getFullDomain()+"/src/images/cat.gif"} />
        </div>
      );
  }
} );
