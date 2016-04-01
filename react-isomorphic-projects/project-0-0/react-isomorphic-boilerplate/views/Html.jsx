var React = require('react');

var Html = React.createClass({
  render: function () {
    console.log("Render html component")
    return (
      <html>
        <head>
          <title>{ this.props.name }</title>
        </head>
        <body>
            Home
            <div id="app">
              { this.props.content }
            </div>
            <script src='http://localhost:8080/js/app.js'></script>
        </body>
      </html>
    );
  }
});

module.exports = Html;
