import { Route } from "react-router";
import React from "react";

// import AppHandler from "./components/AppHandler";
import BinhHandler from "./components/binh";
import JsxComponent from "./components/jsxComponent";

var auth = true;
console.log(auth)
export default (
  <Route>
		<Route handler={ BinhHandler } path="/" />
    <Route handler={ JsxComponent } path="/jsx" />
	</Route>
);
