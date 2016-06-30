/**
 * External Dependencies
 */
'use strict';

var React = require('react'),
    DeepLinkedStateMixin = require('react-deep-link-state'),
    classNames = require('classnames'),
    noop = require('lodash/noop'),
    linkedinAPI = require('frankly/api-callback/linkedin-api'),
    notices = require('notices');

/**
 * Internal Dependencies
 */
var FormLabel = require('components/forms/form-label'),
    SocialConnect = require('./connect'),
    SocialMixin = require('./mixin');

var SocialLinkedIn = React.createClass({
	displayName: 'SocialLinkedIn',

	mixins: [DeepLinkedStateMixin, SocialMixin],
	componentWillMount: function componentWillMount() {
		var that = this;
		linkedinAPI.getProfile(null, function (err, res) {
			if (!err) {
				that.setState({ profile: res.body.data, isConnect: true });
			}
		});
	},
	getInitialState: function getInitialState() {
		console.log('getInitialState');
		var post = {
			"comment": "comment",
			"content": {
				"title": this.props.story.socialMetaData.name,
				"description": this.props.story.socialMetaData.description,
				"submitted-url": this.props.story.socialMetaData.link,
				"submitted-image-url": this.props.story.socialMetaData.pictures.length > 0 ? this.props.story.socialMetaData.pictures[0] : 'https://www.akamai.com/us/en/multimedia/images/logo/worldnow-logo.jpg'
			},
			"visibility": {
				"code": "anyone"
			}
		};
		return {
			post: post
		};
	},
	sharing: function sharing() {
		if (!this.state.isConnect) {
			return false;
		}
		var that = this;
		var params = {
			post: this.state.post
		};
		linkedinAPI.callSharing(params, function (err, res) {
			var status = 1;
			if (res.body && res.body.data) {
				status = res.body.err === null ? 201 : res.body.data.status;
			}
			that.showNotice(status);
			that.setState({ status: status });
		});
	},
	showNotice: function showNotice(code) {
		switch (code) {
			case 201:
				notices.success('Linkedin post successfully!', {
					showDismiss: true,
					id: 'primary',
					duration: 5000
				});
				break;
			default:
				var message = code == 400 ? 'Linkedin do not post duplicate content!' : 'Linkedin post unsuccessfully!';
				notices.error(message, {
					showDismiss: true,
					id: 'primaty',
					duration: 5000
				});
		}
	},
	changePost: function changePost(key, e) {
		var post = this.state.post;
		post[key] = e.target.value;
		this.setState({ post: post });
	},
	renderPreview: function renderPreview() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ style: { width: '70px', height: '70px', background: 'white', float: 'left' } },
				React.createElement('img', { src: this.state.profile && this.state.profile.pictureUrl ? this.state.profile.pictureUrl : '' })
			),
			React.createElement(
				'div',
				{ style: { padding: '12px 15px 0 15px', background: 'white', float: 'left', width: '340px', marginLeft: '4px' } },
				React.createElement(
					'div',
					null,
					React.createElement(
						'h3',
						null,
						React.createElement(
							'a',
							{ style: { color: '#008cc9', fontWeight: 'bold' } },
							'Binh Nguyen'
						),
						React.createElement(
							'a',
							null,
							'Terra'
						)
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'p',
						null,
						this.state.post.comment
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						{ style: { width: '191px', height: '100px', border: '1px solid #ddd' } },
						React.createElement(
							'a',
							null,
							React.createElement('img', { src: this.props.story.socialMetaData.pictures.length > 0 ? this.props.story.socialMetaData.pictures[0] : 'https://www.akamai.com/us/en/multimedia/images/logo/worldnow-logo.jpg' })
						)
					),
					React.createElement(
						'div',
						{ style: { border: '1px solid #ddd', borderLeft: 'none' } },
						React.createElement(
							'a',
							null,
							React.createElement(
								'h4',
								null,
								this.props.story.socialMetaData.name
							),
							React.createElement(
								'div',
								null,
								React.createElement(
									'span',
									null,
									'domain.com'
								),
								' . ',
								React.createElement(
									'span',
									null,
									this.props.story.socialMetaData.description
								)
							)
						)
					)
				)
			)
		);
	},
	renderEdit: function renderEdit() {
		return React.createElement(
			'div',
			{ className: 'row', style: this.state.profile ? { display: 'block' } : { display: 'none' } },
			React.createElement(
				'div',
				{ className: 'col-sm-12 txt-Location' },
				React.createElement(
					'p',
					null,
					React.createElement('img', { src: this.state.profile && this.state.profile.pictureUrl ? this.state.profile.pictureUrl : '' }),
					React.createElement(
						'b',
						null,
						' ',
						this.state.profile && this.state.profile.headline ? this.state.profile.headline : ''
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'col-sm-7' },
				React.createElement(
					'div',
					{ className: 'cardPost' },
					React.createElement(
						'div',
						{ className: 'cardPost-img' },
						React.createElement(
							'p',
							{ className: 'thumbnail-Postimg' },
							React.createElement('img', { src: this.props.story.socialMetaData.pictures.length > 0 ? this.props.story.socialMetaData.pictures[0] : 'https://www.akamai.com/us/en/multimedia/images/logo/worldnow-logo.jpg' })
						),
						React.createElement(
							'a',
							{ href: '#', className: 'ic-btn ic-btn-Prev' },
							React.createElement('i', { className: 'fa fa-angle-left' })
						),
						React.createElement(
							'a',
							{ href: '#', className: 'ic-btn ic-btn-Next' },
							React.createElement('i', { className: 'fa fa-angle-right' })
						)
					),
					React.createElement(
						'div',
						{ className: 'contentContainer' },
						React.createElement(
							'h2',
							{ className: 'cardPost-title' },
							this.props.story.socialMetaData.name
						),
						React.createElement(
							'div',
							{ className: 'cardPost-Summary' },
							this.props.story.socialMetaData.description
						),
						React.createElement(
							'p',
							{ className: 'cardPost-link' },
							' ',
							this.props.story.socialMetaData.link,
							' '
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'col-sm-5' },
				React.createElement('textarea', { className: 'textarea-about', onChange: this.changePost.bind(this, 'comment'), value: this.state.post.comment, placeholder: 'Say something about this...' })
			),
			React.createElement(
				'div',
				{ className: 'col-sm-12 cardCheckox' },
				React.createElement(
					FormLabel,
					null,
					React.createElement(
						'span',
						null,
						React.createElement('a', { onCLick: this.preview })
					)
				)
			)
		);
	},
	render: function render() {
		// var componentStr = this.renderPreview();
		var componentStr = this.renderEdit();
		return React.createElement(
			SocialConnect,
			this.props,
			componentStr
		);
	}
});

module.exports = SocialLinkedIn;