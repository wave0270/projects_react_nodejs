import React from "react";
/*Manual Component*/
import BrowserDetection from "../components/BrowserDetection";

import RaisedButton from 'material-ui/lib/raised-button';
export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Test Client page',
		};
	},
	getInitialState: function(){
		return {
			BrowserDetection: ""
		};
	},
	showBrowserInfo: function(){
		this.setState({BrowserDetection: <BrowserDetection />});
	},
  render() {
      return (
        <div>
          <p className="title-component">Hello { this.props.name }</p>
          <br/>
					<RaisedButton onClick={ this.showBrowserInfo } label="Show Detection" primary={true} />
					{ this.state.BrowserDetection }
        </div>
      );
  }
} );
