import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function SidebarTools() {

  return(
    <nav className="sidebar-list-container ">
      <NavLink to={`/app/channel-browser`} className="sidebar-item" activeClassName="sidebar-selected">
        <FontAwesomeIcon style={{ fontSize: "13px" }} icon="search" />&nbsp;Channel browser
      </NavLink>
    </nav>
  )
}

export default SidebarTools;