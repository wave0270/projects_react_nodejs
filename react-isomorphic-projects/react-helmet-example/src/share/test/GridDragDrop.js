import React from 'react';
import Helmet from 'react-helmet';

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'Test GridDragDrop'
    };
  },
    render: function() {
      console.log("dddddddddddddddd")
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

            </div>
        );
    }
});
