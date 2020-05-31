import React from 'react'
import Moment from "react-moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LargeChatItem = ({message}) => (
  <li className="chat-item" key={message.id}>

    <img src={window.profile_pic} className="chat-avatar" />

    <div className="chat-content">
      <div className="chat-header">
        <div className="chat-author">{message.author.username}</div>
        <Moment parse="YYYY-MM-DD HH:mm" className="timestamp" date={message.time} format="h:mm A" />
      </div>
      <div className="chat-body">
        {message.body}
      </div>
    </div>

    <div className="chat-item-toolbar" style={{ top: "-16px"}}>
      <div className="chat-toolbar-button">
        <FontAwesomeIcon
          style={{ fontSize: "16px" }}
          icon={["far", "edit"]}
        />
      </div>
      <div className="chat-toolbar-button">
        <FontAwesomeIcon style={{ fontSize: "16px" }} icon="times" />
      </div>
    </div>
  </li>
)

export default LargeChatItem;