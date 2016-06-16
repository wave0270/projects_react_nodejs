import React from 'react';
import Helmet from 'react-helmet';

import superagent from 'superagent';

export default React.createClass({
  getInitialState: function(){
    console.log("getInitialState")
    return {
      userName : "wave",
      pass: '123456 ',
      arr: []
    };
  },

  getParse: function(){
    var params = {
			method: 'get',
			table: 'User'
		}
    superagent
      .post('/parse-data')
      .send(params)
      .end(function(err,data){
        this.setState({arr: data.response.results})
        console.log(data)
      }.bind(this));
  },
  postParse: function(){
    var params = {
			method: 'post',
			table: 'User',
      params: {
        email: 'binh',
        pass: 'binh'
      }
		}
    superagent
      .post('/parse-data')
      .send(params)
      .end(function(err,data){
        console.log(data)
      });
  },
  putParse: function(){
    var params = {
			method: 'put',
			table: 'User',
      params: this.state.arr[0]
		}
    superagent
      .post('/parse-data')
      .send(params)
      .end(function(err,data){
        console.log(data)
      });
  },
  delParse: function(){
    if(this.state.arr.length<0){
      alert('empty');
      return
    }
    var params = {
			method: 'del',
			table: 'User',
      params: this.state.arr[0]
		}
    superagent
      .post('/parse-data')
      .send(params)
      .end(function(err,data){
        console.log(data)
      });
  },
    render: function() {
        return (
            <div className="container">
                  <h2 className="form-signin-heading">Please Register</h2>
                  <label htmlFor="inputEmail" className="sr-only">Email address</label>
                  <input value={this.state.userName} type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input value={this.state.pass} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
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
            </div>
        );
    }
});
