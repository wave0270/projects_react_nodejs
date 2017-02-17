import React from 'react';
import ReactDOM from 'react-dom';
// require('style!css!../css/styles.css');
// require('style!css!../examples/example-styles.css');
typeof window !== "undefined" && (window.React = React); // for devtools

var Layout = require('./Layout');

export default React.createClass( {
  getInitialState: function(){
    return {layout: []};
  },
  onLayoutChange : function(layout){
    this.setState({layout: layout});
  },

  stringifyLayout: function() {
    return this.state.layout.map(function(l) {
      return <div className="layoutItem" key={l.i}><b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]</div>;
    });
  },

  render() {
    console.log('Render Main')
    console.log(this.state.layout)
      return (
        <div>
          <div className="layoutJSON">
            Displayed as <code>[x, y, w, h]</code>:
            <div className="columns">
              {this.stringifyLayout()}
            </div>
          </div>
          <Layout onLayoutChange={this.onLayoutChange} />
        </div>
      );
  }
} );
