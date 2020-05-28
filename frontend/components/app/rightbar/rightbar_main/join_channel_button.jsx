import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMembership } from '../../../../actions/membership_actions';

function JoinChannelButton() {
  const { id } = useParams();
  const channels = useSelector(state => state.entities.channels)
  const memberships = useSelector(state => state.entities.memberships)

  const handleClick = () => {
    channels[id].membership_id ? alert("You're already subscribed to this channel.") : dispatch(createMembership(id))
  }

  return (
    <div className="button-container" onClick={() => handleClick()}>
      <div className="circle-plus">
        <FontAwesomeIcon style={{ fontSize: "18px" }} icon="plus" />
      </div>
      Join
    </div>
  )
}

export default JoinChannelButton;