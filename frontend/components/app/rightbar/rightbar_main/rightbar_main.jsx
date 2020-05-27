import React from 'react';
import MembershipToggle from './membership_toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RightbarMain() {

  return(
    <div className="Rightbar-main-container">
      <div className="channel-actions">
        <MembershipToggle/>
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