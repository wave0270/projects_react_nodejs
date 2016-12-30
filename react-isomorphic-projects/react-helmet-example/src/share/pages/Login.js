import React from 'react';
import Helmet from 'react-helmet';

let Login = React.createClass({
    render: function() {
        return (
            <div className="container">
                <Helmet
                    title="Login"
                    meta={[
                        {property: 'og:title', content: 'Login'},
                    ]} />
                <form className="form-signin">
                  <h2 className="form-signin-heading">Please sign in</h2>
                  <label htmlFor="inputEmail" className="sr-only">Email address</label>
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
});

export default Login;
