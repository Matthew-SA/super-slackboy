import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.requestUi()
    this.props.requestChannels()
  }

  getChannelList() {
    let channels = this.props.channelList

    const channelList = channels.map((channel, idx) => {
      let sidebarClass = this.props.currentChannel === channel.id ? "sidebar-selected" : "sidebar-item"
      return (
        <li 
          className={sidebarClass} 
          onClick={() => this.props.changeCurrentChannel(channel.id)} 
          key={idx}># {channel.name}
        </li>
      )
    })

    return(
      <ul className="sidebar-ul">
        {channelList}
      </ul>
    )
  }

  getDirectMessageList() {
    return(
      <ul className="sidebar-ul">
        <li className="sidebar-item"># Demo item 1</li>
        <li className="sidebar-item"># Demo item 2</li>
        <li className="sidebar-item"># Demo item 3</li>
      </ul>
    )
  }

  render() {
    return (
      <div className="sidebar" >
        <div className="sidebar-menu-item">
          <div className="sidebar-header-container">
            <p className="channel-header" onClick={() => this.props.toggleUi("show_channels")}><FontAwesomeIcon className="caret-down" icon="caret-down" />&nbsp;&nbsp;Channels</p>
            <div className="plus-button"><FontAwesomeIcon icon="plus" /> </div>
          </div>
          {this.props.showChannels ? this.getChannelList() : "" }
        </div>
        <div className="sidebar-menu-item">
          <div className="sidebar-header-container">
            <p className="channel-header" onClick={() => this.props.toggleUi("show_direct_messages")}><FontAwesomeIcon className="caret-down" icon="caret-down" />&nbsp;&nbsp;Direct Messages</p>
            <div className="plus-button"><FontAwesomeIcon icon="plus" /> </div>
          </div>
          {this.props.showDirectMessages ? this.getDirectMessageList() : "" }
        </div>
      </div>
    );
  }
}

export default Sidebar;
