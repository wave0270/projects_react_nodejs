import React from "react";
import ReactDom from "react-dom";
import Router from "react-router";
import routes from "../shared/routes";

import LoginPage from "../shared/pages/login_page";

console.log("entry.js - not run in server")
Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  var auth = false;
  if(state.path === '/admin' && !auth){
    // Handler = LoginPage;
    window.location.href = "/login"
  }else{
    ReactDom.render(<Handler />, document.getElementById('app'));
  }

});
