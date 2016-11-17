import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
/*Private components*/

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'ES6'
    };
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
                    Array.from()
                    Array.isArray()
                    Array.observe()
                    Array.of()
                    Array.prototype.concat()
                    Array.prototype.copyWithin()
                    Array.prototype.entries()
                    Array.prototype.every()
                    Array.prototype.fill()
                    Array.prototype.filter()
                    Array.prototype.find()
                    Array.prototype.findIndex()
                    Array.prototype.forEach()
                    Array.prototype.includes()
                    Array.prototype.indexOf()
                    Array.prototype.join()
                    Array.prototype.keys()
                    Array.prototype.lastIndexOf()
                    Array.prototype.map()
                    Array.prototype.pop()
                    Array.prototype.push()
                    Array.prototype.reduce()
                    Array.prototype.reduceRight()
                    Array.prototype.reverse()
                    Array.prototype.shift()
                    Array.prototype.slice()
                    Array.prototype.some()
                    Array.prototype.sort()
                    Array.prototype.splice()
                    Array.prototype.toLocaleString()
                    Array.prototype.toSource()
                    Array.prototype.toString()
                    Array.prototype.unshift()
                    Array.prototype.values()
                    <div className="row">
                      Parameters
                      callback
                        currentValue (required)
                        index (optional)
                        array (optional)
                        thisArg
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
