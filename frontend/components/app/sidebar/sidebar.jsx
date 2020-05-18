import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Util from '../../../util/util';
import { toggleUiElement } from '../../../actions/ui_actions';
import { requestMemberships, updateMembership } from '../../../actions/membership_actions';
import { openModal } from '../../../actions/modal_actions';

function Sidebar() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(requestMemberships())
  }, []);

  const currentChannel = useSelector(
    state => state.entities.memberships[state.session.currentChannel]
  )
  const channelMemberships = useSelector(
    state => (state.entities.memberships
  ), shallowEqual)
  const showChannels = useSelector(state => state.ui.show_channels )
  const showDirectMessages = useSelector(state => state.ui.show_direct_messages )

  const getDirectMessageList = () => {
    return(
      <ul className="sidebar-ul">
        <li className="sidebar-item"># Demo item 1</li>
        <li className="sidebar-item"># Demo item 2</li>
        <li className="sidebar-item"># Demo item 3</li>
      </ul>
    )
  }

  const getMembershipList = () => {
    let membershipsArray = Object.values(channelMemberships);
    let memberships = membershipsArray.sort(Util.compareValues('name', 'asc'))
    const membershipList = memberships.map((membership, idx) => {
      let selected = currentChannel.channel_id === membership.channel_id ? "sidebar-selected" : "sidebar-item"
      let unreadMessages = membership.unread_messages ? " sidebar-highlight" : ""
      return (
        <li 
          className={`${selected}${unreadMessages}`} 
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

  return (
    <div className="sidebar" >
      <div className="sidebar-menu-item">
        <div className="sidebar-header-container">
          <p className="channel-header" onClick={() => dispatch(toggleUiElement("show_channels"))}>
            <FontAwesomeIcon className="caret-down" icon="caret-down"/>&nbsp;&nbsp;Channels
          </p>
          <div className="plus-button" onClick={() => dispatch(openModal("channel-dropdown"))}><FontAwesomeIcon icon="plus" /></div>
        </div>
        {showChannels ? getMembershipList() : "" }
      </div>
      <div className="sidebar-menu-item">
        <div className="sidebar-header-container">
          <p className="channel-header" onClick={() => dispatch(toggleUiElement("show_direct_messages"))}>
            <FontAwesomeIcon className="caret-down" icon="caret-down"/>&nbsp;&nbsp;Direct Messages
          </p>
          <div className="plus-button" onClick={() => dispatch(openModal("create-direct-message"))}><FontAwesomeIcon icon="plus" /></div>
        </div>
        {showDirectMessages ? getDirectMessageList() : "" }
      </div>
    </div>
  );
}

export default Sidebar;