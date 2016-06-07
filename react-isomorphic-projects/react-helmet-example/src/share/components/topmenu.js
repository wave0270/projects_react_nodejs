import React from 'react';
let TopMenu = React.createClass({
    render: function() {

        return (
          <nav>
            <ul>
                <li><a href='/'>home swad</a></li>
                <li><a href='/news'>news</a></li>
                <li><a href='/about'>about</a></li>
            </ul>
          </nav>
        );
    }
});

export default TopMenu;
