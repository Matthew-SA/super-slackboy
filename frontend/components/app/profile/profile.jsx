import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { openModal } from "../../../actions/modal_actions";


const Profile = () => {
  const currentUserName = useSelector(
    (state) => state.entities.user[state.session.id].username
  );

  const dispatch = useDispatch()

  return (
    <div
      className="profile"
      onClick={() => dispatch(openModal("profile-dropdown"))}
    >
      <h2>
        Super SlackBoy
        <FontAwesomeIcon className="chevron-down" icon="chevron-down" />
      </h2>
      <p>
        <FontAwesomeIcon className="status-dot" icon="circle" />{" "}
        {currentUserName}
      </p>
    </div>
  );
}

export default Profile;