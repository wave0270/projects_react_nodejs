import React from "react";
import Bitly from 'bitly';
let bitly = new Bitly('a3b3c203e37140ff24e679a181f912d37cb5a0a4');

var API = require('../api/common');

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Fetch Content',
		};
	},
	getInitialState: function(){
		return {
			url: 'http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181'
		};
	},

	callGetFetch: function(){
		var params = {
			url: this.state.url
		};
		API.post('/fetch', params, function(err,res){
			if(res){
				this.setState({body: res.body.body, dataStr: JSON.stringify(res.body.meta)});
			}
		}.bind(this));
	},

	callGet: function(){
		var params = {
			url: this.state.url
		};
		API.post('/read-meta-tag', params, function(err,res){
			if(res){
				this.setState({body: res.body.body, dataStr: JSON.stringify(res.body.meta)});
			}
		}.bind(this));
	},

	callReadFile: function(){
		API.post('/read-file', {}, function(err,res){
			if(res){
				this.setState({body: res.body.body});
			}
		}.bind(this));
	},

	callGetBitlyLink: function(){
		console.log('callGetBitlyLink')
		if(this.state.url){
			var params = {
				url: this.state.url
			}
			API.post('/bitly/create', params, function(err,res){
				console.log(res)
				this.setState({body: '', dataStr: res.body.shortUrl});
			}.bind(this));
		}
	},

	getGeoLocation: function(){
		navigator.geolocation.getCurrentPosition(function(position){
			var p = {
				accuracy: position.coords.accuracy,
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			}
			this.setState({dataStr: JSON.stringify(p)});
		}.bind(this))
	},

	handlerOnChange: function(key,e){
		this.state[key] = e.target.value;
		this.setState(this.state);
	},
  render() {
      return (
        <div className="container" >
					<input className="form-control" value={this.state.url} onChange={this.handlerOnChange.bind(this,'url')}/>
					<br />
					<div className="btn-group">
						<button onClick={this.callGet} className="btn btn-info">Get Content by: lets-get-meta</button>
						<button onClick={this.callGetFetch} className="btn btn-success">Get Content by: fetch</button>
						<button onClick={this.getGeoLocation} className="btn btn-info">Get Location</button>
						<button onClick={this.callReadFile} className="btn btn-success">Read file</button>
					</div>
					<br />
					<div className="btn-group">
						<button onClick={this.callGetBitlyLink} className="btn btn-info">Get Bit.ly link</button>
					</div>
					<div className="content row"> {this.state.dataStr}</div>
					<div className="content row" dangerouslySetInnerHTML={{__html: this.state.body}}></div>
        </div>
      );
  }
} );
