import React from "react";
import base64Img from "base64-img";
import deep from "deep-get-set";

/*
* Manual class
*/
var API = require('../api/common');
/*
* COMPONENTS
*/
var Loading = require('../components/Loading');


export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Image to Base64 Page!',
		};
	},
	getInitialState: function(){
		return {
			isLoading: false,
			imgURL: 'http://dienthoai.pro/wp-content/uploads/2016/04/hinh-anh-gai-dep-kute-nhat-1-3-301x450.jpg',
		};
	},

  handleImgBase64WithURL: function(){
    this.setState({isLoading: true});
    var params = {
      url: this.state.imgURL,
    }
		API.post('/image/base64', params, function(err,res){
      this.setState({isLoading: false, base64Str: res.body.base64Str});
		}.bind(this));
  },

  handleImgWithLocalLink: function(e){
    if(e.target.files && e.target.files.length>0){
      this.setState({isLoading: true});
      var params = {
        url: e.target.files[0],
      }
      API.post('/image/base64', params, function(err,res){
        this.setState({isLoading: false, base64Str: res.body.base64Str});
      }.bind(this));
    }
  },

	handleValue: function(path, e){
		deep(this.state, path, e.target.value);
		this.setState(this.state);
	},

  render() {
      return (
        <div className="container" >
					{this.state.isLoading &&
						<Loading />
					}
            <input className="form-control" onChange={this.handleImgWithLocalLink} type="file" name="pic" accept="image/*"/>
						<hr />
						<input className="form-control" type="text" onChange={this.handleValue.bind(this,'imgURL')} value={this.state.imgURL} />
            <button className="btn btn-primary" onClick={this.handleImgBase64WithURL}>Handle Img To Base64 With URL</button>
						<div className="container">
							<img className="panel" src={this.state.base64Str} />
						</div>
            
        </div>
      );
  }
} );
