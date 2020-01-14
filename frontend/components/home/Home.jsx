import React from "react";
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util'
import { Provider } from 'react-redux';
import Intro from "./intro/intro"
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const Home = () => (
  <div>
    <div className="home-page">
      <header className="nav-list">
          <ul className="option-list">
            <Link to="/" className="nav-logo">
              <img src={window.logo} className="logo"/> 
            </Link>
            <li>Why Slack?</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Enterprise</li>
            <li>Pricing</li>
          </ul>
          <ul className="user-links">
            <li>
              <Link to="/login">Sign in</Link>
            </li>
            <li>
              <Link to="/signup" className="purple-button">GET STARTED</Link>
            </li>
          </ul>
      </header>
      <div className="main">
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/" component={Intro} />
        </Switch>
      </div>
    </div>
    <footer className="home-footer">

    </footer>
  </div>
);

export default Home;

