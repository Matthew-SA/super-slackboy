import React from "react";
import { Provider } from "react-redux";
import App from "./App"
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import Home from "./Home"

export default ({ store }) => (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <ProtectedRoute path= "/app" component={App}/>
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </Provider>
);