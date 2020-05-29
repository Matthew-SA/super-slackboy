import React from 'react';
import { useSelector } from 'react-redux';
import SidebarTools from './sidebar_lists/sidebar_tools';
import SidebarChannels from './sidebar_lists/sidebar_channels';
import SidebarDMs from './sidebar_lists/sidebar_dms';
import Profile from './profile/profile';
import * as Util from '../../../util/util';

function Sidebar() {
  const memberships = useSelector(state => Object.keys(state.entities.memberships))
  const channels = useSelector(state => state.entities.channels)

  const userChannels = [];
  const userDMs = [];

  memberships.map((id) => {
    if (channels[id].direct_message) {
      userDMs.push(channels[id])
    } else {
      userChannels.push(channels[id])
    }
  })

  const alphaChannels = userChannels.sort(Util.compareValues("name"))
  const alphaDMs = userDMs.sort(Util.compareValues("name"))

  return (
    <div className="sidebar" >
      <Profile/>

      <SidebarTools/>

      <div className="sidebar-divider"/>

      <SidebarChannels alphaChannels={alphaChannels}/>

      <SidebarDMs alphaDMs={alphaDMs}/>
    </div>
  );
}

export default Sidebar;