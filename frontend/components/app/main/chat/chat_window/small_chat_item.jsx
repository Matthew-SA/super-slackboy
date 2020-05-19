import React from 'react'
import Moment from 'react-moment'


const SmallChatItem = ({message}) => (
  <li className="chat-item" key={message.id}>
    <div className="chat-left-margin">
      <Moment className="gutter-timestamp" parse="YYYY-MM-DD HH:mm" date={message.time} format="h:mm" />
    </div>
    <div className="chat-content">
      {message.body}
    </div>
  </li>
)

export default SmallChatItem;