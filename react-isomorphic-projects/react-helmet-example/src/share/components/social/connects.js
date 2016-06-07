import React from 'react';

export default React.createClass({
  getInitialState: function(){
		return {
      linkedin: {
        status: false,
  			isLoading: false
      },
      windowSize: {
        width: 300,
        hwight: 500
      }
		};
	},
	popupCenter: function(url, title) {
    var w = this.state.windowSize.width;
    var h = this.state.windowSize.width;
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
	},
	OAuth2Linkedin: function() {
    console.log('connect linkedin')
    var linkedinStatus = this.state.linkedin;
    linkedinStatus.isLoading = true;
		this.setState({linkedin: linkedinStatus});
		if(localStorage.getItem('isLinkedinConnect')){
			localStorage.removeItem('isLinkedinConnect');
		}
		var url = location.origin+'/linkedin/calloauth/social-connect-result';
		this.popupCenter(url,'Signin Linkdein');
		var that = this;
		var interval= setInterval(function(){
			if(localStorage.getItem('isLinkedinConnect')){
				var status = localStorage.getItem('isLinkedinConnect') === 'true'? true: false;
        linkedinStatus.status = status;
        linkedinStatus.isLoading = false;
				that.setState({linkedin: linkedinStatus});
				clearInterval(interval);
			}
		}, 1000);
	},
	render : function(){
		var LinkedinButton = this.state.linkedin.status? <button className="btn btn-default">Disconnect</button>: <button onClick={this.OAuth2Linkedin} className="btn btn-primary">Connect</button>;
		if(this.state.linkedin.isLoading){
      LinkedinButton = <button className="btn btn-default">Connecting</button>;
		}
		return (
			<div className="container">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Linkedin</h3>
          </div>
          <div className="panel-body">
            { LinkedinButton }
          </div>
        </div>
			</div>
		);
	}
});
