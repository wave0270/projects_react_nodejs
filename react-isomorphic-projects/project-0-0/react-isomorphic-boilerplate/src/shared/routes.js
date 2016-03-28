import { Route } from "react-router";
import React from "react";

// import AppHandler from "./components/AppHandler";
import BinhHandler from "./pages/home_page";
import JsxComponent from "./pages/jsx_page";

var auth = true;
console.log("Run client!")
export default (
  <Route>
		<Route newtest="a" name="home" handler={ BinhHandler } path="/" />
    <Route newtest="a" name="jsx" handler={ JsxComponent } path="/jsx" />
	</Route>
);
