import React from "react";
import deep from "deep-get-set";
/*
* Manual class
*/
var API = require('../api/common');
/*
* COMPONENTS
*/
var Loading = require('../components/Loading');


export default React.createClass( {
	getDefaultProps : function(){
		return {
			name	: 'Sequelize Page!',
		};
	},
	getInitialState: function(){
		return {
			isLoading: false,
      user: {
        username: '',
      }
		};
	},

  createUser: function(){
    this.setState({isLoading: true});
		API.post('/users/create', this.state.user, function(err,res){
			console.log(res)
      this.setState({isLoading: false});
		}.bind(this));
  },

	handleValue: function(path, e){
		deep(this.state, path, e.target.value);
		this.setState(this.state);
	},

  render() {
      return (
        <div className="container" >
					{this.state.isLoading &&
						<Loading />
					}

            <input onChange={this.handleValue.bind(this, 'user.username')} type="text" name="username" value={this.state.user.username}/>
            <input onClick={this.createUser} type="submit" />
        </div>
      );
  }
} );
