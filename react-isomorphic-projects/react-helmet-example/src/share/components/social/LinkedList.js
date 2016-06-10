import React from 'react';
/*Manual*/
var API = require('../../api/common');
/*UI COMPONENTS*/


export default React.createClass({
  getInitialState: function(){
    console.log('getInitialState')
		return {
      linkedin: {
  			isLoading: false,
        isConnect: false
      },
      companies: []
		};
	},
  componentDidMount: function(){
    console.log('componentDidMount')
    this.callGet('get-profile');
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
        that.getCompanies();
			}else{
        linkedin.isConnect = false;
      }
      that.setState({linkedin: linkedin, profile: profile});
		});
	},
  getCompanies: function(){
    var key = 'get-companies'
    this.state[key] = '';
		var that = this;
		var params = {
			method: 'get',
			key: key
		}
    var that = this;
		API.post('/linkedin-call', params, function(err,res){
      var linkedin = that.state.linkedin;
      var companies = [];
			if(res && res.body && res.body.response && res.body.response.status === 200){
        companies = JSON.parse(res.body.response.text).values;
			}
      console.log(companies)
      that.setState({companies: companies});
		});
  },
  render: function() {
      return (
        <div className="container">
          { this.state.linkedin.isConnect &&
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><img src={this.state.profile.pictureUrl} style={{width:'17px',height:'17px'}} />  Hello {this.state.profile.firstName} {this.state.profile.lastName} - {this.state.profile.headline}</h3>
              </div>
              <div className="panel-body">
                  <select className="selectpicker">
                    <option>-Companies-</option>
                    {
                      this.state.companies.map( function( item, index ){
                        return(
                          <option key={'Companies'+index} value={item.id}>{item.name}</option>
                        )
                    }, this)}
                  </select>
              </div>
            </div>
          }
        </div>
      );
  }
});
