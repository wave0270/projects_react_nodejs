
import React, {Component} 	from 'react';
import _ 					from 'lodash';

export default class GoogleMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			linkGoogleMap: 'https://maps.google.com/?q=R.+M%C3%A1rtires+da+Guerra+Colonial+FF,+2835-151+Lavradio,+Portugal&ftid=0xd1937afea99ff0d:0x93475b2262eb47ae&output=embed'
		}
		this.initMap = this.initMap.bind(this);
	}

	initMap() {
		console.log('init map')
		var input = document.getElementById('pac-input');
		var searchBox = new google.maps.places.SearchBox(input);

		searchBox.addListener('places_changed', () => {
			var places = searchBox.getPlaces();
			console.log(places)
			if (places.length === 0) {
				return;
			}
			if (places.length === 1 && places[0].url) {
				let linkGoogleMap = `${places[0].url}&output=embed`;
				this.setState( { linkGoogleMap: linkGoogleMap } );
			}
			else {
				let textSearch= encodeURI(input.value);
				let linkGoogleMap = `https://www.google.com/maps?q=${textSearch}&output=embed`;
				this.setState( { linkGoogleMap: linkGoogleMap } );
			}
		});
	}

	componentDidMount() {
		this.initMap();
	}

	render() {
		return (
				<div>
					<div><input id="pac-input" className="form-text-input" type="text" placeholder="Search Box"/></div>
					{this.state.linkGoogleMap &&
						<div 	className="google-map social-link"
								style={{height:'400px'}}
								>
								<iframe src={this.state.linkGoogleMap} width="100%" height="100%" ></iframe>
						</div>
					}
				</div>
		);
	}
}
