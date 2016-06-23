import React from 'react';
import { Link, State } from 'react-router';
import Helmet from 'react-helmet';

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Test Bootstrap'
    };
  },
    render: function() {
      console.log("dddddddddddddddd"+this.props.name)
        return (
            <div>
                <Helmet
                    title={this.props.name}
                    meta={[
                        {property: 'og:title', content: this.props.name},
                    ]} />
                <h3>
                    {this.props.name}
                </h3>
            </div>
        );
    }
});
