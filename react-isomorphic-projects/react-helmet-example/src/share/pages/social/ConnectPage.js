import React from 'react';
import Helmet from 'react-helmet';

import Connects from '../../components/social/Connects';
import LinkedList from '../../components/social/LinkedList';

export default React.createClass({
    render: function() {
      return (
        <div>
          <Connects />
          <LinkedList />
        </div>
      );
    }
});
