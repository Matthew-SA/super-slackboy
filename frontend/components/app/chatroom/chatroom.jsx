import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import "moment-timezone"
import LargeChatItem from "./large_chat_item"
import SmallChatItem from "./small_chat_item"
import { requestMessages, incomingMessage } from '../../../actions/message_actions'


function ChatRoom(){
  const dispatch = useDispatch();
  const bottom = useRef();
  const isInitialMount = useRef(true);
  const currentChannelId = useSelector(state => state.session.currentChannel);
  const messages = useSelector(state => state.entities.messages);
  const channelKeys = useSelector(state => Object.keys(state.entities.memberships));

  useEffect(() => {
    dispatch(requestMessages())
  }, []);

  useEffect(() => {
    if (messages) bottom.current.scrollIntoView();
  });

  useEffect(() => {
    App.room = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              const message = {
                author: data.author,
                body: data.body,
                id: data.id,
                time: data.time,
                channel_id: data.channel_id,
              };
              dispatch(incomingMessage(message))
              let element = document.getElementById(`chan-${message.channel_id}`)
              if (element) element.classList.add("sidebar-highlight")
              break;
          }
        },
        speak: function (data) { return this.perform("speak", data) },
        startListening: function (data) { return this.perform("start_listening", data)},
      }
    );
    return () => {
      App.cable.disconnect();
    }
  },[])

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
    <div className="chatroom-container">
      <div className="message-list">
        {buildMessageList()}
        <div ref={bottom} />
      </div>
    </div>
  );
}

export default ChatRoom;