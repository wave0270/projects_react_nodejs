import React from "react";

/*listen event*/
// var ee = require('event-emitter');
// var emitter = ee({}), listener;


export default React.createClass( {
	getInitialState: function(){
		return {
			post: {
				title: 'title',
				desc: 'desc',
				comment: 'comment',
				imgLink: 'http://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg',
				url: 'http://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg'
			}
		}
	},

	componentDidMount: function(){
	},

	render : function(){
		return (
      <div>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Post to Wall</h3>
          </div>
          <div className="panel-body">
            <div className="col-sm-3">
              Connecting:

            </div>
            <div className="col-sm-9">
							<div className="input-group">
					      <input type="text" className="form-control" />
								<span className="input-group-addon">Title</span>
					    </div>
							<br />
							<div className="input-group">
					      <input type="text" className="form-control" />
								<span className="input-group-addon">Description</span>
					    </div>
							<br />
							<div className="input-group">
					      <input type="text" className="form-control" />
								<span className="input-group-addon">Comment</span>
					    </div>
							<br />
							<div className="row">
								<div className="col-sm-10">
									<div className="input-group">
							      <input value={ this.state.post.imgLink } type="text" className="form-control" />
										<span className="input-group-addon">Image Link</span>
							    </div>
								</div>
								<div className="col-sm-2">
									<img style={{width:'100%'}} src={ this.state.post.imgLink }/>
								</div>
							</div>

            </div>
          </div>
        </div>
      </div>
		);
	}
} );
