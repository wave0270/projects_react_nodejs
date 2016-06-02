import express from 'express';

import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';

import routes from './routes';

/* create express server */
let app = express();
/* static files served from "public" through url /static/ */
app.use('/static', express.static('public'));

/* a single request handler receives every server request
   and routes through react-router */
app.get('*', function(req, res) {
    /* create a router and give it our routes
       and the requested path */
    let router = Router.create({
        location: req.url,
        routes: routes,
    });

    router.run(function(Root, state) {
        /* render `Root` (the complete document) to string
           and rewind Helmet for access to its data.

           Read about why rewinding is necessary on the server:
           https://github.com/nfl/react-helmet#server-usage */
        let renderedBody = React.renderToString(<Root />);
        let head = Helmet.rewind();

        /* render document with Helmet-rendered `<head>` info
           and React-rendered body. then, initialize the client
           side via `client.js`.

           Note: Helmet will update your page's `<head`> on the client
                 side, but you must construct `<head>` manually
                 on the server. */
        let html = `
            <!doctype html>
            <html>
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                    <link rel="stylesheet" href={domain + "/src/css/style.css"} />
                    <meta charset="utf-8" />
                    <title>${head.title}</title>
                    ${head.meta}
                    ${head.link}
                </head>
                <body>
                    <div id="app">${renderedBody}</div>

                    <script src="/static/client.js"></script>
                </body>
            </html>
        `;

        /* write html, close connection */
        res.write(html);
        res.end();
    });
});

var PORT = 5000;
app.listen(PORT, () => console.log('Listening on http://localhost:'+PORT));
