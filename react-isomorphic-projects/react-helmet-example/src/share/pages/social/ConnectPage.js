import React from 'react';
import Helmet from 'react-helmet';

import Connects from '../../components/social/Connects';
import LinkedList from '../../components/social/LinkedList';
import PostToWall from '../../components/social/PostToWall';

export default React.createClass({
    render: function() {
      return (
        <div>
          <Connects />
          <LinkedList />
          <PostToWall />
        </div>
      );
    }
});
