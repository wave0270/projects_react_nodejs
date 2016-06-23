import React from 'react';
import Helmet from 'react-helmet';

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Test GridDragDrop'
    };
  },
  testClick: function(){
    console.log(new Date().getTime())
  },
    render: function() {
      console.log("dddddddddddddddd"+this.props.name)
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
                <a onClick={this.testClick}>click test </a>
            </div>
        );
    }
});
