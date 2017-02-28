import React, { Component } from 'react';

export default class InstagramCOM extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: 'https://www.instagram.com/p/BNhbkXnFlJ_',
			style: {
				width: '100%',
				height: '100%'
			}
		}
		this.renderIframe = this.renderIframe.bind(this);
	}

	renderIframe(url) {
		if (url.indexOf('http://') === -1 && url.indexOf('https://') === -1) {
			url = `http://${url}`;
		}
		this.setState({ url });
	}

	render() {
		const { url, style } = this.state;
		return (
			<section id="FranklySearch">
				<InputInstagram renderIframe={this.renderIframe} />
				{url &&
					<div className="social-link">
						<iframe width={style.width} height='400' src={`${url}/embed/captioned`} frameBorder="0" allowFullScreen></iframe>
					</div>
				}
			</section>
		);
	}
};

class InputInstagram extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			isUrl: false,
			pattern: {
				regex: /instagram.com\/p\/([a-z0-9\-_])/i,
				message: 'Invalid social instagram url.'
			}
		}
	}

	onKeyPress(e) {
		if (e.key === 'Enter') {
			const { url } = this.state;
			const isUrl = this.isInstagramUrl(url);
			this.setState({ isUrl });
			isUrl && this.props.renderIframe(url);
		}
	}

	onChangeValue(e) {
		console.log(e)
		const url = e.target.value;
		const isUrl = this.isInstagramUrl(url);
		this.setState({ url, isUrl });
	}

	isInstagramUrl(url) {
		const { pattern } = this.state;
		const result = url.match(pattern.regex) ? true : false;
		return result
	}
	render() {
		const { url, isUrl, pattern } = this.state;
		return (
			<div>
				<input type="text" placeholder="eg. www.instagram.com/p/BJX_FggAM_h"
					onKeyPress={(e) => this.onKeyPress(e)}
					onChange={(e) => this.onChangeValue(e)}
					value={url} />
			</div>
		);
	}
};