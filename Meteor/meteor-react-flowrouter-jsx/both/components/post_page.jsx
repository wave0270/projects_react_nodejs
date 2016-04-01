
PostPage = React.createClass({
  getInitialState: function(){
    var post = Posts.findOne({_id: this.props._id});
    // var posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    // console.log(posts)
    return {
      post : post
    };
  },
  render() {
    return (
      <div>
        <a href="/">Back</a>
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.content}</p>
      </div>
    );
  }
});
