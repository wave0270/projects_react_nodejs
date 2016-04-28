import React from "react";

import config from '../../server/config';
import ConnectDatabase from "../components/ConnectDatabase";

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Home page',
		};
	},
  render() {
      return (
        <div>
          <img style={{width:"10px",height:"10px"}} src={config.getFullDomain()+"/src/images/cat.gif"} />
					<br/>
					<ConnectDatabase />
        </div>
      );
  }
} );
