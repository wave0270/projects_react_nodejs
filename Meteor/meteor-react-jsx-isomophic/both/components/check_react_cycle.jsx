ReactCycle = React.createClass({
  getDefaultProps: function(){
    console.log("1.1 getDefaultProps")
    return {};
  },
  getInitialState: function(){
    console.log("1.2 getInitialState")
    var posts = JSON.parse(JSON.stringify(Posts.find({}, {sort: {_id: 1}}).fetch()));
    // console.log(Posts.find().fetch())
    return {
      posts : posts,
      name : 'ReactCycle'
    };
  },
  componentWillMount: function(){
    console.log("1.3 componentWillMount")
  },
  componentDidMount: function(){
    console.log("1.5 componentDidMount")
  },
  componentWillReceiveProps: function(){
    console.log("componentWillReceiveProps")
  },
  shouldComponentUpdate: function(){
    console.log("2.1 shouldComponentUpdate")
    return true;
  },
  componentWillUpdate: function(){
    console.log("2.2 componentWillUpdate")
  },
  componentDidUpdate: function(){
    console.log("2.4 componentDidUpdate")
  },
  componentWillUnmount: function(){
    console.log("3.1 componentWillUnmount")
  },

  /*manudal function*/
  handleChange: function(key,event){
    console.log(key)
    var state = {};
    state[key] = event.target.value;
    this.setState(state);
  },
  render() {
    console.log("1.4 2.3 render")
    console.log(Posts.find().fetch())
    return (
      <div>
        This is the ReactCycle
        <ul>
          {this.state.posts.map(function(task) {
            var path = FlowRouter.path('post', {_id: task._id})
            return <li key={task._id}><a href={path}>{task.title}</a></li>
          })}
        </ul>
        <input value={ this.state.name } onChange={ this.handleChange.bind(this,'name') }/>
      </div>
    );
  }
});
