import { Route } from "react-router";
import React from "react";

// import AppHandler from "./components/AppHandler";
import HomePage from "./pages2/home_page";
import JsxPage from "./pages2/jsx_page";
import LoginPage from "./pages2/login_page";
import ContactPage from "./pages2/contact_page";
import PublishingLinkedin from "./pages2/linkedin-publishing";
import PublishingLinkedinConnect from "./pages2/linkedin-publishing-connect";
import FetchContent from "./pages2/fetch_content";
//test page:
import BootstrapPage from "./pages2/test_bootstrap_page";
import TestServerPage from "./pages2/test_server_page";
import TestClientPage from "./pages2/test_client_page";

var auth = true;
console.log("Run client!")
export default (
  <Route path="/">
		<Route name="home" handler={ HomePage } path="/" />
    <Route name="jsx" handler={ JsxPage } path="/jsx" />
    <Route name="login" handler={ LoginPage } path="/login" />
    <Route name="contact" handler={ ContactPage } path="/contact" />
    <Route name="linkedin-publishing" handler={ PublishingLinkedin } path="/linkedin-publishing" />
    <Route name="linkedin-connect" handler={ PublishingLinkedinConnect } path="/linkedin-connect" />
    <Route name="fetch-content" handler={ FetchContent } path="/fetch-content" />

    <Route name="bootstrap" handler={ BootstrapPage } path="/bootstrap" />
    <Route name="test-server" handler={ TestServerPage } path="/test-server" />
    <Route name="test-client" handler={ TestClientPage } path="/test-client" />


	</Route>
);
