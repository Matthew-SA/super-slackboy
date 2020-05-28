import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUi } from '../../../../actions/ui_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router'

function RightbarHeader() {
  const dispatch = useDispatch()
  const { id } = useParams();
  const channel = useSelector(state => state.entities.channels[id])

  const name = channel ? channel.name : " ";

  return (
    <div className="rightbar-header">
      <div className="rightbar-title-container">
        <div className="rightbar-title">Details</div>
        <div className="rightbar-subtitle"># {name}</div>
      </div>
      <div className="rightbar-x" onClick={() => dispatch(updateUi('rightbar'))}>
        <FontAwesomeIcon
          style={{ fontSize: "18px" }}
          icon="times"
        />
      </div>
    </div>
  )
}

export default RightbarHeader;