import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleUiElement } from '../../../actions/ui_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function RightbarHeader() {
  const dispatch = useDispatch()
  const focus = useSelector(state => state.session.focus)
  const currentChannel = useSelector(state => state.entities.memberships[focus])
  const getChannelName = () => {
    let name = currentChannel ? currentChannel.name : ""
    return name
  }

  return(
    <div className="rightbar-header">
      <div className="rightbar-title-container">
        <div className="rightbar-title">Details</div>
        <div className="rightbar-subtitle"># {getChannelName()}</div>
      </div>
      <div className="rightbar-x" onClick={() => dispatch(toggleUiElement('rightbar'))}>
        <FontAwesomeIcon
          style={{ fontSize: "18px" }}
          icon="times"
        />
      </div>
    </div>
  )
}

export default RightbarHeader;