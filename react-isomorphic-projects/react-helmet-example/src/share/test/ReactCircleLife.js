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

export default React.createClass({
  getDefaultProps: function(){
    console.log('getDefaultProps')
    return {
      name: 'Test test-react-circle-life'
    };
  },
  getInitialState: function(){
    console.log('getInitialState')
    return {
      default: 'new',
      id: 'id',
    };
  },
  componentWillMount: function(){
    console.log('componentWillMount')
  },
  componentDidMount: function(){
    console.log('componentDidMount')
  },
  shouldComponentUpdate: function(){
    /*
    true (default): allow run render()
    false : not allow run render()
    */
    console.log('shouldComponentUpdate')
    return true;
  },
  handleOnChange: function(e){
    this.setState({id: e.target.value});
  },
  testReplaceState: function(){
    this.replaceState({id: new Date().getTime()})
  },
  testKey: function(){
    this.setState({id: new Date().getTime()})
  },
  testForceUpdate: function(){
    /*Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate()*/
    this.forceUpdate(this.setState({id: "force"}))
  },
  test: function(){
    this.setState({id: "no force"})
  },

    render: function() {
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
});
