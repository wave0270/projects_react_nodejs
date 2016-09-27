import React from "react";
import Bitly from 'bitly';
let bitly = new Bitly('a3b3c203e37140ff24e679a181f912d37cb5a0a4');

var API = require('../api/common');
/*
* COMPONENTS
*/
var Loading = require('../components/Loading');



export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Fetch Content',
			html: "<b>Hello <i>World</i></b>",
		};
	},
	getInitialState: function(){
		return {
			url: 'http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181',
			isLoading: false,
			errMessage: ''
		};
	},

	callGetFetch: function(){
		this.setState({isLoading: true});
		var params = {
			url: this.state.url
		};
		API.post('/fetch', params, function(err,res){
			if(res){
				this.setState({isLoading: false, html: res.body.body, dataStr: JSON.stringify(res.body.meta)});
			}
		}.bind(this));
	},

	callGet: function(){
		this.setState({isLoading: true});
		var params = {
			url: this.state.url
		};
		API.post('/read-meta-tag', params, function(err,res){
			if(res){
				this.setState({isLoading: false, html: res.body.body, dataStr: JSON.stringify(res.body.meta)});
			}
		}.bind(this));
	},

	callGetWithJsdom: function(){
		this.setState({isLoading: true});
		var params = {
			url: this.state.url
		};
		API.post('/read-meta-tag-with-jsdom', params, function(err,res){
			console.log(res)
			if(res){
				this.setState({isLoading: false, html: res.body.body, dataStr: JSON.stringify(res.body.meta)});
			}
		}.bind(this));
	},

	callReadFile: function(){
		this.setState({isLoading: true});
		API.post('/read-file', {}, function(err,res){
			if(res){
				this.setState({isLoading: false, html: res.body.body});
			}
		}.bind(this));
	},

	callGetBitlyLink: function(){
		console.log('callGetBitlyLink')
		this.setState({isLoading: true});
		if(this.state.url){
			var params = {
				url: this.state.url
			}
			API.post('/bitly/create', params, function(err,res){
				console.log(res)
				this.setState({isLoading: false, html: '', dataStr: res.body.shortUrl});
			}.bind(this));
		}
	},

	getGeoLocation: function(){
		/*
		http://www.latlong.net/c/?lat=10.852673099999999&long=106.634553
		http://www.latlong.net/
		*/
		console.log('callGetBitlyLink')
		navigator.geolocation.getCurrentPosition(function(position){
			var p = {
				accuracy: position.coords.accuracy,
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			}
			this.setState({isLoading: false, dataStr: JSON.stringify(p)});
		}.bind(this))
	},

	handlerOnChange: function(key,e){
		this.state[key] = e.target.value;
		this.setState(this.state);
	},
	handleChange: function(evt){
      this.setState({html: evt.target.value});
  },

  render() {
      return (
        <div className="container" >
					{this.state.isLoading &&
						<Loading />
					}
					<div className="row">
						<input className="form-control" value={this.state.url} onChange={this.handlerOnChange.bind(this,'url')}/>
					</div>

					<hr />
					<div className="row">
						<div className="btn-group">
							<button onClick={this.callGet} className="btn btn-info">Get Content by: lets-get-meta</button>
							<button onClick={this.callGetFetch} className="btn btn-success">Get Content by: fetch</button>
							<button onClick={this.callGetWithJsdom} className="btn btn-success">Get Content + Jsdom</button>
							<button onClick={this.getGeoLocation} className="btn btn-info">Get Location</button>
							<button onClick={this.callReadFile} className="btn btn-success">Read file</button>
						</div>
					</div>

					<hr />
					<div className="row">
						<div className="btn-group">
							<button onClick={this.callGetBitlyLink} className="btn btn-info">Get Bit.ly link</button>
						</div>
					</div>

					<hr />
					<div className="row">
						<div className="content"> {this.state.dataStr}</div>
						<div className="content" dangerouslySetInnerHTML={{__html: this.state.html}}></div>
					</div>

        </div>
      );
  }
} );
