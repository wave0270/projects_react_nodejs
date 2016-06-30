import React from 'react';

var FontAwesome = require('react-fontawesome');

let NavMenu = React.createClass({
    render: function() {

        return (
          <ul>
              <li>
                <a href='/'>
                  <FontAwesome className='super-crazy-colors' name='rocket' size='12px' spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                  home</a>

              </li>
              <li><a href='/news'>news</a></li>
              <li><a href='/about'>about</a></li>
              <li><a href='/login'>login</a></li>
              <li><a href='/register'>register</a></li>
              <li><a href='/social-connect'>social-connect</a></li>
              <li><a href='/social-config'>social-config</a></li>
              <li><a href='/test-react-circle-life'>test-react-circle-life</a></li>
              <li><a href='/test-grid-drag-drop'>test-grid-drag-drop</a></li>
              <li><a href='/fetch-content'>fetch-content</a></li>
          </ul>
      );
    }
});

export default NavMenu;