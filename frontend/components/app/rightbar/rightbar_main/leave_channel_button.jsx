import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { destroyMembership } from '../../../../actions/membership_actions';
import { Link } from 'react-router-dom';

function LeaveChannelButton() {
  const { id } = useParams();
  const channel = useSelector(state => state.entities.channels[parseInt(id)])

  const handleClick = () => {
    if (!channel.membership_id) alert("Cannot leave a channel you have not joined")
    id === "1" ? alert("Membership is required in General.") : dispatch(destroyMembership(channel.membership_id))
  }

  return (
    <Link to='/app/channels/1' className="button-container" onClick={() => handleClick()}>
      <div className="circle-plus">
        <FontAwesomeIcon style={{ fontSize: "18px" }} icon="minus" />
      </div>
      Leave
    </Link>
  )
}

export default LeaveChannelButton;