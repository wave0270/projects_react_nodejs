import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Socket IO - NOT YET FINISH'
    };
  },

  getInitialState: function(){
    return {
      isClient: false,
      data: '',
    }
  },

  componentDidMount: function(){
    if(window && !this.state.isClient){
      /*create listen socket*/
      var socket = io.connect('http://localhost:3030');
      console.log("___________");
      /*listen 'connect' event from server*/
      socket.emit('join', 'Hello World from client');
      socket.on('connect', function(data) {
        /*send 'join' event to server*/
         socket.emit('join', 'Hello World from client');
      });
      /*listen 'broad' event from server*/
      socket.on('broad', function(data) {
        this.setState({data: data});
      });
    }
  },
  handleSocket: function(e){
    if(e.target.value){
      socket.emit('messages', e.target.value);
    }
  },


  render: function() {
    return (
      <div className="w-pages">
        <Helmet
            title={this.props.name+" test"}
            meta={[
                {property: 'og:title', content: 'About'},
            ]} />
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
                    <input className="form-control" value={this.state.data} />
                    <button className="btn btn-primary" onClick={this.handleSocket}>handleSocket</button>
                    <div id="show-content">{this.state.data}</div>
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
