import React from "react";
import GreetingContainer from '../greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// NOTE: REWRITE HEADER HERE.

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>This is the App!</h1>
      </Link>
      <GreetingContainer/> 
    </header>
    <Switch>
      {/* <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
    <footer>
      <h3>I'm a footer</h3>
    </footer>
  </div>
);

// const App = () => (
//   <div>
//     <header>
//       <h1>COMPONENT RENDERS WOW</h1>
//       <GreetingContainer/>
//     </header>
//     <Route path="/login" component={LoginFormContainer} />
//     <Route path="/signup" component={SignupFormContainer} />
//   </div>
// );

export default App;