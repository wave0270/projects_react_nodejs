import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
/*Private components*/
var Datetime = require('react-datetime');
var moment = require('moment');

export default React.createClass({
  getDefaultProps: function(){
    return {
      name: 'UI'
    };
  },
  getInitialState: function(){
    return {
      datetime: {
        time: 'Wed Jul 13 2016 00:00:00 GMT+0700',
        isShow: false,
      }
    }
  },
  /*dateTime*/
  datetimeFormat: function(time){
    return moment(time).format('MM/DD/YY hh:mm A');
  },
  datetimeOnChange: function(e){
    console.log(e._d)
    this.state.datetime.time = e._d;
    this.setState({dateTime: this.state.datetime});
  },
  toggleShowDate: function(){
    this.state.datetime.isShow= this.state.datetime.isShow? false: true;
    this.setState({dateTime: this.state.datetime});
  },

  render: function() {
    return (
      <div className="w-pages">
        <Helmet
            title={this.props.name+" test"}
            meta={[
                {property: 'og:title', content: 'About'},
            ]} />
            <div className="main-layout">
              {/*Top-area*/}
              <div className="">
                <TopMenu />
              </div>
              {/*End Top-area*/}

              {/*Main-area*/}
              <div className="container-fluid">

                {/*Left-area*/}
                <div className="col-sm-3 left-content">
                  <NavMenu />
                </div>
                {/*End Left-area*/}

                {/*Content-area*****************/}
                <div className="col-sm-9 main-content">
                  <p>{this.props.name} page</p>
                  {/*datetime advance*/}
                  <div>
                    <div className="input-group">
                      <input className='form-control' value={this.datetimeFormat(this.state.datetime.time)}/>
                      <span className="input-group-btn">
                        <button onClick={this.toggleShowDate} className="btn btn-default" type="button"><i className="fa fa-clock-o" aria-hidden="true"></i></button>
                      </span>
                    </div>
                     { this.state.datetime.isShow &&
                      <Datetime
                        open={true}
                        value={this.state.datetime.time}
                        onChange={this.datetimeOnChange} />
                     }
                  </div>
                  {/*end datetime advance*/}
                </div>
                {/*End Content-area****************/}

              </div>
              {/*End Main-area*/}

              {/*Bottom-area*/}
              <div className="">
                <p>bottom</p>
              </div>
              {/*End Bottom-area*/}
          </div>
    </div>
    );
  }
});
