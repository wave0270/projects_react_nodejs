import React from "react";
import request from 'superagent';

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
			}
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
				window.history.pushState('object or string', 'Title', '/publishing-linkedin');
			}
		}
	},
	componentWillUnmount: function(){
		console.log('componentWillUnMount')
		if(sessionStorage.getItem('save')){
			sessionStorage.removeItem('save')
		}
	},
  publishing: function(){
		this.setState({message: ''});
		var that = this;
		request.post('/linkedin-call')
			.send(this.state)
			.set('Accept', 'application/json')
			.end(function( error, result ) {
				sessionStorage.setItem('save', 'true');
				window.open('/linkedin/calloauth/publishing-linkedin', '_self');
				// if(result.body && result.body.data){
				// 	var json = JSON.parse(result.body.data.text)
				// 	if(json.message){
				// 		that.setState({message: json.message });
				// 	}else{
				// 		that.setState({message: 'Post successfully' });
				// 	}
				// }else{
				// 	sessionStorage.setItem('save', 'true');
				// 	window.open('/linkedin/calloauth/publishing-linkedin', '_self');
				// }
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
        <div className="container">
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
						{ this.state && this.state.status && this.state.status==='201' &&
							<p className="text-primary">Push successfully!</p>
						}
						{ this.state && this.state.status && this.state.status==='400' &&
							<p className="text-danger">Do not post duplicate content!</p>
						}
						{ this.state && this.state.status && this.state.status!=='400' && this.state.status!=='201' &&
							<p className="text-danger">Push unsuccessfully!</p>
						}
						<button className="btn btn-default" onClick={ this.publishing }>Publishing</button>
				  </div>

        </div>
      );
  }
} );
