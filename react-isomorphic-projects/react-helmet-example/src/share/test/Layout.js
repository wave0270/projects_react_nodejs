import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Test Layout'
    };
  },
    render: function() {
      console.log("dddddddddddddddd"+this.props.name)
        return (
            <div>
                <h1>Latest Updates</h1>

                <Helmet
                    title="Latest Updates"
                    meta={[
                        {property: 'og:title', content: 'Latest Updates'},
                    ]} />

                <Router.RouteHandler />
            </div>
        );
    }
});
