/**
 * External Dependencies
 */
var React = require( 'react' ),
	DeepLinkedStateMixin = require('react-deep-link-state'),
	classNames = require( 'classnames' ),
	noop = require( 'lodash/noop' ),
	linkedinAPI = require( 'frankly/api-callback/linkedin-api' ),
	notices = require( 'notices' );

/**
 * Internal Dependencies
 */
var FormLabel = require( 'components/forms/form-label' ),
		SocialConnect = require( './connect' ),
		SocialMixin = require( './mixin' );

var SocialLinkedIn = React.createClass( {
	displayName: 'SocialLinkedIn',

	mixins: [
		DeepLinkedStateMixin,
		SocialMixin
	],
	componentWillMount: function(){
		var that = this;
		linkedinAPI.getProfile(null,function(err,res){
			if(!err){
				that.setState({profile: res.body.data,isConnect: true});
			}
		});
	},
	getInitialState: function(){
		console.log('getInitialState')
		var post = {
	      "comment": "comment",
	      "content": {
	        "title": this.props.story.socialMetaData.name,
	        "description": this.props.story.socialMetaData.description,
	        "submitted-url": this.props.story.socialMetaData.link,
	        "submitted-image-url": this.props.story.socialMetaData.pictures.length>0? this.props.story.socialMetaData.pictures[0]: 'https://www.akamai.com/us/en/multimedia/images/logo/worldnow-logo.jpg'
	      },
	      "visibility": {
	        "code": "anyone"
	      }
			}
		return {
			post: post
		};
	},
	sharing: function(){
		if(!this.state.isConnect){
			return false;
		}
		var that = this;
		var params = {
			post: this.state.post
		}
		linkedinAPI.callSharing(params,function(err,res){
			var status = 1;
			if(res.body && res.body.data){
				status = res.body.err === null? 201: res.body.data.status;
			}
			that.showNotice(status)
			that.setState({status: status});
		});
	},
	showNotice: function(code){
		switch(code){
			case 201:
				notices.success( 'Linkedin post successfully!', {
					showDismiss: true,
					id: 'primary',
					duration: 5000
				});
				break;
			default:
				var message = code==400? 'Linkedin do not post duplicate content!': 'Linkedin post unsuccessfully!';
				notices.error( message, {
					showDismiss: true,
					id: 'primaty',
					duration: 5000
				});
		}
  },
	changePost: function(key,e){
		var post = this.state.post;
		post[key] = e.target.value;
		this.setState({post: post});
	},
	renderPreview: function(){
		return (
			<div>
				<div style={ {width: '70px',height:'70px', background:'white',float:'left'} }>
					<img  src={this.state.profile && this.state.profile.pictureUrl? this.state.profile.pictureUrl: ''}/>
				</div>
				<div style={ {padding:'12px 15px 0 15px', background:'white',float:'left',width: '340px', marginLeft:'4px'} }>
					<div>
						<h3>
							<a style={{color:'#008cc9', fontWeight:'bold'}}>Binh Nguyen</a>
							<a>Terra</a>
						</h3>
					</div>
					<div>
						<p>{this.state.post.comment}</p>
					</div>
					<div  >
						<div style={{width:'191px', height:'100px',border: '1px solid #ddd'}}>
							<a><img src={this.props.story.socialMetaData.pictures.length>0? this.props.story.socialMetaData.pictures[0]: 'https://www.akamai.com/us/en/multimedia/images/logo/worldnow-logo.jpg'} /></a>
						</div>
						<div style={{border: '1px solid #ddd', borderLeft:'none'}}>
							<a>
								<h4>{this.props.story.socialMetaData.name}</h4>
								<div>
									<span>domain.com</span> . <span>{this.props.story.socialMetaData.description}</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	},
	renderEdit: function(){
		return(
			<div className="row" style={this.state.profile? {display:'block'}:{display:'none'}}>
				<div className="col-sm-12 txt-Location">
						<p>
							<img  src={this.state.profile && this.state.profile.pictureUrl? this.state.profile.pictureUrl: ''}/>
							<b> {this.state.profile && this.state.profile.headline? this.state.profile.headline:''}</b>
						</p>
				</div>
				<div className="col-sm-7">
						<div className="cardPost">
								<div className="cardPost-img">
									<p className="thumbnail-Postimg"><img src={this.props.story.socialMetaData.pictures.length>0? this.props.story.socialMetaData.pictures[0]: 'https://www.akamai.com/us/en/multimedia/images/logo/worldnow-logo.jpg'}/></p>
									<a href="#" className="ic-btn ic-btn-Prev"><i className="fa fa-angle-left"></i></a>
									<a href="#" className="ic-btn ic-btn-Next"><i className="fa fa-angle-right"></i></a>
								</div>
								<div className="contentContainer">
									<h2 className="cardPost-title">{this.props.story.socialMetaData.name}</h2>
									<div className="cardPost-Summary">{this.props.story.socialMetaData.description}</div>
									<p className="cardPost-link"> {this.props.story.socialMetaData.link} </p>
								</div>
						</div>
				</div>
				<div className="col-sm-5">
						<textarea className="textarea-about" onChange={this.changePost.bind(this,'comment')} value={this.state.post.comment} placeholder="Say something about this..."></textarea>
				</div>
				<div className="col-sm-12 cardCheckox">
					<FormLabel><span><a onCLick={this.preview}></a></span></FormLabel>
				</div>
			</div>
		)
	},
	render: function() {
		// var componentStr = this.renderPreview();
		var componentStr = this.renderEdit();
		return (
			<SocialConnect { ...this.props}>
				{ componentStr }
			</SocialConnect>
		);
	}
} );

module.exports = SocialLinkedIn;
