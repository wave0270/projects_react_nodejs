import React from 'react';
import Helmet from 'react-helmet';

let Home = React.createClass({
    render: function() {

        return (
            <div>
                <Helmet
                    title="Home"
                    meta={[
                        {property: 'og:title', content: 'Home'},
                    ]} />
                <nav>
                    <ul>
                        <li><a href='/'>home</a></li>
                        <li><a href='/news'>news</a></li>
                        <li><a href='/about'>about</a></li>
                    </ul>
                </nav>
                <h1>Home</h1>
            </div>
        );
    }
});

export default Home;
