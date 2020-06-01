import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import SidebarTools from './sidebar_lists/sidebar_tools';
import SidebarChannels from './sidebar_lists/sidebar_channels';
import SidebarDMs from './sidebar_lists/sidebar_dms';
import Profile from './profile/profile';
import * as Util from '../../../util/util';

function Sidebar() {
  const memberships = useSelector(state => state.entities.memberships)
  const channels = useSelector(state => state.entities.channels)

  // const userDMs = [];
  // console.log(`channel length: ${channels.length} from COMPONENT`)
  // console.log(`membership length${memberships.length} from COMPONENT`)

  const [alphaChannels, alphaDMs] = useMemo(() => {
    const userChannels = [];
    const userDMs = [];
    // console.log(`channel length: ${Object.keys(channels).length} from inside MEMO`)
    // console.log(`membership length: ${memberships.length} from inside MEMO`)
    Object.keys(memberships).map((id) => {
      if (channels[id].direct_message) {
        userDMs.push(channels[id])
      } else {
        userChannels.push(channels[id])
      }
    })
    const alphaChannels = userChannels.sort(Util.compareValues("name"))
    const alphaDMs = userDMs.sort(Util.compareValues("name"))
    return [alphaChannels, alphaDMs]
  }, [memberships, channels.length])
  

  return (
    <div className="sidebar" >
      <Profile/>

      <SidebarTools/>

      <div className="sidebar-divider"/>

      <SidebarChannels alphaChannels={alphaChannels}/>

      {/* <SidebarDMs alphaDMs={alphaDMs}/> */}
    </div>
  );
}

export default Sidebar;