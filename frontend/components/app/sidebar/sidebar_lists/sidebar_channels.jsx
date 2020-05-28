import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateUi } from '../../../../actions/ui_actions'
import { openModal } from '../../../../actions/modal_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarItem from './sidebar_item'



function SidebarChannels() {
  const dispatch = useDispatch();
  const showChannels = useSelector(state => state.ui.persistentUi.show_channels)
  const memberships = useSelector(state => Object.values(state.entities.memberships))
  const channels = useSelector(state => state.entities.channels)

  const userChannels = memberships.map((membership, i) => {
    return <SidebarItem membership={membership} channel={channels[membership.channel_id]} key={i}/> 
  })

  return (
    <div className="sidebar-list-container">
      <div className="sidebar-header-container">
        <div className="sidebar-header" onClick={() => dispatch(updateUi("show_channels"))}>
          <FontAwesomeIcon className={showChannels ? "caret-down" : "caret-down caret-rotate"} icon="caret-down" />&nbsp;&nbsp;Channels
        </div>
        <div className="plus-button" onClick={() => dispatch(openModal("channel-dropdown"))}>
          <FontAwesomeIcon icon="plus" />
        </div>
      </div>
      {showChannels ? userChannels : ""}
    </div>
  )
}

export default SidebarChannels;