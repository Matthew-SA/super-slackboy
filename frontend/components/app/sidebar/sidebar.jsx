import React from 'react';
import SidebarTools from './sidebar_tools';
import SidebarChannels from './sidebar_channels';
import SidebarDMs from './sidebar_dms';

function Sidebar() {

  return (
    <div className="sidebar" >
      <SidebarTools/>

      <div className="sidebar-divider"/>

      <SidebarChannels/>

      <SidebarDMs/>
    </div>
  );
}

export default Sidebar;