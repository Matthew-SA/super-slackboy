import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { logout } from "../../../actions/session_actions";

function ProfileDropdown() {
  const currentUserName = useSelector(
    (state) => state.entities.users[state.session.id].username
  );
  const dispatch = useDispatch();

  return (
    <div className="profile-dropdown">
      <div className="profile-menu-header">
        <img src={window.profile_pic} className="profile-pic" />
        <h6>{currentUserName}</h6>
      </div>

      <div className="profile-divider"></div>

      <div className="dropdown-menu-item" onClick={() => dispatch(logout())}>
          Sign out of <span className="bold">Super SlackBoy</span>
      </div>
    </div>
  )
}

export default ProfileDropdown