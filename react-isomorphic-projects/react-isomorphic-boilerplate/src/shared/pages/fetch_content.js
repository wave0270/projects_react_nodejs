import React from "react";
var API = require('../api/common');
// var rawBookmarks = require('~/.mozilla/firefox/profile-id/bookmarkbackups/bookmarks-YYYY-MM-DD.json');
// var BookmarkCollection = require('firefox-bookmarks');
// var bookmarks = new BookmarkCollection(rawBookmarks);

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
					<div className="row"><a onClick={this.callGet}>Get Content</a></div>
					<div className="row"><a onClick={this.callGetFetch}>Get Content By Fetch</a></div>
					<div className="row"><a onClick={this.getGeoLocation}>Get Location</a></div>
					<div className="content row" dangerouslySetInnerHTML={{__html: this.state.body}}></div>
					<div id="demo"></div>
        </div>
      );
  }
} );
