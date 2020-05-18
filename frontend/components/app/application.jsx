import React, { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import TopNav from './topnav/topnav'
import ViewHeader from './view_header/viewheader'
import Profile from './profile/profile'
import Sidebar from './sidebar/sidebar'
import Chatroom from './chatroom/chatroom'
import MessageForm from './message_form/message_form'
import Modal from './modal/modal'

import { requestUi } from '../../actions/ui_actions'


function Application() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUi())
  }, []);

  return (
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

export default Application;