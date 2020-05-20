import React from 'react'
import { useDispatch } from 'react-redux'
import { createMembership } from '../../../../actions/membership_actions'

const ChannelBrowserItem = ({ channel }) => {
  const dispatch = useDispatch()

  return(
    <li className="channel-browser-item" key={channel.id} onClick={() => dispatch(createMembership(channel.id))}>
      <div className="channel-browser-item-body">
        <div style={{ fontWeight: "700" }}># {channel.name}</div>
        <div style={{ fontWeight: "400", fontSize: "13px", color: "#616061" }}>{channel.description} </div>
      </div>
    </li>
  )

}

export default ChannelBrowserItem;