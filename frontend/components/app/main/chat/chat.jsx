import React from 'react'
import ChatWindow from './chat_window/chat_window'
import ChatForm from './chat_form/chat_form'

function Chat() {

  return(
    <div className="chat-container">
      <ChatWindow/>
      <ChatForm />
    </div>
  )
}

export default Chat;