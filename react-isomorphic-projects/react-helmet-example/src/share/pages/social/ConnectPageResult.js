import React from "react";

/*listen event*/
// var ee = require('event-emitter');
// var emitter = ee({}), listener;


export default React.createClass( {
	componentDidMount: function(){
		if(window.location.search && window.location.search.indexOf("connectStatus=200")>=0){
			localStorage.setItem('isLinkedinConnect', 'true');
		}else{
			// emitter.emit('isLinkedinConnect', false);
			localStorage.setItem('isLinkedinConnect', 'false');
		}
		window.close();
	},
	render : function(){
		return (
			<div>
				connecting
			</div>
		);
	}
} );
