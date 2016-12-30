import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';

/*Private components*/
var fileDownload = require('react-file-download');

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'About'
    };
  },
  saveFile: function(){
    fileDownload('test', 'filename.csv');
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
                  <button onClick={this.saveFile}>click</button>

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
