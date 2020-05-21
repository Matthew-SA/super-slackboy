import React from 'react';

function DirectMessageUserItem({user}) {

  return(
    <div className="dm-user-item">
      <img src={window.profile_pic} className="chat-avatar" />
      {user.username} 
    </div>
  )
}

export default DirectMessageUserItem