import React from "react";
var request = require('superagent');

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'ConnectDatabase Component',
		};
	},
	getInitialState: function(){
		return{
			data: ""
		}
	},
  getContent: function(){
    console.log("getContent")
		var that = this;
    request.get('http://localhost:1338/parse/classes/MenuItem')
    .set("X-Parse-Application-Id","Value-ID-X-Parse-Application")
    .set("Content-Type","application/json")
    .end(function(err, res){
			var data = "No data";
			if(res && res.body && res.body.results && res.body.results.length>0){
				var l = res.body.results.length;
				data = JSON.stringify(res.body.results[l-1]);
			}
			that.setState({data: data});
      console.log(res)
    });
  },
	addContent: function(){
		var date = JSON.stringify(new Date());
		request.post('http://localhost:1338/parse/classes/MenuItem')
		.send({date: date})
    .set("X-Parse-Application-Id","Value-ID-X-Parse-Application")
    .set("Content-Type","application/json")
    .end(function(err, res){
			// var data = "No data";
			// if(res && res.body && res.body.results && res.body.results.length>0){
			// 	var l = res.body.results.length;
			// 	data = JSON.stringify(res.body.results[l-1]);
			// }
			// that.setState({data: data});
      console.log(res)
    });
	},
  render() {
      return (
        <div>
          <button onClick={ this.getContent }> Get Data </button>
					{ this.state.data }
					<br/>
					<button onClick={ this.addContent }> add Data </button>
					<br/>
					<button onClick={ this.updateContent }> update Data </button>
					<br/>
					<button onClick={ this.deleteContent }> delete Data </button>
      </div>
      );
  }
} );
