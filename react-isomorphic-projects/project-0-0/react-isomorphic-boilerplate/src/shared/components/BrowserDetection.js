import React from "react";

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Define User Component',
		};
	},

  showNavigation: function(){
		this.showLocation();
    var arr = [];
		console.log("navigator: ")
		console.log(navigator)
    for(var k in navigator){
			var type = typeof(navigator[k]);
      if(type !== "function" && type !== "object"){
        var item = <div className="row"><div className="col-sm-3">{ typeof(navigator[k])+k+" : "} </div><div className="col-sm-9">{ JSON.stringify(navigator[k])}</div></div>;
        arr.push(item);
      }
    }
    return arr;
  },
	showLocation: function(){
		console.log(window)
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
