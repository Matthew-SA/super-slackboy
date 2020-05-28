import React, { useState } from 'react';
import { useParams } from 'react-router'


function ChatForm() {
  const [messageBody, setMessageBody] = useState('')
  const { id } = useParams();

  const handleSubmit = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      App.room.speak({ message: messageBody, room: id });
      setMessageBody('');
    }
  }

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
    );

}

export default ChatForm;

