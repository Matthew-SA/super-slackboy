import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Util from '../../../util/util';
import SidebarTools from './sidebar_tools';
import SidebarChannels from './sidebar_channels';
import SidebarDMChannels from './sidebar_dm_channels';

function Sidebar() {
  // const dispatch = useDispatch()

  const focus = useSelector(state => state.session.focus)
  // const channels = useSelector(state => state.entities.channels)
  // const memberships = useSelector(state => Object.values(state.entities.memberships))



  return (
    <div className="sidebar" >
      <SidebarTools/>

      <div className="sidebar-divider"></div>

      <SidebarChannels/>

      <SidebarDMChannels/>
    </div>
  );
}

export default Sidebar;