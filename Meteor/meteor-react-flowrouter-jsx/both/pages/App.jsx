// App component - represents the whole app
App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getInitialState() {
    return {
      hideCompleted: false
    }
  },
  getMeteorData() {
    return {
      tasks: Posts.find(query, {sort: {_id: -1}}).fetch(),
    };
  },
  // getMeteorData() {
  //   var tasks = Tasks.find({}, {sort: {createdAt: -1}}).fetch();
  //   console.log(tasks)
  //   return {
  //     tasks: tasks
  //   }
  // },
  // getMeteorData() {
  //   return {
  //     tasks: Tasks.find({}).fetch()
  //   }
  // },



  // renderTasks() {
  //   // Get tasks from this.data.tasks
  //   return this.data.tasks.map((task) => {
  //     return <Task key={task._id} task={task} />;
  //   });
  // },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List </h1>
        </header>
      </div>
    );
  }
});
