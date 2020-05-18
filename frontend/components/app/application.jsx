import React from "react";
import TopNav from './topnav/topnav_container'
import ViewHeader from './view_header/viewheader_container.jsx'
import Profile from './profile/profile_container.jsx'
import Sidebar from './sidebar/sidebar_container.jsx'
import Chatroom from './chatroom/chatroom_container'
import MessageForm from './message_form/message_form'
import Modal from './modal/modal'

class Application extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestUi()
    this.props.requestChannels()
  }

  componentWillUnmount() {
    App.cable.disconnect()
  }

  render(){
    return(
      <div className="app">
          <Modal />
          <TopNav />
          <Profile />
          <ViewHeader />
          <Sidebar />
          <Chatroom />
          <MessageForm />
        </div>
    )
  }    
}

export default Application;