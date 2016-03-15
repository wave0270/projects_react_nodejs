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
    let query = {};
    if (this.state.hideCompleted) {
      // If hide completed is checked, filter tasks
      query = {checked: {$ne: true}};
    }
    return {
      tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch()
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
  // getTasks() {
  //   return [
  //     { _id: 1, text: "This is task 1" },
  //     { _id: 2, text: "This is task 2" },
  //     { _id: 3, text: "This is task 3" },
  //     { _id: 4, text: "This is task 4" },
  //     { _id: 5, text: "This is task 5" }
  //   ];
  // },
  toggleHideCompleted() {
    this.setState({
      hideCompleted: ! this.state.hideCompleted
    });
  },
  renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },
  // renderTasks() {
  //   return this.getTasks().map((task) => {
  //     return <Task key={task._id} task={task} />;
  //   });
  // },
  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    // insert data to mongo data
    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <label className="hide-completed">
          <input
            type="checkbox"
            readOnly={true}
            checked={this.state.hideCompleted}
            onClick={this.toggleHideCompleted} />
          Hide Completed Tasks
        </label>

        <ul>
          {this.renderTasks()}
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
