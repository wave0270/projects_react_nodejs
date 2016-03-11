import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";

import githubApi from "apis/github";

const fetchStargazers  = (page, per_page = 100) => {
	return githubApi.browse(
		["repos", "RickWong/react-isomorphic-starterkit", "stargazers"],
		{ query: { page, per_page } }
	).then(json => {
		return (json || []).map(({id, login}) => ({id, login}));
	}).catch(error => {
		throw error;
	});
};

/**
 * Main React application entry-point for both the server and client.
 */
class Binh extends React.Component {
	/**
	 * componentWillMount() runs on server and client.
	 */
	componentWillMount () {
		if (__SERVER__) {
			console.log("Hello server");
		}

		if (__CLIENT__) {
			console.log("Hello client");
		}
	}

	/**
	 * componentDidUpdate() only runs on the client.
	 */
	componentDidUpdate (prevProps, prevState) {
		if (!this.props.additionalStargazers) {
			return;
		}

		this.loadMoreStargazersOnClient();
	}

	/**
	 * Load more stargazers.
	 */
	loadMoreStargazersOnClient () {
		const {additionalStargazers = [], transmit} = this.props;
		let {nextPage, pagesToFetch} = transmit.variables;

		if (--pagesToFetch <= 0) {
			return;
		}

		++nextPage;

		transmit.forceFetch({
			nextPage,
			pagesToFetch,
			additionalStargazers
		}, "additionalStargazers");
	}

	/**
	 * Runs on server and client.
	 */
	render () {
		const repositoryUrl = "https://github.com/RickWong/react-isomorphic-starterkit";
		const avatarSize    = 32;
		const avatarUrl     = (id) => `https://avatars.githubusercontent.com/u/${id}?v=3&s=${avatarSize}`;

		/**
		 * This is a Transmit fragment.
		 */
		let {stargazers, additionalStargazers} = this.props;

		if (additionalStargazers) {
			stargazers = stargazers.concat(additionalStargazers);
		}

		return (
			<div>Binh page asfsd d</div>
		);
	}
	/**
	 * <InlineCss> component allows you to write a CSS stylesheet for your component. Target
	 * your component with `&` and its children with `& selectors`. Be specific.
	 */
	static css (avatarSize) {
		return (`
			& .github {
				position: absolute;
				top: 0;
				right: 0;
				border: 0;
			}
			& {
				font-family: sans-serif;
				color: #0df;
				padding: 10px 30px 30px;
				width: 443px;
				margin: 10px auto;
				background: #222;
			}
			& .avatar {
				border-radius: 50%;
				width: ${avatarSize}px;
				height: ${avatarSize}px;
				margin: 0 2px 2px 0;
			}
		`);
	}
}

/**
 * Use Transmit to query and return GitHub stargazers as a Promise.
 */
export default Transmit.createContainer(Binh, {
	initialVariables: {
		nextPage:       2,
		pagesToFetch:   15,
		additionalStargazers: []
	},
	fragments: {
		/**
		 * Load first stargazers.
		 */
		stargazers: () => fetchStargazers(1),
		/**
		 * Load more stargazers deferred.
		 */
		additionalStargazers: ({nextPage, additionalStargazers}) => {
			return () => fetchStargazers(nextPage).then(newStargazers => {
				newStargazers = newStargazers.map(({id, login}) => {
					return { id, login };
				});

				return additionalStargazers.concat(newStargazers);
			});
		}
	}
});

