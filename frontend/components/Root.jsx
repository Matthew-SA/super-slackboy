import React from "react";
import { Provider } from "react-redux";
import Application from "./app/application"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

import Home from "./home/Home"

export default ({ store }) => (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <ProtectedRoute path= "/app" component={Application}/>
          <AuthRoute path="/" component={Home} />
        </Switch>
      </HashRouter>
    </Provider>
);