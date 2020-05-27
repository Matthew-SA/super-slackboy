import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChannelBrowserItem from './channel_browser_item';
import { requestChannels } from '../../../../actions/channel_actions'

function ChannelBrowser() {
  const dispatch = useDispatch()
  const channels = useSelector(state => Object.values(state.entities.channels))

  useEffect(() => {
    dispatch(requestChannels())
  },[])

  const channelList = channels.map((channel, idx) => {
    if (idx === channels.length) return
    return <ChannelBrowserItem channel={channel} key={idx} />
  })

  return (
    <div className="channel-browser-container">
      <div className="main-header-container">
        <div className="main-header-left">
          <div className="main-header-title">Channel Browser</div>
        </div>
      </div>

      <div className='channel-list-container' >
        {channelList}
      </div>
    </div>
  );
}

export default ChannelBrowser;
