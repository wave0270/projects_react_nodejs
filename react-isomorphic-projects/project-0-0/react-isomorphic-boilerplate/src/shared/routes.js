import { Route } from "react-router";
import React from "react";

// import AppHandler from "./components/AppHandler";
import BinhHandler from "./components/binh";
import JsxComponent from "./components/jsxComponent";

var auth = true;
console.log("Run client!")
console.log(BinhHandler)
export default (
  <Route>
		<Route newtest="a" name="home" handler={ BinhHandler } path="/" />
    <Route newtest="a" name="jsx" handler={ JsxComponent } path="/jsx" />
	</Route>
);
