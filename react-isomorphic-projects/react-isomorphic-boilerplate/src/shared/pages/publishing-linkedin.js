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
		if(sessionStorage.getItem('save')){
			sessionStorage.removeItem('save')
			this.setState({message: 'Post successfully'});
		}
	},
  publishing: function(){
		var that = this;
		// window.open('http://localhost:7000/linkedin/calloauth/linkedin-call');
		request.post('/linkedin-call')
			.send(this.state.post)
			.set('Accept', 'application/json')
			.end(function( error, result ) {
				if(result.body && result.body.data){
					var json = JSON.parse(result.body.data.text)
					if(json.message){
						that.setState({message: json.message });
					}else{
						that.setState({message: 'Post successfully' });
					}
				}else{
					sessionStorage.setItem('save', 'true');
					window.open('/linkedin/calloauth/publishing-linkedin', '_self');
				}
			});
  },
	handlerOnChange: function(name, event){
		var post = this.state.post;
		post.content[name] = event.target.value;
		this.setState({post: post, message: ""});
	},
	handlerOnChangeComment: function(name, event){
		var post = this.state.post;
		post[name] = event.target.value;
		this.setState({post: post, message: ""});
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
						{ this.state && this.state.message &&
							<p className="text-primary">{ this.state? this.state.message: '' }</p>
						}
						<button className="btn btn-default" onClick={ this.publishing }>Publishing</button>
				  </div>

        </div>
      );
  }
} );
