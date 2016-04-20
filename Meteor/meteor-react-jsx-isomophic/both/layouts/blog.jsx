// <template name="BlogLayout">
//   <div>
//     <div className="navigation">
//       <a href="/">Home</a>
//     </div>
//     <h1> My Blog </h1>
//     {this.props.content}
//   </div>
// </template>
MainLayout = React.createClass({
  render() {
    return (
      <div id="react-main-layout">
        {this.props.content}
      </div>
    );
  }
});
