import React from "react";
var API = require('../api/common');

export default React.createClass( {
	componentDidMount: function(){
		if(window.location.search && window.location.search.indexOf("connectStatus=200")>=0){
			localStorage.setItem('isLinkedinConnect', 'true');
		}else{
			localStorage.setItem('isLinkedinConnect', 'false');
		}
		window.close();
	},
	render : function(){
		return (
			<div>
			</div>
		);
	}
} );
