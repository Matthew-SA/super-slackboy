import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Rightbar() {

  return(
      <div className="rightbar">
        <div className="channel-actions"></div>

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

export default Rightbar;