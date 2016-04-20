// <template name="PostList">
//   <div>
//     This is the post list
//     <a onClick={ this.handleClick }>This is the post list</a>
//     <ul>
//       {this.data.posts.map(function(task) {
//         var path = FlowRouter.path('post', {_id: task._id})
//         return <li key={task._id}><a href={path}>{task.title}</a></li>
//       })}
//     </ul>
//   </div>
// </template>
//
// Template.PostList.helpers({
//   posts: function() {
//     return Posts.find({}, {sort: {_id: 1}}).fetch();
//   },
//   handleClick: function(){
//       console.log("handleClick");
//   }
// });

PostList = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState: function(){
    var posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    return {
      posts : posts
    };
  },
  getMeteorData: function(){
    var posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    return {
      posts : posts
    };
  },
  handleSubmit(event) {
    // event.preventDefault();
    // // Find the text field via the React ref
    // var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    // // insert data to mongo data
    // Meteor.call("addTask", text);
    // // Clear form
    // ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },
  render() {
    console.log(this)
    return (
      <div>
        This is the post list
        <ul>
          {this.state.posts.map(function(task) {
            var path = FlowRouter.path('post', {_id: task._id})
            return <li key={task._id}><a href={path}>{task.title}</a></li>
          })}
        </ul>
        <form className="new-task" onSubmit={this.handleSubmit} >
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new tasks" />
        </form>
      </div>
    );
  }
});
