var React = require('react');

var Html = React.createClass({
  render: function () {
    console.log("Render html component 2")
    // console.log(this.props.content)
    // console.log(routes)
    // constant.getFullDomain()
    var domain = "http://localhost:8080"
    return (
      <html>
        <head>
          <title>{ this.props.name }</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
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
