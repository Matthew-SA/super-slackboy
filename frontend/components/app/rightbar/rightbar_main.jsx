import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleMembershipButton from './rightbar_items/toggle_membership_button';
import RightbarAbout from './rightbar_items/rightbar_about';

function RightbarMain() {

  return(
    <div className="Rightbar-main-container">
      <div className="channel-actions">
        <ToggleMembershipButton/>
      </div>

      <RightbarAbout />

      <div className="rightbar-item">
        <div className="rightbar-button" style={{opacity: ".3", cursor: "default"}}>
          Members
          <FontAwesomeIcon className="rightbar-chevron" icon="chevron-down" />
        </div>
      </div>

      <div className="rightbar-item">
        <div className="rightbar-button" style={{opacity: ".3", cursor: "default"}} >
          Shortcuts
          <FontAwesomeIcon className="rightbar-chevron" icon="chevron-down" />
        </div>
      </div>

      <div className="rightbar-item">
        <div className="rightbar-button" style={{opacity: ".3", cursor: "default"}}>
          Pinned Items
          <FontAwesomeIcon className="rightbar-chevron" icon="chevron-down" />
        </div>
      </div>

      <div className="rightbar-item">
        <div className="rightbar-button" style={{opacity: ".3", cursor: "default"}}>
          Shared Files
          <FontAwesomeIcon className="rightbar-chevron" icon="chevron-down" />
        </div>
      </div>
    </div>
  )
}

export default RightbarMain;