import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMembership, destroyMembership } from '../../../../actions/membership_actions';

function membershipToggle() {
  const { id } = useParams();
  const memberships = useSelector(state => Object.values(state.entities.memberships))
  const getMembership = () => {
      for (let membership of memberships) {
        if (membership.channel_id == id) return membership
      }
    return null;
  }

  const buildButton = () => {
    let membership = getMembership();
    if (membership) {
      return(
        <div className="button-container" onClick={() => dispatch(destroyMembership(membership.id))}>
          <div className="circle-plus">
            <FontAwesomeIcon style={{ fontSize: "18px" }} icon="minus" />
          </div>
          Leave
        </div>
      )
    } else {
      return(
        <div className="button-container" onClick={() => dispatch(createMembership(id))}>
          <div className="circle-plus">
            <FontAwesomeIcon style={{ fontSize: "18px" }} icon="plus" />
          </div>
          Join
        </div>
      )
    }
  }

  return(
    // null
    buildButton()
  )
}

export default membershipToggle;