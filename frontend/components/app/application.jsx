import React from "react";
import TopNav from './topnav/topnav'
import ViewHeader from './view_header/viewheader_container.jsx'
import Profile from './profile/profile'
import Sidebar from './sidebar/sidebar'
import Chatroom from './chatroom/chatroom'
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