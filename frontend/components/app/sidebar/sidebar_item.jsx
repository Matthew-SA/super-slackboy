import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestChannel } from '../../../actions/channel_actions'

function SidebarItem({ membership }) {
  const dispatch = useDispatch();
  const focus = useSelector(state => state.session.focus)
  const channel = useSelector(state => state.entities.channels[membership.channel_id])

  const applySidebarClasses = () => {
    let baseClass = focus == channel.id ? "sidebar-selected" : "sidebar-item"
    if (channel.last_message_posted > membership.last_read) baseClass += " sidebar-highlight"
    return baseClass
  }

  return (
    <li
      className={applySidebarClasses()}
      id={`chan-${channel.id}`}
      onClick={() => {dispatch(requestChannel(channel.id))}}
      >
        # {channel.name}
    </li>
  )
}

export default SidebarItem;