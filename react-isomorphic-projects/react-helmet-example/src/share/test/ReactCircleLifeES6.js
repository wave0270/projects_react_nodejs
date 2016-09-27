import React from 'react';
import { Link, State } from 'react-router';
import Helmet from 'react-helmet';


/* NOTES:
1. this.setProps():
    var myComponent = React.renderComponent(
       new MyComponent({ data: someData }),
       document.getElementById('predictionContent')
    );
    myComponent.setProps({ data: someData2 });
*/

var ChildCom = React.createClass({
  getInitialState: function(){
    return this.props;
  },
  render: function() {
      return (
          <div>
              {this.state.data}
          </div>
      );
  }
});

class Components extends React.Component{
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {
      default: 'new',
      id: 'id',
    };
    /*bind this to function*/
    this.handleOnChange = this.handleOnChange.bind(this);
    this.testReplaceState = this.testReplaceState.bind(this);
    this.testKey = this.testKey.bind(this);
    this.testForceUpdate = this.testForceUpdate.bind(this);
    this.test = this.test.bind(this);
  }

  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(){
    /*
    true (default): allow run render()
    false : not allow run render()
    */
    console.log('shouldComponentUpdate')
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  handleOnChange(e){
    this.setState({id: e.target.value});
  }
  testReplaceState(){
    this.replaceState({id: new Date().getTime()})
  }
  testKey(){
    this.setState({id: new Date().getTime()})
  }
  testForceUpdate(){
    /*Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate()*/
    this.forceUpdate(this.setState({id: "force"}))
  }
  test(){
    this.setState({id: "no force"})
  }

  render() {
    console.log("-------Render----")
    console.log(this.state)
      return (
          <div>
              <Helmet
                  title={this.props.name}
                  meta={[
                      {property: 'og:title', content: this.props.name},
                  ]} />
              <h3>
                  {this.props.name}
              </h3>
              <div className="input-group">
                <span className="input-group-addon">@</span>
                <input className="form-control" onChange={this.handleOnChange} value={this.state.id} />
              </div>
              <div className="btn-group" role="group">
                <button className="btn btn-info" onClick={this.testReplaceState}>testReplaceState</button>
                <button className="btn btn-info" onClick={this.testKey}>testKey</button>
                <button className="btn btn-info" onClick={this.testForceUpdate}>testForceUpdate</button>
              </div>
              <br />
              <div className="btn-group" role="group">
                <button className="btn btn-success" onClick={this.test}>test</button>
              </div>
              {/*test children*/}
              <ChildCom data={this.state.id+ '-no key'}/>
              <ChildCom key="static key" data={this.state.id+ '-static key'} />
              <ChildCom key={ new Date().getTime()} data={this.state.id + '-dynamic key'}/>
          </div>
      );
  }
};

Components.propTypes = {

};
Components.defaultProps = {
  name: 'Test test-react-circle-life'
};

export default Components;
