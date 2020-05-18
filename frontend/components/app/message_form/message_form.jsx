import React, { useState } from 'react';

function MessageForm() {
  const [messageBody, setMessageBody] = useState('')

  const handleSubmit = (e) => {
    if (e && e.keyCode == 13) {
      e.preventDefault();
      App.room.speak({ message: messageBody });
      setMessageBody('');
      console.log("hit!")
    }
  }

    return (
      <div className="primary-message-form" >
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

export default MessageForm;

