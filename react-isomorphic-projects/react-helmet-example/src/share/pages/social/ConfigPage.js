import React from 'react';
import Helmet from 'react-helmet';

import SocialConfig from '../../components/social/SocialConfig';

export default React.createClass({
    render: function() {
      return (
        <div>
          <SocialConfig />
        </div>
      );
    }
});
