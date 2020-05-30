import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { createMembership } from '../../../../../actions/membership_actions'

function ChatForm() {
  const [messageBody, setMessageBody] = useState('');
  const dispatch = useDispatch()
  const { id } = useParams();
  const memberships = useSelector(state => state.entities.memberships)
  const channel = useSelector(state => state.entities.channels[id])
  const rightbar = useSelector(state => state.ui.persistentUi.rightbar)

  const handleSubmit = (e) => {
    if (e.keyCode == 13) {
      if (messageBody.length > 100) return;
      e.preventDefault();
      App.room.speak({ message: messageBody, room: id });
      setMessageBody('');
    }
  }

  if (!memberships || rightbar === undefined) return null;

  if (memberships[id]) {
    return (
      <div className="chat-form-container" >
        <form onKeyDown={handleSubmit}>
          <textarea
            wrap="hard"
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            placeholder='Message'
          />
        </form>
      </div>
    )
  } else {
    return (
      <div className="cover-container">
        <div className="cover-preview-title">
          You are previewing <text style={{fontWeight: "900"}}># {channel.name}</text> 
        </div>
        <div className="preview-metadata">
  
        </div>
        <div className="cover-buttons-container">
          <button className="green-button" onClick={() => dispatch(createMembership({ chanId: id }))}>Join Channel</button>
          <div style={{width: "16px"}}></div>
          {!rightbar ? <button className="pale-button">See More Details</button> : ""}
        </div>
      </div>
    );
  }
}

export default ChatForm;

