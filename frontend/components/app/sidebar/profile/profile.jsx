import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { openModal } from "../../../../actions/modal_actions";


const Profile = () => {
  const currentUserName = useSelector(
    (state) => state.entities.users[state.session.id].username
  );

  const dispatch = useDispatch()

  return (
    <div className="profile" onClick={() => dispatch(openModal("profile-dropdown"))}>
      <div className="profile-title">
        Super SlackBoy&nbsp;&nbsp;
        <FontAwesomeIcon style={{fontSize: "9px", marginBottom: "2px"}} className="chevron-down" icon="chevron-down" />
      </div>
      <div className="profile-user">
        <FontAwesomeIcon className="status-dot" icon="circle" />{" "}
        {currentUserName}
      </div>
    </div>
  );
}

export default Profile;