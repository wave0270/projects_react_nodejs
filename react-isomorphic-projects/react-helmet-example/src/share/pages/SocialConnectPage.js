import React from 'react';
/*common page components*/
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
/*private page components*/
import Connects from '../components/social/Connects';
import LinkedList from '../components/social/LinkedList';
import PostToWall from '../components/social/PostToWall';

export default React.createClass({
    render: function() {
      return (
        <div>
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
                <Connects />
                <LinkedList />
                <PostToWall />
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
