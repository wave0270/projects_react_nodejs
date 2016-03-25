var React = require('react');

var Html = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{ this.props.name }</title>
        </head>
        <body>
            Home
            { this.props.content }
            <script src='http://localhost:8080/js/app.js'></script>
        </body>
      </html>
    );
  }
});

module.exports = Html;
