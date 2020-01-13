import React from "react";
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Provider } from 'react-redux';
import Topbar from './greeting/topbar_container'
import Chatroom from './Chatroom'
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
    <Topbar/>
    <div>
      <Link to="/" className="header-link">
        <h1>CHAT</h1>
      </Link>
      <Chatroom />
    </div>
    
    <Switch>
      {/* <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
    {/* <TopBar/>  */}
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