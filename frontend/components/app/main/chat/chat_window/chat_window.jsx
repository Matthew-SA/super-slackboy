import React, { useLayoutEffect, useRef } from "react";
import { useSelector } from 'react-redux'
import "moment-timezone"
import LargeChatItem from "./large_chat_item"
import SmallChatItem from "./small_chat_item"


function ChatWindow(){
  const bottom = useRef();
  const currentChannelId = useSelector(state => state.session.focus);
  const messages = useSelector(state => state.entities.messages);

  useLayoutEffect(() => {
    if (messages) bottom.current.scrollIntoView();
  });

  const buildMessageList = () => {
    let messagesArray = Object.values(messages)
    let lastAuthorId = null;

    const messageList = messagesArray.map((message, idx) => {
      if (message.channel_id == currentChannelId) {
        if (lastAuthorId === message.author.id) {
          lastAuthorId = message.author.id
          return (
            <SmallChatItem message={message} key={idx} />
          );
        } else {
          lastAuthorId = message.author.id
          return (
            <LargeChatItem message={message} key={idx} />
          );
        }
      }
    });
    return messageList
  }

  return (
    <div className="chat-window">
      <div className="chat-log">
        {buildMessageList()}
        <div ref={bottom} />    
      </div>
    </div>
  );
}

export default ChatWindow;