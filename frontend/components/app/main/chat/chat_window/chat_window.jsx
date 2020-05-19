import React, { useEffect, useRef } from "react";
import { useSelector } from 'react-redux'
import "moment-timezone"
import LargeChatItem from "./large_chat_item"
import SmallChatItem from "./small_chat_item"


function ChatWindow(){
  const bottom = useRef();
  const isInitialMount = useRef(true);
  const currentChannelId = useSelector(state => state.session.currentChannel);
  const messages = useSelector(state => state.entities.messages);
  const channelKeys = useSelector(state => Object.keys(state.entities.memberships));

  useEffect(() => {
    if (messages) bottom.current.scrollIntoView();
  });

  useEffect(() => {
    if (!channelKeys.length) return;
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      App.room.startListening({ room: currentChannelId });
    }
  }, [channelKeys.length]);

  const buildMessageList = () => {
    let messagesArray = Object.values(messages)
    let lastAuthorId = null;

    const messageList = messagesArray.map((message, idx) => {
      if (message.channel_id === currentChannelId) {
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

  //   // TODO: repurpose chatroom to be a channel browser.  "test" class in main currently works!

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