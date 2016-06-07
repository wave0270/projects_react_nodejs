var React = require('react');

import config from '../src/server/config';

var Html = React.createClass({
  render: function () {
    console.log("Render master layout!")
    console.log(this.props.pageType)
    var domain = config.getFullDomain();
    return (
      <html>
        <head>
          <title>{ this.props.name }</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
          <link rel="stylesheet" href={domain + "/src/css/style.css"} />
        </head>
        <body>
            <div id="app">
              { this.props.content }
            </div>
            <script src={ domain+'/js/app.js' }></script>
        </body>
      </html>
    );
  }
});

module.exports = Html;
