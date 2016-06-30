import React from "react";
var API = require('../api/common');

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Fetch Content',
		};
	},
	getInitialState: function(){
		console.log('getInitialState')
		return {
			fetchUrl: 'http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181'
		};
	},
	componentDidMount: function(){
		console.log('componentWillMount')

	},
	componentWillUnmount: function(){

	},
	callGetFetch: function(){
		var that = this;
		var params = {
			fetchUrl: 'http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181'
		};
		API.post('/fetch', params, function(err,res){
			if(res){
				console.log(res.body.meta)
				that.setState({body: res.body.body});
			}
		});
	},
	callGet: function(){
		var that = this;
		var params = {
			fetchUrl: 'http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181'
		};
		API.post('/read-meta-tag', params, function(err,res){
			if(res){
				console.log(res.body.meta)
				// that.renderHtml(res.body.body)
				that.setState({body: res.body.body});
			}
		});
	},
	getGeoLocation: function(){
		navigator.geolocation.getCurrentPosition(function(position){
			console.log(position)
		})
		// Output simplified bookmark info
		// bookmarks.toJSON();
	},
	callReadFile: function(){
		var that =  this;
		API.post('/read-file', {}, function(err,res){
			if(res){
				that.setState({body: res.body.body});
				// console.log(res.body)
				// document.documentElement.innerHTML = res.body.body;
			}
		});
	},
	renderHtml: function(html){
		var myElement = document.getElementById("intro");
		document.getElementById("demo").innerHTML = html;
	},
	handlerOnChange: function(key,e){
		this.state[key] = e.target.value;
		this.setState(this.state);
	},
  render() {
      return (
        <div className="container" >
					<input value={this.state.fetchUrl} onChange={this.handlerOnChange.bind(this,'url')}/>
					<div style={{cursor:'pointer'}} className="row"><a onClick={this.callGet}>Get Content</a></div>
					<div style={{cursor:'pointer'}} className="row"><a onClick={this.callGetFetch}>Get Content By Fetch</a></div>
					<div style={{cursor:'pointer'}} className="row"><a onClick={this.getGeoLocation}>Get Location</a></div>
					<div style={{cursor:'pointer'}} className="row"><a onClick={this.callReadFile}>Read file</a></div>
					<div className="content row" dangerouslySetInnerHTML={{__html: this.state.body}}></div>
					<div id="demo"></div>
        </div>
      );
  }
} );
