import React from 'react';


export default React.createClass({
  getDefaultProps:  function(){
    return {};
  },
  getInitialState: function(){
    console.log('getInitialState')
		return {};
	},

  componentWillMount: function(){
    console.log('componentWillMount')

  },
  componentDidMount: function(){
    $("#checkclick").click(function(){
      console.log("click")
    });
    console.log('componentDidMount')
  },
  componentUnMount: function(){
    console.log('componentUnMount')
  },
  checkClick: function(){
    console.log($("#checkclick"))

  },
	render : function(){
		return (
      <div>

        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-info">Client ID</button>
          </span>
          <input type="text" className="form-control" placeholder=""/>
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-info">Client Secret</button>
          </span>
          <input type="text" className="form-control" placeholder=""/>
        </div>
        <br />
        <div className="text-right">
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
		);
	}
});
