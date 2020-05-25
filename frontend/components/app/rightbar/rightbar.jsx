import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMembership, destroyMembership } from '../../../actions/membership_actions';


function Rightbar() {
  const dispatch = useDispatch();
  const focus = useSelector(state => state.session.focus)

  return(
      <div className="rightbar">
        <div className="channel-actions">
          <div className="button-container" onClick={() => dispatch(createMembership(focus))}>
            <div className="circle-plus">
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon="plus"/>
            </div>
            join
          </div>
          <div className="button-container" onClick={() => dispatch(destroyMembership(focus))}>
            <div className="circle-plus">
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon="minus"/>
            </div>
            leave
          </div>
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

export default Rightbar;