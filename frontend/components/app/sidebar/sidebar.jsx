import React from 'react';
import SidebarTools from './sidebar_lists/sidebar_tools';
import SidebarChannels from './sidebar_lists/sidebar_channels';
import SidebarDMs from './sidebar_lists/sidebar_dms';
import Profile from './profile/profile';

function Sidebar() {

  return (
    <div className="sidebar" >
      <Profile/>

      <SidebarTools/>

      <div className="sidebar-divider"/>

      <SidebarChannels/>

      <SidebarDMs/>
    </div>
  );
}

export default Sidebar;