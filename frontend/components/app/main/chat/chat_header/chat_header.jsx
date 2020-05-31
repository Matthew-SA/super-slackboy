import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateUi } from '../../../../../actions/ui_actions'



function ChatHeader() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const channel = useSelector(state => state.entities.channels[id])

  const userCount = channel ? channel.userIds.length : " ";
  const name = channel ? channel.name : " ";
  const topic = channel ? channel.topic : " ";

  return(
    <div className="main-header-container">
      <div className="main-header-left">
        <div className="main-header-title"># {name}</div>
        <div className="main-header-subtitle">
          <FontAwesomeIcon
            style={{ fontSize: "12px" }}
            icon={["far", "user"]}
          />
            &nbsp;{userCount}
          <div className="main-header-divider"></div>
          <div className="main-header-topic">{topic} </div>
        </div>
      </div>
      <div
        className="info-button"
        onClick={() => dispatch(updateUi("rightbar"))}
      >
        <FontAwesomeIcon style={{ fontSize: "18px" }} icon="info-circle" />
      </div>
    </div>
  )
}

export default ChatHeader;