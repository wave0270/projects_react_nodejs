import React from "react";

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Define User Component',
		};
	},

  showNavigation: function(){
    var arr = [];
    for(var k in navigator){
      if(typeof(navigator[k]) !== "function"){
        var item = <p className>{ typeof(navigator[k])+k+" : " + JSON.stringify(navigator[k])}</p>;
        arr.push(item);
      }else{
        // console.log(typeof(navigator[k])+k+":")
      }
    }
    return arr;
  },
  render() {
      return (
        <div>
          <h1>Hello { this.props.name }</h1>
            {this.showNavigation().map(function(item) {
                return item;
            })}
        </div>
      );
  }
} );
