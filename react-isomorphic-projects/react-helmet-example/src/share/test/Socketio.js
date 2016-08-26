import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';

var socket;

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Socket IO - NOT YET FINISH'
    };
  },

  getInitialState: function(){
    console.log(this.props.isClient)
    return {
      isClient: false,
      data: [],
    }
  },

  componentWillMount: function(){

  },

  componentDidMount: function(){
    this.setState({user : new Date().getTime()});
    if(window && !this.state.isClient){
      var that = this;
      /*create listen socket*/
      socket = io.connect('http://localhost:3030');
      console.log("___________");
      /*listen 'connect' event from server*/
      socket.emit('join', 'Hello World from client');
      socket.on('connect', function(data) {
        /*send 'join' event to server*/
         socket.emit('join', 'Hello World from client');
      });
      /*listen 'broad' event from server*/
      socket.on('broad', function(newMessage) {
        that.state.data.push(newMessage)
        that.setState(that.state);
      });
    }
  },
  handleSocket: function(){
    socket.emit('messages', this.state.user + ' : ' + this.state.message);
  },

  handleValue: function(e){
    this.setState({message: e.target.value});
  },
  render: function() {
    return (
      <div className="w-pages">
        <Helmet
            title={this.props.name+" test"}
            meta={[
                {property: 'og:title', content: 'About'},
            ]}
            script={[
              {"src": "https://cdn.socket.io/socket.io-1.4.5.js", "type": "text/javascript"},
						]}
            />
            <div className="main-layout">
              {/*Top-area*/}
              <div className="">
                <TopMenu />
              </div>
              {/*End Top-area*/}

              {/*Main-area*/}
              <div className="container-fluid">

                {/*Left-area*/}
                <div className="col-sm-3 left-content">
                  <NavMenu />
                </div>
                {/*End Left-area*/}

                {/*Content-area*****************/}
                <div className="col-sm-9 main-content">
                  <p>{this.props.name} page</p>
                  <div>
                    <label>{this.state.user}</label>
                    <input className="form-control" onChange={this.handleValue} value={this.state.message} />
                    <button className="btn btn-primary" onClick={this.handleSocket}>handleSocket</button>
                    <div id="show-content">
                      {this.state.data.map(function(item, i){
                        return (
                          <p key={'message-'+i}>{item}</p>
                        )
                      })}
                    </div>
                  </div>
                </div>
                {/*End Content-area****************/}

              </div>
              {/*End Main-area*/}

              {/*Bottom-area*/}
              <div className="">
                <p>bottom</p>
              </div>
              {/*End Bottom-area*/}
          </div>
    </div>
    );
  }
});
