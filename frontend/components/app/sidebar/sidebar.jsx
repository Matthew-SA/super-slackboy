import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Util from '../../../util/util';
import { updateUi } from '../../../actions/ui_actions';
// import { updateMembership } from '../../../actions/membership_actions';
import { updateCurrentUser } from '../../../actions/session_actions'
import { openModal } from '../../../actions/modal_actions';
import { requestChannel, requestChannels } from '../../../actions/channel_actions';

function Sidebar() {
  const dispatch = useDispatch()

  const focus = useSelector(state => state.session.focus)
  const channels = useSelector(state => state.entities.channels)
  const memberships = useSelector(state => (state.entities.memberships))
  const showChannels = useSelector(state => state.ui.persistentUi.show_channels)
  const showDirectMessages = useSelector(state => state.ui.persistentUi.show_direct_messages)

  const isSelected = (option) => (
    focus == option ? "sidebar-selected" : "sidebar-item"
  )

  const userChannels = [];
  const userDirectMessages = [];

  const divideChannelsAndDirectMessages = () => {
    if (Object.keys(channels).length === 0) return
    if (Object.keys(memberships).length === 0) return

    Object.values(memberships).forEach((membership) => {
      let chanId = membership.channel_id
      if (channels[chanId].direct_message) {
        userDirectMessages.push(channels[chanId])
      } else {
        userChannels.push(channels[chanId])
      }
    })
  }

  divideChannelsAndDirectMessages();
  const sortedUserChannels = userChannels.sort(Util.compareValues('name', 'asc'))
  const sortedDirectMessages = userDirectMessages.sort(Util.compareValues('name', 'asc'))


  const buildList = (array) => {

    const applySidebarClasses = (channel) => {
      let response = isSelected(channel.id)
      // if (channel.unread_messages) response += " sidebar-highlight"
      return response
    }

    const list = array.map((channel, idx) => {
      return (
        <li 
          className={applySidebarClasses(channel)} 
          id={`chan-${channel.id}`}
          onClick={() => {
            dispatch(requestChannel(channel.id))
          }} 
          key={idx}>
            # {channel.name}
        </li>
      )
    })

    return(
      <ul className="sidebar-ul">
        {list}
      </ul>
    )
  }

  // const getMembershipList = () => {
  //   let membershipsArray = Object.values(channelMemberships);
  //   let memberships = membershipsArray.sort(Util.compareValues('name', 'asc'))

  //   const applySidebarClasses = (membership) => {
  //     let response = isSelected(membership.channel_id)
  //     if (membership.unread_messages) response += " sidebar-highlight"
  //     return response
  //   }

  //   const membershipList = memberships.map((membership, idx) => {
  //     return (
  //       <li 
  //         className={applySidebarClasses(membership)} 
  //         id={`chan-${membership.channel_id}`}
  //         onClick={() => {
  //           dispatch(updateMembership(membership.id))
  //         }} 
  //         key={idx}>
  //           # {membership.name}
  //       </li>
  //     )
  //   })
  
  //   return(
  //     <ul className="sidebar-ul">
  //       {membershipList}
  //     </ul>
  //   )
  // }

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
          <p className="channel-header" onClick={() => dispatch(updateUi("show_channels"))}>
            <FontAwesomeIcon className={isShown(showChannels)} icon="caret-down"/>&nbsp;&nbsp;Channels
          </p>
          <div className="plus-button" onClick={() => dispatch(openModal("channel-dropdown"))}><FontAwesomeIcon icon="plus" /></div>
        </div>
        {showChannels ? buildList(sortedUserChannels) : "" }
      </div>
      <div className="">
        <div className="sidebar-header-container">
          <p className="channel-header" onClick={() => dispatch(updateUi("show_direct_messages"))}>
            <FontAwesomeIcon className={isShown(showDirectMessages)} icon="caret-down"/>&nbsp;&nbsp;Direct Messages
          </p>
          <div className="plus-button" onClick={() => dispatch(openModal("create-direct-message"))}><FontAwesomeIcon icon="plus" /></div>
        </div>
        {showDirectMessages ? buildList(sortedDirectMessages) : "" }
      </div>
    </div>
  );
}

export default Sidebar;