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
      },
			data: [],
			errMessage: ''
		};
	},

  createUser: function(){
		this.setState({isLoading: true,errMessage: ''});
		if(this.checkDuplicate(this.state.user.username)){
			this.setState({isLoading: false,errMessage: 'User is existed.'});
			return false;
		}

		if(this.state.user.username){
			API.post('/users/create', this.state.user, function(err,res){
				console.log(res)
				if(!err){
					this.state.data.push(res.body.data)
					this.setState({isLoading: false});
				}else{
					this.setState({isLoading: false,errMessage: 'Error.'});
				}
			}.bind(this));
		}else{
			this.setState({isLoading: false});
		}
  },

	listUser: function(){
		this.setState({isLoading: true,errMessage: ''});
		API.post('/users/listAll', this.state.user, function(err,res){
			console.log(res)
			if(!err){
				this.setState({isLoading: false,data: res.body.data});
			}else{
				this.setState({isLoading: false,errMessage: 'Error.'});
			}
		}.bind(this));
  },

	removeUser: function(id){
		this.setState({isLoading: true,errMessage: ''});
		API.post('/users/'+id+'/destroy', this.state.user, function(err,res){
			console.log(res)
			if(!err){
				for(var i=0; i<this.state.data.length; i++){
					if(this.state.data[i].id === id ){
						this.state.data.splice(i,1);
					}
				}
				this.setState({isLoading: false});
			}else{
				this.setState({isLoading: false,errMessage: 'Error.'});
			}
		}.bind(this));
  },

	updateUser: function(index){
		this.setState({isLoading: true,errMessage: ''});
		if(this.checkDuplicate(this.state.user.username)){
			this.setState({isLoading: false,errMessage: 'User is existed.'});
			return false;
		}
		var params = Object.assign({},this.state.data[index]);
		params.username = this.state.user.username
		if(this.state.user.username){
			API.post('/users/update', params, function(err,res){
				console.log(res)
				if(!err){
					// this.state.data.push(res.body.data)
					this.setState({isLoading: false});
				}else{
					this.setState({isLoading: false,errMessage: 'Error.'});
				}
			}.bind(this));
		}else{
			this.setState({isLoading: false});
		}
	},

	checkDuplicate: function(username){
		var isDuplicate = false;
		for(var i=0; i<this.state.data.length; i++){
			if(this.state.data[i].username === username ){
				isDuplicate = true;
				break;
			}
		}
		return isDuplicate;
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
					<input className="form-control" onChange={this.handleValue.bind(this, 'user.username')} type="text" name="username" value={this.state.user.username}/>
					<p className="warning">{this.state.errMessage}</p>
					<br />
					<div className="btn-group">
						<button onClick={this.createUser} className="btn btn-info">Create</button>
						<button onClick={this.listUser} className="btn btn-success">List</button>
					</div>
					<div>
					{ this.state.data && this.state.data.length>0 &&
						this.state.data.map(function(item, i){
							return (
									<p key={"key-user-"+i}>
											<span><b> - Id:</b> {item.id} </span>
											<span><b>User:</b> {item.username} </span>
											<span><b>CreatedAt:</b> {item.createdAt} </span>
											<span><b>UpdatedAt:</b> {item.updatedAt} </span>
											<span><button className="btn btn-warning" onClick={this.removeUser.bind(this,item.id)}>Remove</button></span>
											<span><button className="btn btn-warning" onClick={this.updateUser.bind(this,item.i)}>Update</button></span>
									</p>
							)
						},this)
					}
					</div>
        </div>
      );
  }
} );
