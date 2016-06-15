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
        <p id="checkclick" >asdsa</p>
      </div>
		);
	}
});
