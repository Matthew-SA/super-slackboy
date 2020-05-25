import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateUi } from '../../../actions/ui_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ViewHeader() {
  const dispatch = useDispatch();
  const focus = useSelector(state => state.session.focus)
  const currentChannel = useSelector(state => state.entities.channels[focus])
  const getChannelName = () => {
    return currentChannel ? currentChannel.name : ""
  }

  const getUserCount = () => {
    return currentChannel ? currentChannel.userIds.length : ""
  }

  const getTopic = () => {
    return currentChannel ? currentChannel.topic : ""
  }

  switch (focus) {
    case "channel_browser":
      return (
        <div className="viewHeader-container">
          <div className="left-header">
            <div className="view-header-title">Channel Browser</div>
          </div>
        </div>
      );
  
    default:
      return (
        <div className="viewHeader-container">
          <div className="left-header">
            <div className="view-header-title"># {getChannelName()}</div>
            <div className="view-header-subtitle">
              <FontAwesomeIcon
                style={{ fontSize: "12px" }}
                icon={["far", "user"]}
              />
              &nbsp;{getUserCount()}
              <div className="view-header-divider"></div>
              <div className="view-header-topic">{getTopic()} </div>
            </div>
          </div>
          <div
            className="info-button"
            onClick={() => dispatch(updateUi("rightbar"))}
          >
            <FontAwesomeIcon style={{ fontSize: "18px" }} icon="info-circle" />
          </div>
        </div>
      );
  }
}

export default ViewHeader;