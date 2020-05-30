import React from 'react'
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SmallChatItem = ({message}) => (
  <li className="chat-item" key={message.id}>
    <div className="chat-left-margin">
      <Moment className="gutter-timestamp" parse="YYYY-MM-DD HH:mm" date={message.time} format="h:mm" />
    </div>
    <div className="chat-content">
      {message.body}
    </div>
    <div className="chat-item-toolbar">
      <div className="chat-toolbar-button">
        <div style={{ fontSize: "10px" }} icon="times">E</div>
      </div>
      <div className="chat-toolbar-button">
        <FontAwesomeIcon style={{ fontSize: "10px" }} icon="times" />
      </div>
    </div>
  </li>
)

export default SmallChatItem;