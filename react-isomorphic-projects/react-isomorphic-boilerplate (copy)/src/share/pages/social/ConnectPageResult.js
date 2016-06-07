import React from "react";

export default React.createClass( {
	componentDidMount: function(){

		if(window.location.search && window.location.search.indexOf("connectStatus=200")>=0){

			localStorage.setItem('isLinkedinConnect', 'true');
		}else{
			localStorage.setItem('isLinkedinConnect', 'false');
		}
		// console.log(localStorage.getItem('isLinkedinConnect'))
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
