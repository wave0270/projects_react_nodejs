/*
 * Base Google Map example
 */
import React, {PropTypes, Component} from 'react/addons';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place';


export default React.createClass( {
	getDefaultProps(){
		return {
      center: [59.938043, 30.337157],
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };
	},

  render() {
      return (
        <GoogleMap
         // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
				 apiKey='AIzaSyDXZEhilSNtUUMUa3ddiR72sbdSjTAoEgI'
         center={this.props.center}
         zoom={this.props.zoom}>
         <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
         <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
       </GoogleMap>
      );
  }
} );
