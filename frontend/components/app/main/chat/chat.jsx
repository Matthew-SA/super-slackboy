import React from 'react'
import ChatHeader from './chat_header/chat_header'
import ChatWindow from './chat_window/chat_window'
import ChatForm from './chat_form/chat_form'

function Chat() {

  return(
    <div className="chat-container">
      <ChatHeader/>
      <ChatWindow/>
      <ChatForm />
    </div>
  )
}

export default Chat;