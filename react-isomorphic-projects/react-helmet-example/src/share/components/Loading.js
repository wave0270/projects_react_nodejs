import React from "react";


export default React.createClass( {
  style : {
    width: '100%', height: '100%', position: 'absolute', zIndex: "100", background: '#FFFFFF', opacity: '0.4',
    top: '0', left:'0',
  },
  styleNew: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-50px",
    marginLeft: "-50px",
    width: "100px",
    height: "100px",
    zIndex:"101"
  },

	render : function(){
		return (
      <div>
        <div style={this.style}></div>
        <div style={this.styleNew}>
          <span className="fa fa-spinner fa-spin"
            style={{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)", fontSize: "40px"}} >
          </span>
        </div>
      </div>
		);
	}
} );
