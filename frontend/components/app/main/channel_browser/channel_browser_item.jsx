import React from 'react'
import { Link } from 'react-router-dom';

const ChannelBrowserItem = ({ channel }) => {

  const handleClick = () => {
    
  }

  return(
    <Link to={`/app/channels/${channel.id}`} className="channel-browser-item" onClick={() => handleClick()}>
      <div className="channel-browser-item-body">
        <div style={{ fontWeight: "700" }}># {channel.name}</div>
        <div style={{ fontWeight: "400", fontSize: "13px", color: "#616061" }}>{channel.description} </div>
      </div>
    </Link>
  )

}

export default ChannelBrowserItem;