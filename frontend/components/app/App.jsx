import React from "react";
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Provider } from 'react-redux';
import Topnav from './topnav/topnav_container'
import Sidebar from './sidebar/sidebar'
import Chatroom from './Chatroom'
import Profile from './profile/profile_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div className="client-page">
    <Profile/>
    <Topnav />
    <Sidebar/>
    <Chatroom/>
    
    {/* <Switch> */}
      {/* <Route exact path="/" component={SearchContainer} /> */}
    {/* </Switch> */}
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