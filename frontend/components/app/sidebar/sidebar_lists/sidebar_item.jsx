import React from 'react';
import { NavLink } from 'react-router-dom'


function SidebarItem({ userChannel }) {

  return (
    <NavLink to={`/app/channels/${userChannel.id}`} className="sidebar-item" activeClassName="sidebar-selected">
      # {userChannel.name}
    </NavLink>
  )
}

export default SidebarItem;