import React from 'react';
import Router from 'react-router';

import App from './pages/App';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import BlogPosts from './pages/BlogPosts';
/*social*/
import ConnectPage from './pages/SocialConnectPage';
import ConnectPageResult from './pages/SocialConnectPageResult';
import ConfigPage from './pages/SocialConfigPage';
/*authen*/
import Login from './pages/Login';
import Register from './pages/Register';
/*test page*/
import ReactCircleLife  from './test/ReactCircleLife';
import GridDragDropDashboard    from './test/drag-n-drop/Main';
import SortDragDrop     from './test/SortDragDrop';
import FetchContent     from './test/FetchContent';
import Sequelize        from './test/Sequelize';
import ImgToBase64      from './test/ImgToBase64';
import Socketio         from './test/Socketio';
import FileManager      from './test/FileManager';

/**/

/* create a group of routes with nesting */
let routes = (
    <Router.Route handler={App}>
        <Router.DefaultRoute name="home" handler={Home} />
        <Router.Route name="login" path="login" handler={Login} />
        <Router.Route name="register" path="register" handler={Register} />
        <Router.Route name="about" handler={About} />

        <Router.Route name="social-connect" path="social-connect" handler={ConnectPage} />
        <Router.Route name="social-connect-result" path="social-connect-result" handler={ConnectPageResult} />
        <Router.Route name="social-config" path="social-config" handler={ConfigPage} />
        <Router.Route name="news" handler={Content}>
            <Router.DefaultRoute name="all" handler={BlogPosts} />
            <Router.Route name="news-tag" path="view/:tag" handler={BlogPosts} />
        </Router.Route>

        <Router.Route name="test-react-circle-life" handler={ReactCircleLife} />
        <Router.Route name="test-grid-drag-drop-dashboard"  handler={GridDragDropDashboard} />
        <Router.Route name="fetch-content"  handler={FetchContent} />
        <Router.Route name="sequelize"  handler={Sequelize} />
        <Router.Route name="img-to-base64"  handler={ImgToBase64} />
        <Router.Route name="socket-io"  handler={Socketio} />
        <Router.Route name="sort-drag-drop"  handler={SortDragDrop} />
        <Router.Route name="file-manager"  handler={FileManager} />
    </Router.Route>
);

export default routes;
