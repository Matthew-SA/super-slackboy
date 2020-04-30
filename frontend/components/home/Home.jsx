import React from "react";
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util'
import { Provider } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <header className="home-top-nav">
        <ul className="option-list">
          <Link to="/" className="nav-logo">
            <img src={window.logo} className="logo"/> 
          </Link>
          <li><button onClick={() => alert("hello world")}></button></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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
      <div className="first-subfooter">
        <ul className="social-icons">
          <li><a href="https://www.linkedin.com/in/matthew-andresen-ab8a5b191/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
          {/* <li><a href="https://angel.co/u/matthew-andresen"><FontAwesomeIcon icon={['fab', 'angellist']} /></a></li> */}
          <li><a href="https://github.com/Matthew-SA"><FontAwesomeIcon icon={['fab', 'github-square']} /></a></li>
          <li><a href="https://matthewandresen.com"><FontAwesomeIcon icon="briefcase" /></a></li>
        </ul>
      </div>
      <div className="second-subfooter"></div>
    </footer>
  </div>
);

export default Home;

