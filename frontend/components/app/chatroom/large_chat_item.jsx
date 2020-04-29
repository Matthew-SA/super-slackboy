import React from 'react'
import Moment from "react-moment"


const LargeChatItem = ({message}) => (
  <li className="post" key={message.id}>
    <div className="post-left-margin">
      <img src={window.profile_pic} className="post-avatar" />
    </div>
    <div className="post-content">
      <div className="post-header">
        <div className="post-author">{message.author.username}</div>
        <Moment parse="YYYY-MM-DD HH:mm" className="timestamp" date={message.time} format="h:mm A" />
      </div>
      <div className="post-body">
        {message.body}
      </div>
    </div>
  </li>
)

export default LargeChatItem;