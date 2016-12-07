import React, {PropTypes, Component} from 'react/addons';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle} from './my_great_place_styles';

export default React.createClass( {
	getDefaultProps(){
		return {}
	},

  render() {
      return (
        <div style={greatPlaceStyle}>
           {this.props.text}
        </div>
      );
  }
} );
