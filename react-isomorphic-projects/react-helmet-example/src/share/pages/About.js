import React from 'react';
import Helmet from 'react-helmet';

let About = React.createClass({
    render: function() {
      return (
        <div>
          <Helmet
              title="About-test"
              meta={[
                  {property: 'og:title', content: 'About'},
              ]} />
            About dfdsg test
        </div>
      );
    }
});

export default About;
