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
/*crawl project*/
import CrawlData  from './pages/CrawlData';
/*test page*/
import ReactCircleLife        from './test/ReactCircleLife';
import ReactCircleLifeES6     from './test/ReactCircleLifeES6';
import GridDragDropDashboard  from './test/GridDragDropDashboard/Main';
import SortDragDrop           from './test/SortDragDrop';
import SortDragDropLayout     from './test/SortDragDropLayout';
import DnDDragDrop            from './test/DnDDragDrop';
import FetchContent           from './test/FetchContent';
import Sequelize              from './test/Sequelize';
import ImgToBase64            from './test/ImgToBase64';
import Socketio               from './test/Socketio';
import FileManager            from './test/FileManager';
import UILibrary              from './test/UILibrary';
import ES6Com                 from './test/ES6Com';
import Socials from './test/Socials';

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
        {/*crawl project*/}
        <Router.Route name="crawl-data" handler={CrawlData} />
        {/*test*/}
        <Router.Route name="test-react-circle-life" handler={ReactCircleLife} />
        <Router.Route name="test-react-circle-life-es6" handler={ReactCircleLifeES6} />
        <Router.Route name="test-grid-drag-drop-dashboard"  handler={GridDragDropDashboard} />
        <Router.Route name="fetch-content"  handler={FetchContent} />
        <Router.Route name="sequelize"  handler={Sequelize} />
        <Router.Route name="img-to-base64"  handler={ImgToBase64} />
        <Router.Route name="socket-io"  handler={Socketio} />
        <Router.Route name="sort-drag-drop"  handler={SortDragDrop} />
        <Router.Route name="sort-drag-drop-layout" handler={SortDragDropLayout} />
        <Router.Route name="dnd-drag-drop"  handler={DnDDragDrop} />
        <Router.Route name="file-manager"  handler={FileManager} />
        <Router.Route name="ui-library"  handler={UILibrary} />
        <Router.Route name="ES6Com"  handler={ES6Com} />
        <Router.Route name="socials"  handler={Socials} />
    </Router.Route>
);

export default routes;
