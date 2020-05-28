import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateUi } from '../../../../actions/ui_actions'
import { openModal } from '../../../../actions/modal_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarItem from './sidebar_item'



function SidebarDMs() {
  const dispatch = useDispatch();
  const showDMs = useSelector(state => state.ui.persistentUi.show_direct_messages)
  const memberships = useSelector(state => Object.values(state.entities.memberships))
  const channels = useSelector(state => state.entities.channels)

  const userChannels = memberships.map((membership, i) => {
    return <SidebarItem membership={membership} channel={channels[membership.channel_id]} key={i}/> 
  })

  return (
    <div className="sidebar-list-container">
      <div className="sidebar-header-container">
        <div className="sidebar-header" onClick={() => dispatch(updateUi("show_direct_messages"))}>
          <FontAwesomeIcon className={showDMs ? "caret-down" : "caret-down caret-rotate"} icon="caret-down" />&nbsp;&nbsp;Direct Messages
        </div>
        <div className="plus-button" onClick={() => dispatch(openModal("create-direct-message"))}>
          <FontAwesomeIcon icon="plus" />
        </div>
      </div>
      {showDMs ? userChannels : ""}
    </div>
  )
}

export default SidebarDMs;