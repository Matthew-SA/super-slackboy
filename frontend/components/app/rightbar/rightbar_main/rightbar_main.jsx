import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JoinChannelButton from './join_channel_button';
import LeaveChannelButton from './leave_channel_button';

function RightbarMain() {
  // const { id } = useParams();
  // const channel = useSelector(state => state.entities.channels[parseInt(id)])

  // const getButton = () => {
  //   if (!channel) return;
  //   return channel.membership_id ? <LeaveChannelButton/> : <JoinChannelButton/>
  // }

  return(
    <div className="Rightbar-main-container">
      <div className="channel-actions">
        <JoinChannelButton />
        <LeaveChannelButton />
      </div>

      <div className="rightbar-item">
        <div className="rightbar-button">
          About
              <FontAwesomeIcon className="rightbar-chevron" icon="chevron-down" />
        </div>
      </div>

      <div className="rightbar-item">
        <div className="rightbar-button">
          Members
              <FontAwesomeIcon className="rightbar-chevron" icon="chevron-down" />
        </div>
      </div>

      <div className="rightbar-item">
        <div className="rightbar-button">
          Shortcuts
              <FontAwesomeIcon className="rightbar-chevron" icon="chevron-down" />
        </div>
      </div>

      <div className="rightbar-item">
        <div className="rightbar-button">
          Pinned Items
              <FontAwesomeIcon className="rightbar-chevron" icon="chevron-down" />
        </div>
      </div>

      <div className="rightbar-item">
        <div className="rightbar-button">
          Shared Files
              <FontAwesomeIcon className="rightbar-chevron" icon="chevron-down" />
        </div>
      </div>
    </div>
  )
}

export default RightbarMain;