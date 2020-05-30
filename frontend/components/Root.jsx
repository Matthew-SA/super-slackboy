import React from "react";
import { Provider } from "react-redux";
import Application from "./app/application"
import history from './history' 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  HashRouter,
  Router,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import Home from "./home/Home"

export default ({ store }) => (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <ProtectedRoute path= "/app" component={Application}/>
          <AuthRoute path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
);