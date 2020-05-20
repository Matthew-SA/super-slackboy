import React from 'react';
import { useSelector } from 'react-redux'

function ViewHeader() {
  const currentChannel = useSelector(
    state => state.entities.memberships[state.session.focus])

  const getChannelName = () => {
    let name = currentChannel ? currentChannel.name : ""
    return name
  }

  return (
    <div className="viewHeader-container">
      <div className="left-header">
        <h2># {getChannelName()}</h2>
      </div>
      {/* <div className="right-header">
        </div> */}
    </div>
  );
}

export default ViewHeader;