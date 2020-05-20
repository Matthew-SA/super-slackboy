import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Util from '../../../util/util';
import { toggleUiElement } from '../../../actions/ui_actions';
import { updateMembership } from '../../../actions/membership_actions';
import { requestChannels } from '../../../actions/channel_actions';
import { openModal } from '../../../actions/modal_actions';

function Sidebar() {
  const dispatch = useDispatch()

  const focus = useSelector(state => state.session.focus)
  const channelMemberships = useSelector(
    state => (state.entities.memberships
  ), shallowEqual)
  const showChannels = useSelector(state => state.ui.show_channels )
  const showDirectMessages = useSelector(state => state.ui.show_direct_messages )

  const isSelected = (option) => {
    return focus == option ? "sidebar-selected" : "sidebar-item"
  }

  const getMembershipList = () => {
    let membershipsArray = Object.values(channelMemberships);
    let memberships = membershipsArray.sort(Util.compareValues('name', 'asc'))

    const applySidebarClasses = (membership) => {
      let response = isSelected(membership.channel_id)
      if (membership.unreadMessages) response += " sidebar-highlight"
      return response
    }

    const membershipList = memberships.map((membership, idx) => {
      return (
        <li 
          className={applySidebarClasses(membership)} 
          id={`chan-${membership.channel_id}`}
          onClick={() => {
            dispatch(updateMembership(membership.id))
          }} 
          key={idx}>
            # {membership.name}
        </li>
      )
    })
  
    return(
      <ul className="sidebar-ul">
        {membershipList}
      </ul>
    )
  }

  const getDirectMessageList = () => {
    return (
      <ul className="sidebar-ul">
        {/* <li className="sidebar-item"># Demo item 1</li>
        <li className="sidebar-item"># Demo item 2</li>
        <li className="sidebar-item"># Demo item 3</li> */}
      </ul>
    )
  }

  const isShown = (uiElement) => (
    uiElement ? "caret-down" : "caret-down caret-rotate"
  )

  return (
    <div className="sidebar" >
      <div className={isSelected("channel_browser")}>
        <div className="sidebar-header-container" onClick={() => dispatch(requestChannels())}>
          <p className="channel-header" >
            <FontAwesomeIcon 
              style={{ fontSize: "13px" }} 
              icon="search" 
            />&nbsp;Channel browser
          </p>
        </div>
      </div>

        <div className="sidebar-divider"></div>

      <div className="">
        <div className="sidebar-header-container">
          <p className="channel-header" onClick={() => dispatch(toggleUiElement("show_channels"))}>
            <FontAwesomeIcon className={isShown(showChannels)} icon="caret-down"/>&nbsp;&nbsp;Channels
          </p>
          <div className="plus-button" onClick={() => dispatch(openModal("channel-dropdown"))}><FontAwesomeIcon icon="plus" /></div>
        </div>
        {showChannels ? getMembershipList() : "" }
      </div>
      <div className="">
        <div className="sidebar-header-container">
          <p className="channel-header" onClick={() => dispatch(toggleUiElement("show_direct_messages"))}>
            <FontAwesomeIcon className={isShown(showDirectMessages)} icon="caret-down"/>&nbsp;&nbsp;Direct Messages
          </p>
          <div className="plus-button" onClick={() => dispatch(openModal("create-direct-message"))}><FontAwesomeIcon icon="plus" /></div>
        </div>
        {showDirectMessages ? getDirectMessageList() : "" }
      </div>
    </div>
  );
}

export default Sidebar;