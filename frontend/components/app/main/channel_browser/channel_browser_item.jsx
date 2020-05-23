import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createMembership } from '../../../../actions/membership_actions'
import { updateCurrentUser } from '../../../../actions/session_actions'

const ChannelBrowserItem = ({ channel }) => {
  const dispatch = useDispatch()
  const memberships = useSelector(state => Object.values(state.entities.memberships))

  const handleClick = (channelId) => {
    dispatch(updateCurrentUser(channelId))
    for (let membership of memberships) {
      if (membership.channel_id === channelId) return
    }
    dispatch(createMembership(channelId))
  }

  return(
    <li className="channel-browser-item" key={channel.id} onClick={() => handleClick(channel.id)}>
      <div className="channel-browser-item-body">
        <div style={{ fontWeight: "700" }}># {channel.name}</div>
        <div style={{ fontWeight: "400", fontSize: "13px", color: "#616061" }}>{channel.description} </div>
      </div>
    </li>
  )

}

export default ChannelBrowserItem;