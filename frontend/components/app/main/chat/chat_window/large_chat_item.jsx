import React, { useState } from 'react'
import Moment from "react-moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';


function LargeChatItem({message}) {
  const [isEdit, setIsEdit] = useState(false)
  const [messageBody, setMessageBody] = useState(message.body);
  const userId = useSelector(state => state.session.id)


  const handleSubmit = (e) => {
    if (messageBody.length > 100) return;
    e.preventDefault();
    App.room.update({ message: messageBody, messageId: message.id });
    setIsEdit(false)
  }

  if (isEdit) {
    return(
      <div className={"edit-message-container"} key={message.id}>
        <div className="edit-body-container" >
          <img src={window.profile_pic} className="chat-avatar" />
          <form className="edit-form">
            <textarea
              wrap="hard"
              value={messageBody}
              onChange={(e) => setMessageBody(e.target.value)}
              placeholder='Message'
            />
          </form>
        </div>
        <div style={{ marginLeft: "36px" }}>
          <button
            className={"pale-button"}
            style={{ width: "65px", height: "28px", fontSize: "12px", margin: "8px 8px 0 8px" }}
            onClick={() => setIsEdit(!isEdit)}
          >
            Cancel
      </button>
          <button
            className={"green-button"}
            style={{ width: "132px", height: "28px", fontSize: "12px", margin: "8px 8px 0 8px" }}
            onClick={(e) => handleSubmit(e)}
          >
            Save Changes
      </button>
        </div>
      </div>
    )
  } else {
    return(
      <li className={"chat-item"}key={message.id}>
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

        <div className={message.user_id !== userId ? "hide" : "chat-item-toolbar"}>
          <div className="chat-toolbar-button" onClick={() => setIsEdit(!isEdit)}>
          <FontAwesomeIcon
            style={{ fontSize: "16px" }}
            icon={["far", "edit"]}
          />
        </div>
        {/* <div className="chat-toolbar-button">
          <FontAwesomeIcon style={{ fontSize: "16px" }} icon="times" />
        </div> */}
      </div>
      </li>
    )
  }
  
}

export default LargeChatItem;