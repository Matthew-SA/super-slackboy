import React from 'react'
import Moment from 'react-moment'


const SmallChatItem = ({message}) => (
  <li className="post" key={message.id}>
    <div className="post-left-margin">
      <Moment className="gutter-timestamp" parse="YYYY-MM-DD HH:mm" date={message.time} format="h:mm" />
    </div>
    <div className="post-content">
      {message.body}
    </div>
  </li>
)

export default SmallChatItem;