import React, { Component } from 'react';
import _ from 'lodash';
import request from 'superagent';

const PAGESIZE = 20;
const DEBOUNCE_RATE = 1;
const GOOGLEKEY = 'AIzaSyCjSMwy6zbHmfzXiaZpTxRhQKQJXFAd8vM';

export default class FranklySocialYoutube extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			youtubeLinks: [],
			term: 'news',
			searching: false
		}
		this.getDataYoutube = this.getDataYoutube.bind(this);
	}

    componentDidMount(){
		this.getDataYoutube();
	}

	getDataYoutube( term ) {
        //https://www.googleapis.com/youtube/v3/search?part=snippet&q=${ keyword }&maxResults=${itemPerPage}&key=${ THIRD_PARTY_KEY.GOOGLE }
        //https://www.googleapis.com/youtube/v3/search?part=snippet&q=news&maxResults=10&key=AIzaSyCjSMwy6zbHmfzXiaZpTxRhQKQJXFAd8vM
        if ( !term ) {
			request.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=news&maxResults=10&key=AIzaSyCjSMwy6zbHmfzXiaZpTxRhQKQJXFAd8vM`)
				.set('Accept', 'application/json')
				.end((error, { body }) => {
				if ( ! error ) {
					console.log(body)
                    const youtubeLinks = [];
                    if ( body.pageInfo.totalResults ) {
                        body.items.map( result => {
                            if ( result.id && result.id.videoId ) {
                                youtubeLinks.push( '//www.youtube.com/embed/' + result.id.videoId );
                            }
                        });
                    }
                    this.setState({ youtubeLinks, searching: false });
				}
			});
		}

		// term = encodeURIComponent( term );
		// this.setState({ searching: true, term });
		// StoryAPI.searchVideosByYoutube( term, PAGESIZE ).then(
		// 	( results ) => {
		// 		const youtubeLinks = [];

		// 		if ( results.data.pageInfo.totalResults ) {
		// 			results.data.items.map( result => {

		// 				// kind: "youtube#video",
		// 				if ( result.id && result.id.videoId ) {
		// 					youtubeLinks.push( '//www.youtube.com/embed/' + result.id.videoId );
		// 				}
		// 			});
		// 		}
		// 		this.setState({ youtubeLinks, searching: false });
		// 	},
		// 	( error ) => {
		// 		this.setState({ searching: false });
		// 	}
		// );
	}

  	render() {
		const { term, searching, youtubeLinks } = this.state;
		return (
      		<section id="YoutubeSearch">
                <input type='text' value={ term } />
				<YoutubeList term={ term } youtubeLinks={ youtubeLinks } searching={ searching } />
		  	</section>
		);
  	}
}


class YoutubeList extends Component {
	constructor( props ) {
		super( props );

		this.drag = this.drag.bind(this);
	}

	renderTerm() {
      return(<strong><em>{ this.props.term }</em></strong>);
    }

    renderSearching() {
      return (
        <div className="col-md-12 col-sm-12">Searching ...{ this.renderTerm() }</div>
      );
    }

    renderNoResults() {
      return (
        <div className="col-md-12 col-sm-12">No Results for { this.renderTerm() }...</div>
      );
    }

	drag( ytLink, e ) {
	    storyData.setDragType( 'iframe-fullscreen' );
	    let html = `<iframe class="story-social-iframe" src=${ ytLink } width="100%" height="100%" frameborder="0" allowfullscreen></iframe><br /><br />`;
			const isIE = storyData.detectIE();

	    if ( isIE ) {

			// back update when transfer and generation id will replace <image/>
			let id =`_SPECIAL_${new Date().getTime()}_WILL_RENDER_HTML_`;

			e.dataTransfer.setData( 'text', ' ' + id + '' );

			// set cache data when begin drag
			storyData.setDragElement(id,html);
		} else {
			e.dataTransfer.setData('text/html', html);
		}
	}

	renderYoutubeIfrm() {
		if ( this.props.searching ) {
	      return this.renderSearching()
	  	} else if ( this.props.term && _.isEmpty( this.props.youtubeLinks ) ) {
	  		return this.renderNoResults()
	  	} else {
			return this.props.youtubeLinks.map( ( ytLink, i ) => {
        		const key = 'YoutubeIfrm-' + i;

				return (
					<div key={ key } className="social-link col-sm-12"
						draggable="true"
						onDragStart={ this.drag.bind(this, ytLink) }>
				      	<figure
					        className="frankly-image itemYoutube">
								<iframe
									className="story-social-iframe"
									src={ ytLink }>
								</iframe>
		      			</figure>
	      			</div>
				);
			} );
		}
	}

	render() {
		return(
		  <div className="youtube-list">
		    { this.renderYoutubeIfrm() }
		  </div>
		);
	}
}
