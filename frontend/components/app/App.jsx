import React from "react";
import TopNav from './topnav/topnav_container'
import ViewHeader from './view_header/viewheader_container'
import Sidebar from './sidebar/sidebar_container'
import Chatroom from './chatroom/chatroom_container'
import Profile from './profile/profile_container'
import MessageForm from './message_form/message_form_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div className="app">
    <TopNav />
    <Profile/>
    <ViewHeader />
    <Sidebar/>
    <Chatroom/>
    <MessageForm/>
    
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