import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../../components/TopMenu';
import NavMenu from '../../components/NavMenu';
/*Private components*/
// import ComponetDnD from './main';

import { Component } from 'react';
import Container from './Container';

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'DnD Drag and Drop'
    };
  },
  onDragOverHighlights: function(){

  },
  onInitDomWhenDragging: function(){

  },
  onDragLeaveHighlights: function(){

  },
  onDragChangeBeginWidget: function(){

  },
  onDragEndWidget: function(){

  },
  render: function() {
    var row = [1,4,5,7,9]
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
                    <p>
                      Drag the boxes below and drop them into the dustbin.
                      Note that it has a neutral, an active and a hovered state.
                      The dragged item itself changes opacity while dragged.
                    </p>
                    <Container />
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
