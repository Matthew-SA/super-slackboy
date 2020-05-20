import React from 'react'

const ChannelBrowserItem = ({ channel }) => (
  <li className="channel-browser-item" key={channel.id}>
    <div className="channel-browser-item-body">
      <div style={{ fontWeight: "700" }}># {channel.name}</div>
      <div style={{ fontWeight: "400", fontSize: "13px", color: "#616061"  }}>{channel.description} </div>
    </div>
  </li>
)

export default ChannelBrowserItem;