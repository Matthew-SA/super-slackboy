import React from 'react';
import { NavLink } from 'react-router-dom'


function SidebarItem({ membership, channel }) {

  return (
    <NavLink to={`/app/channels/${channel.id}`} className="sidebar-item" activeClassName="sidebar-selected">
      # {channel.name}
    </NavLink>
  )
}

export default SidebarItem;