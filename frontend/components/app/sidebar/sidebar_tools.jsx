import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestChannels } from '../../../actions/channel_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SidebarTools() {
  const dispatch = useDispatch()
  const focus = useSelector(state => state.session.focus)

  return(
    <div className={focus == "channel_browser" ? "sidebar-selected" : "sidebar-item"}>
      <div className="sidebar-header-container" onClick={() => dispatch(requestChannels())}>
        <p className="channel-header" >
          <FontAwesomeIcon
            style={{ fontSize: "13px" }}
            icon="search"
          />&nbsp;Channel browser
        </p>
      </div>
    </div>
  )
}

export default SidebarTools;