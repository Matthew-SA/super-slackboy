import React from 'react'
import ChannelBrowser from './channel_browser/channel_browser'
import Chat from './chat/chat'
import { Switch, Route } from 'react-router-dom'


function main() {

  return(
    <div className="main-container">
      <Switch>
        <Route exact path='/app/channel-browser' component={ChannelBrowser}/>
        <Route exact path='/app/channels/:id' component={Chat}/>
      </Switch>
    </div>
  )
}

export default main