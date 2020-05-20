import React from 'react'
import Chat from './chat/chat'
import ChannelBrowser from './channel_browser/channel_browser'
import { useSelector } from 'react-redux'


function main() {
  const focus = useSelector(state => state.session.focus)

  switch (focus) {
    case 'channel_browser':
      return(
        <div className='main-container'>
          <ChannelBrowser />
        </div>
      )
    
    default:
      return (
        <div className='main-container'>
          <Chat />
        </div>
      )
  }
}

export default main