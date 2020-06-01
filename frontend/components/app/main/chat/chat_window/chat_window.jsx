import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { requestChannel } from '../../../../../actions/channel_actions'
import { incomingMessage } from '../../../../../actions/message_actions'
import LargeChatItem from "./large_chat_item"
import SmallChatItem from "./small_chat_item"



function ChatWindow(){
  const dispatch = useDispatch();
  const bottom = useRef();
  const { id } = useParams();
  const channel = useSelector(state => state.entities.channels[id])
  const memberships = useSelector(state => state.entities.memberships)
  const messages = useSelector(state => state.entities.messages);
  const msgIds = channel ? channel.messageIds : [];

  useEffect(() => {
    dispatch(requestChannel(id))

    // if (App.room) App.cable.subscriptions.remove(App.room)
    App.room = App.cable.subscriptions.create(
      { channel: "ChatChannel", room: id },
      {
        received: data => {
          switch (data.type) {
            case "message":
              const message = {
                author: data.author,
                body: data.body,
                id: data.id,
                time: data.time,
                user_id: data.user_id,
                channel_id: data.channel_id,
              };
              dispatch(incomingMessage(message))
              let element = document.getElementById(`chan-${message.channel_id}`)
              if (element) element.classList.add("sidebar-highlight")
              break;
            case "channel":
              console.log(data)
              break;
          }
        },
        update: function(data) { return this.perform("update", data)},
        speak: function (data) { return this.perform("speak", data) },
      }
    );

    return () => {
      App.room.unsubscribe();
    }
  }, [id])

  useLayoutEffect(() => {
    if (messages) bottom.current.scrollIntoView();
  });

  const buildList = () => {
    let lastMsgUserId = 0;
    let chanId = parseInt(id)
    const messageList = (Object.values(messages)).map((message, i) => {
      if (message.channel_id !== chanId) {
        return
      } else if (i === 0 || message.user_id !== lastMsgUserId) {
        lastMsgUserId = message.user_id
        return <LargeChatItem message={message} key={i} />
      } else {
        lastMsgUserId = message.user_id
        return <SmallChatItem message={message} key={i} />
      }
    })
    return messageList
  };

  // const buildList = () => {
  //   const messageList = msgIds.map((id, i) => {
  //     let thisMsg = messages[id];
  //     let lastMsg = messages[msgIds[i - 1]]
  //     if (i === 0 || lastMsg.user_id !== thisMsg.user_id) {
  //       return <LargeChatItem message={thisMsg} key={i} />
  //     } else {
  //       return <SmallChatItem message={thisMsg} key={i} />
  //     }
  //   })
  //   return messageList
  // };


  return (
    <div className="chat-window">
      <div className="chat-log">
        {buildList()}
        <div ref={bottom} />    
      </div>
    </div>
  );
}

export default ChatWindow;