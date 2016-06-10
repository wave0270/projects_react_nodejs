import React from 'react';

/*listen event*/
// var ee = require('event-emitter');
// var emitter = ee({}), listener;

var API = require('../../api/common');

export default React.createClass({
  getDefaultProps:  function(){
    return {};
  },
  getInitialState: function(){
    console.log('getInitialState')
		return {
      linkedin: {
  			isLoading: false,
        isConnect: false
      },
      windowSize: {
        width: 300,
        hwight: 500
      }
		};
	},
  componentWillMount: function(){
    console.log('componentWillMount')

  },
  componentDidMount: function(){
    console.log('componentDidMount')
    this.callGet('get-profile');
  },
  componentUnMount: function(){
    console.log('componentUnMount')
  },
  callGet: function(key){
		this.state[key] = '';
		this.setState({isLoading: true});
		var that = this;
		var params = {
			method: 'get',
			key: key
		}
    var that = this;
		API.post('/linkedin-call', params, function(err,res){
      var linkedin = that.state.linkedin;
      var profile = {};
			if(res && res.body && res.body.response && res.body.response.status === 200){
        linkedin.isConnect = true;
        profile = JSON.parse(res.body.response.text);
			}else{
        linkedin.isConnect = false;
      }
      that.setState({linkedin: linkedin, profile: profile});
		});
	},
  disConnect: function(){
    API.post('/linkedin-call', params, function(err,res){
			if(res && res.body && res.body.response && res.body.response.status === 200){

			}else{

      }
      that.setState();
		});
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
    var linkedinStatus = this.state.linkedin;
    linkedinStatus.isLoading = true;
		this.setState({linkedin: linkedinStatus});
		if(localStorage.getItem('isLinkedinConnect')){
			localStorage.removeItem('isLinkedinConnect');
		}
		var url = location.origin+'/linkedin/calloauth/social-connect-result'+'/'+window.location.host;
		this.popupCenter(url,'Signin Linkdein');
		var that = this;
		var interval= setInterval(function(){
			if(localStorage.getItem('isLinkedinConnect')){
				var status = localStorage.getItem('isLinkedinConnect') === 'true'? true: false;
        linkedinStatus.isConnect = status;
        linkedinStatus.isLoading = false;
				that.setState({linkedin: linkedinStatus});
				clearInterval(interval);
			}
		}, 1000);
	},
  // OAuth2Linkedin: function() {
  //   console.log('connect linkedin')
  //   var linkedinStatus = this.state.linkedin;
  //   linkedinStatus.isLoading = true;
	// 	this.setState({linkedin: linkedinStatus});
	// 	if(localStorage.getItem('isLinkedinConnect')){
	// 		localStorage.removeItem('isLinkedinConnect');
	// 	}
	// 	var url = location.origin+'/linkedin/calloauth/social-connect-result';
	// 	this.popupCenter(url,'Signin Linkdein');
	// 	var that = this;
  //   emitter.on('isLinkedinConnect', function (status) {
  //     // …emitter logic
  //     linkedinStatus.isConnect = status;
  //     linkedinStatus.isLoading = false;
  //
  //     that.setState({linkedin: linkedinStatus});
  //   });
	// },
	render : function(){
		var LinkedinButton = this.state.linkedin.isConnect? <button className="btn btn-default">Disconnect</button>: <button onClick={this.OAuth2Linkedin} className="btn btn-info">Connect</button>;
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
            <div className="col-sd-3">
              { LinkedinButton }
            </div>
            <div className="col-sd-9">

            </div>
          </div>
        </div>

        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52d34a5433d85b84"></script>

			</div>
		);
	}
});
