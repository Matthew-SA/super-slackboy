import React from 'react'
import { Link } from 'react-router-dom';

const ChannelBrowserItem = ({ channel }) => {
  const memberText = channel.userIds.length === 1 ? "Member" : "Members"
  const descriptionText = channel.description.length > 0 ? `· ${channel.description}` : ""

  return(
    <Link to={`/app/channels/${channel.id}`} className="channel-browser-item">
      <div className="channel-browser-item-body">
        <div style={{ fontWeight: "700" }}># {channel.name}</div>
        <div style={{ fontWeight: "200", fontSize: "13px", color: "#616061" }}>{channel.userIds.length} {memberText} {descriptionText} </div>
      </div>
    </Link>
  )

}

export default ChannelBrowserItem;