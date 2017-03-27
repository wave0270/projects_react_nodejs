import React, { Component } from 'react';
import _                    from 'lodash';
import TweetEmbed 			from 'react-tweet-embed';
import request				from 'superagent';

export default class TwitterList extends Component {
	constructor(props){
		super(props);
		this.state = {
			statuses: [],
			term: 'news',
			searching: false
		}
	}
	componentDidMount(){
		this.search()
	}

	search() {
		const { term } = this.state;
		if ( term ) {
			this.setState({ searching: true, term });
			request.get( '/twitter/search?q=' + term)
				.set('Accept', 'application/json')
				.end((error, { body }) => {
				if ( ! error ) {
					console.log(body)
					this.setState({ statuses: body.tweets.statuses, searching: false })
				}
			});
		}
	}

	renderTerm() {
		return (<strong><em>{this.props.term}</em></strong>);
	}

	renderSearching() {
		return (
			<div className="col-md-12 col-sm-12">Searching ...{this.renderTerm()}</div>
		);
	}

	renderNoResults() {
		return (
			<div className="col-md-12 col-sm-12">No Results for {this.renderTerm()}...</div>
		);
	}

	renderTweets() {
		const { searching, statuses, term } = this.state;

		if (searching) {
			return this.renderSearching()
		} else if (_.isEmpty(statuses) && term) {
			return this.renderNoResults()
		} else {
			return statuses.map((status, i) => {
				const key = 'TwitterStatus' + i;
				return (
					<div key={key} className="col-md-12 col-sm-12">
						<TwitterStatus
							status={status} />
					</div>
				);
			});
		}
	}

	render() {
		return (
			<div className="twitter-list">
				{this.renderTweets()}
			</div>
		);
	}
}


class TwitterStatus extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const status = this.props.status.retweeted_status || this.props.status
			, screenName = status.user.screen_name
			, idStr = status.id_str

		return (
			<div id={idStr} >
				<TweetEmbed key={idStr} id={idStr} />
			</div>
		);
	}
}