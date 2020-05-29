import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { requestChannel } from '../../../../../actions/channel_actions'

import LargeChatItem from "./large_chat_item"
import SmallChatItem from "./small_chat_item"


function ChatWindow(){
  const dispatch = useDispatch();
  const bottom = useRef();
  const { id } = useParams();
  const channel = useSelector(state => state.entities.channels[id])
  const messages = useSelector(state => state.entities.messages);
  const msgIds = channel ? channel.messageIds : [];

  // useEffect(() => {
  //   dispatch(requestChannel(id))
  // },[id])

  useLayoutEffect(() => {
    if (messages) bottom.current.scrollIntoView();
  });

  const buildList = () => {
    const messageList = msgIds.map((id, i) => {
      let thisMsg = messages[id];
      let lastMsg = messages[msgIds[i - 1]]
      if (i === 0 || lastMsg.user_id !== thisMsg.user_id) {
        return <LargeChatItem message={thisMsg} key={i} />
      } else {
        return <SmallChatItem message={thisMsg} key={i} />
      }
    })
    return messageList
  };


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