import React from 'react';
let NavMenu = React.createClass({
    render: function() {

        return (
          <ul>
              <li><a href='/'>home</a></li>
              <li><a href='/news'>news</a></li>
              <li><a href='/about'>about</a></li>
              <li><a href='/login'>login</a></li>
              <li><a href='/register'>register</a></li>
              <li><a href='/social-connect'>social-connect</a></li>
              <li><a href='/social-config'>social-config</a></li>
              <li><a href='/about'>about</a></li>

          </ul>
      );
    }
});

export default NavMenu;
