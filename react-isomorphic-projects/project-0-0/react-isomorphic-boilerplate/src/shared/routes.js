import { Route } from "react-router";
import React from "react";

// import AppHandler from "./components/AppHandler";
import HomePage from "./pages/home_page";
import JsxPage from "./pages/jsx_page";

var auth = true;
console.log("Run client!")
export default (
  <Route>
		<Route newtest="a" name="home" handler={ HomePage } path="/" />
    <Route newtest="a" name="jsx" handler={ JsxPage } path="/jsx" />
	</Route>
);
