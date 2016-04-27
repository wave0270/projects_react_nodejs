import React from "react";
/*Manual Component*/
import BrowserDetection from "../components/BrowserDetection";
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
          <h1>Hello { this.props.name }</h1>
          <br/>
					<a onClick={ this.showBrowserInfo }>Click</a>
					{ this.state.BrowserDetection }
        </div>
      );
  }
} );
