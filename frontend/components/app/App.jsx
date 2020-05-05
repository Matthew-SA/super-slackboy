import React from "react";
import TopNav from './topnav/topnav_container'
import ViewHeader from './view_header/viewheader_container'
import Profile from './profile/profile_container.jsx'
import Sidebar from './sidebar/sidebar_container.jsx'
import Chatroom from './chatroom/chatroom_container'
import MessageForm from './message_form/message_form_container'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render(){
    return(
      <div className="app">
          <TopNav />
          <Profile/>
          <ViewHeader />
          <Sidebar/>
          <Chatroom/>
          <MessageForm/>
        </div>
    )
  }    
}

// const App = () => (
  
// );

export default App;