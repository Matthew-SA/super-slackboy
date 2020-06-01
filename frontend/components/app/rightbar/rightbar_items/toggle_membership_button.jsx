import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMembership, destroyMembership } from '../../../../actions/membership_actions';
import { Link } from 'react-router-dom';

function ToggleMembershipButton() {
  const { id } = useParams();
  const memberships = useSelector(state => state.entities.memberships)

  const handleJoin = () => {
    memberships[id] ? alert("You're already subscribed to this channel.") : dispatch(createMembership({ chanId: id }))
  }

  const handleLeave = () => {
    if (!memberships[id]) alert("Cannot leave a channel you have not joined")
    id === "1" ? alert("Membership is required in General.") : dispatch(destroyMembership(memberships[id].membership_id))
  }

  if (memberships[id]) {
    return(
      <Link to='/app/channels/1' className="button-container" onClick={() => handleLeave()}>
        <div className="circle-plus">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon="minus" />
        </div>
        Leave
      </Link>
    )
  } else if (Object.values(memberships).length > 0 && !memberships[id]) {
    return(
      <div className="button-container" onClick={() => handleJoin()}>
        <div className="circle-plus">
          <FontAwesomeIcon style={{ fontSize: "18px" }} icon="plus" />
        </div>
        Join
      </div>
    )
  } else {
    return (
      <div className="button-container">
        <div className="circle-plus">
        </div>
      &nbsp;
      </div>
    )
  }
}
export default ToggleMembershipButton;