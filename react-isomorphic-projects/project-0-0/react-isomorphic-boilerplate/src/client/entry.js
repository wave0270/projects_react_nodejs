import React from "react";
import ReactDom from "react-dom";
import Router from "react-router";
import routes from "../shared/routes";

console.log("entry.js - not run in server")
Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  ReactDom.render(<Handler />, document.getElementById('app'));
});
