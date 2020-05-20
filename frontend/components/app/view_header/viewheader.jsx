import React from 'react';
import { useSelector } from 'react-redux'

function ViewHeader() {
  const focus = useSelector(state => state.session.focus)
  const currentChannel = useSelector(state => state.entities.memberships[focus])

  const getChannelName = () => {
    let name = currentChannel ? currentChannel.name : ""
    return name
  }

  switch (focus) {
    case "channel_browser":
      return (
        <div className="viewHeader-container">
          <div className="left-header" >
            <h2>Channel Browser</h2>
          </div>
          {/* <div className="right-header">
        </div> */}
        </div>
      );
  
    default:
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
}

export default ViewHeader;