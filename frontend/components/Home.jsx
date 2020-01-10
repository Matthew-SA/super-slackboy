import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const Home = () => (
  <div>
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
        {/* <Route exact path="/" component={frontpage} /> */}
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
      <video autoPlay playsInline loop muted className="background-vid" poster="https://a.slack-edge.com/59662/marketing/img/homepage/video/brand-campaign_hero-poster.jpg"> 
      <source src="https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_hero-video.mp4" type="video/mp4"/></video>
    </div>
  </div>
);

export default Home;

