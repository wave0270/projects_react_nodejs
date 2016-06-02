import React from "react";
var API = require('../api/common');

export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Publishing Linkedin page',
		};
	},
	getInitialState: function(){

		console.log('getInitialState')
		return {
			config: {
	      client_id: "75hebds55kuzda",
	      client_secret: "E3fleb4ZN96CYKXb",
	      redirect_uri: ""
	    },
			post: {
	      "comment": "",
	      "content": {
	        "title": "",
	        "description": "",
	        "submitted-url": "http://khoahoc.tv/dong-dat-72-do-richter-o-ecuador-72888",
	        "submitted-image-url": "http://7428.net/wp-content/uploads/2014/02/Valentines-Day-I-Love-You-Vector.jpg"
	      },
	      "visibility": {
	        "code": "anyone"
	      }
			},
			isLoading: false
		};
	},
	componentDidMount: function(){
		console.log('componentWillMount')
		this.state.config.redirect_uri = window.location.origin+"/linkedin/oauth/callback";
		if(sessionStorage.getItem('save')){
			sessionStorage.removeItem('save')
			if(window && window.location.search){
				var res = window.location.search.slice(1, window.location.search.length);
				var arr = res.split('=')
				this.setState({status: arr[1] });
				window.history.pushState('object or string', 'Title', '/linkedin-publishing');
			}
		}
	},
	componentWillUnmount: function(){
		console.log('componentWillUnMount')
		if(sessionStorage.getItem('save')){
			sessionStorage.removeItem('save')
		}
	},

	callSharing: function(){
		this.setState({isLoading: true});
		var that = this;
		var params = {
			method: 'post',
			key: 'post-share',
			post: this.state.post
		}
		API.post('/linkedin-call', params, function(err,res){
			console.log(res)
			if(res.body && res.body.response){
				switch(res.body.response.status){
					case 201:
						var msg ='Linkedin post successfully!'+res.body.response.text ;
						var isMessage = 'success'
						window.open(JSON.parse(res.body.response.text).updateUrl,'_blank');
						break;
					default:
						var isMessage = 'error';
						var msg = JSON.parse(res.body.response.text).message;
				}
				that.setState({message: msg,isMessage: isMessage,isLoading: false});
			}
		});
  },
	callShareToCompany: function(){
		this.setState({isLoading: true});
		var that = this;
		var params = {
			method: 'post',
			key: 'post-company',
			post: this.state.post
		}
		API.post('/linkedin-call-id', params, function(err,res){
			console.log(res)
			if(res.body && res.body.response){
				switch(res.body.response.status){
					case 201:
						var msg ='Linkedin post successfully!'+res.body.response.text ;
						var isMessage = 'success';
						window.open(JSON.parse(res.body.response.text).updateUrl,'_blank');
						break;
					default:
						var isMessage = 'error';
						var msg = JSON.parse(res.body.response.text).message;
				}
				that.setState({message: msg,isMessage: isMessage,isLoading: false});
			}
		});
  },
	callGet: function(key){
		this.state[key] = '';
		this.setState({isLoading: true});
		var that = this;
		var params = {
			method: 'get',
			key: 'get-'+key
		}
		API.post('/linkedin-call', params, function(err,res){
			console.log(res)
			if(res.body && res.body.response){
				switch(res.body.response.status){
					case 200:
						var msg = res.body.response.text;
						var isMessage = 'success'
						break;
					default:
						var isMessage = 'error';
						var msg = res.body.response.text;
				}
				that.setState({message: msg,isMessage: isMessage,isLoading: false});
			}
		});
	},
	handlerOnChange: function(name, event){
		var post = this.state.post;
		post.content[name] = event.target.value;
		this.setState({post: post, status: ""});
	},
	handlerOnChangeComment: function(name, event){
		var post = this.state.post;
		post[name] = event.target.value;
		this.setState({post: post, status: ""});
	},
  render() {
      return (
        <div className="container" >
					{ this.state && this.state.isMessage==='success' && !this.state.isLoading &&
						<p className="text-primary">{this.state.message} </p>
					}
					{ this.state && this.state.isMessage==='error' && !this.state.isLoading &&
						<p className="text-danger">{this.state.message}</p>
					}
          <h1>{ this.props.name }</h1>
					<div className="form-group">
				    <label htmlFor="">Title:</label>
				    <input className="form-control" placeholder="Title" value={ this.state.post.content.title } onChange={ this.handlerOnChange.bind(this,'title')}/>
				  </div>
					<div className="form-group">
				    <label htmlFor="">Description:</label>
				    <input className="form-control" placeholder="Description" value={ this.state.post.content.description } onChange={ this.handlerOnChange.bind(this,'description')} />
				  </div>
					<div className="form-group">
				    <label htmlFor="">Image Link:</label>
				    <input className="form-control" placeholder="Image" value={ this.state.post.content['submitted-image-url'] } onChange={ this.handlerOnChange.bind(this,'submitted-image-url')} />
				  </div>
					<div className="form-group">
				    <label htmlFor="">Link:</label>
				    <input className="form-control" placeholder="Link" value={ this.state.post.content['submitted-url'] } onChange={ this.handlerOnChange.bind(this,'submitted-url')} />
				  </div>
					<div className="form-group">
				    <label htmlFor="">Comment:</label>
				    <input className="form-control" placeholder="Comment" value={ this.state.post.comment } onChange={ this.handlerOnChangeComment.bind(this,'comment')} />
				  </div>
					<div className="form-group">

						<button className="btn btn-default" onClick={ this.callSharing } disabled={this.state.isLoading}>Share </button>
						<button className="btn btn-default" onClick={ this.callShareToCompany } disabled={this.state.isLoading}>Share to Company</button>
						<hr />
						<p>Profile:</p>
						<button className="btn btn-default" onClick={ this.callGet.bind(this,'profile')} disabled={this.state.isLoading}>Get profile</button>
						<p>Company:</p>
						<button className="btn btn-default" onClick={ this.callGet.bind(this,'companies')} disabled={this.state.isLoading}>Get companies</button>
				  </div>
        </div>
      );
  }
} );
