import React from 'react'
import Chat from './chat/chat'
import ChannelBrowser from './channel_browser/channel_browser'
import { Switch } from 'react-router-dom'


function main() {

  return(
    <Switch>
      {/* <ChannelBrowser exact path='/app/channel-browser'/>
      <Chat exact path='/app/channels/:id'/> */}
    </Switch>
  )
}

export default main