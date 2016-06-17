import React from 'react';
import Helmet from 'react-helmet';

var API = require('../api/common');

export default React.createClass({

  getInitialState: function(){
    console.log("getInitialState")
    return {
      arr: [],
      table: 'UserTB',
    };
  },
  componentDidMount: function(){
    this.getParse();
  },
  getParse: function(){
    var params = {
			method: 'get',
			table: this.state.table,
      where: {
      }
		}
    API.post('/parse-data', params, function(err,data){
      console.log(data)
      if(!err){
        this.setState({arr: data.body.response.results})
      }
    }.bind(this));
  },
  postParse: function(){
    var params = {
			method: 'post',
			table: this.state.table,
      params: {
        email: 'binh',
        pass: 'binh'
      }
		}
    API.post('/parse-data', params, function(err,data){
      console.log(data)
      if(!err){
        params.params.objectId = data.body.response.objectId;
        this.state.arr.push(params.params);
        this.setState(this.state)
      }
    }.bind(this));
  },
  putParse: function(){
    console.log('5555555555555555555555')
    if(this.state.arr.length==0){
      alert('empty');
    }else{
      this.state.arr[0].email = new Date().getTime()+'@gmail.com';
      delete this.state.arr[0].updatedAt;
      delete this.state.arr[0].createdAt;
      var params = {
  			method: 'put',
  			table: this.state.table,
        params: this.state.arr[0]
  		}
      API.post('/parse-data', params, function(err,data){
        console.log(data)
        if(!err){
          this.setState(this.state);
        }
      }.bind(this));
    }
  },
  delParse: function(){
    if(this.state.arr.length==0){
      alert('empty');
    }else{
      var params = {
  			method: 'del',
  			table: this.state.table,
        params: this.state.arr[0],
  		}
      API.post('/parse-data', params, function(err,data){
        if(!err){
          this.state.arr.splice(0,1);
          this.setState(this.state);
        }
      }.bind(this));
    }
  },
    render: function() {
        return (
            <div className="container">
                  <h2 className="form-signin-heading">Please Register</h2>
                  <label htmlFor="inputEmail" className="sr-only">Email address</label>
                  <input value={this.state.arr.length>0? this.state.arr[0].email: ''} type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input value={this.state.arr.length>0? this.state.arr[0].pass: ''} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                  {/*
                    <label htmlFor="inputUsername" className="sr-only">User Name</label>
                    <input type="password" id="inputUsername" className="form-control" placeholder="User name" required="" />
                    <label htmlFor="inputFullName" className="sr-only">Full Name</label>
                    <input type="password" id="inputFullName" className="form-control" placeholder="Password" required="" />
                    */}

                  <button onClick={this.postParse} className="btn btn-lg btn-primary btn-block">post</button>
                  <button onClick={this.getParse} className="btn btn-lg btn-primary btn-block">get</button>
                  <button onClick={this.putParse} className="btn btn-lg btn-primary btn-block">put</button>
                  <button onClick={this.delParse} className="btn btn-lg btn-primary btn-block">del</button>
                  <p>{JSON.stringify(this.state.arr)}</p>
            </div>
        );
    }
});
