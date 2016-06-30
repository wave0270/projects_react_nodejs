import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';

let About = React.createClass({
    render: function() {
      return (
        <div className="w-pages">
          <Helmet
              title="About-test"
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

                  {/*Content-area*/}
                  <div className="col-sm-9 main-content">
                    <p>About page</p>
                    <div><img src="/static/img/images.jpeg" /></div>
                  </div>
                  {/*End Content-area*/}

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

export default About;
