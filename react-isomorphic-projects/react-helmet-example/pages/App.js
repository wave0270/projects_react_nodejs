import React from 'react';
import Router from 'react-router';

let App = React.createClass({
    render: function() {
      // <nav>
      //     <ul>
      //         <li><Router.Link to="home">Home</Router.Link></li>
      //         <li><Router.Link to="news">News</Router.Link></li>
      //         <li><Router.Link to="about">About</Router.Link></li>
      //     </ul>
      // </nav>
        return (
            <div>
                <Router.RouteHandler />
            </div>
        );
    }
});

export default App;
