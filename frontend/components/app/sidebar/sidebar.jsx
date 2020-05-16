import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Moment from 'react-moment'

class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.requestMemberships()
    // console.log(this.props)
  }

  // subscribe() {
  //   App.cable.disconnect()
  //   console.log(this.props.currentChannel)
  //   this.props.membershipKeys.forEach(key => {
  //     App.room = App.cable.subscriptions.create(
  //     { channel: "ChatChannel", room: `${key}` },
  //     {
  //       received: data => {
  //         switch (data.type) {
  //           case "message":
  //             const message = {
  //               author: data.author,
  //               body: data.body,
  //               id: data.id,
  //               time: data.time,
  //               channel_id: data.channel_id,
  //             };
  //             this.props.incomingMessage(message)
  //             let element = document.getElementById(`chan-${message.channel_id}`)
  //             if (element) element.classList.add("sidebar-highlight")
  //             break;
  //         }
  //       },
  //       speak: function (data) { return this.perform("speak", data) },
  //     }
  //     );
  //   })
    
  // }


  getMembershipList() {
    let memberships = this.props.membershipList
    const membershipList = memberships.map((membership, idx) => {
      let selected = this.props.currentChannel.channel_id === membership.channel_id ? "sidebar-selected" : "sidebar-item"
      let unreadMessages = membership.unread_messages ? " sidebar-highlight" : ""
      return (
        <li 
          className={`${selected}${unreadMessages}`} 
          id={`chan-${membership.channel_id}`}
          onClick={() => {
            this.props.updateMembership(membership.id)
          }} 
          key={idx}>
            # {membership.name}
        </li>
      )
    })

    return(
      <ul className="sidebar-ul">
        {membershipList}
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
    // this.subscribe();
    return (
      <div className="sidebar" >
        <div className="sidebar-menu-item">
          <div className="sidebar-header-container">
            <p className="channel-header" onClick={() => this.props.toggleUi("show_channels")}>
              <FontAwesomeIcon className="caret-down" icon="caret-down"/>&nbsp;&nbsp;Channels
            </p>
            <div className="plus-button" onClick={() => this.props.openModal("channel-dropdown")}><FontAwesomeIcon icon="plus" /></div>
          </div>
          {this.props.showChannels ? this.getMembershipList() : "" }
        </div>
        <div className="sidebar-menu-item">
          <div className="sidebar-header-container">
            <p className="channel-header" onClick={() => this.props.toggleUi("show_direct_messages")}>
              <FontAwesomeIcon className="caret-down" icon="caret-down"/>&nbsp;&nbsp;Direct Messages
            </p>
            <div className="plus-button" onClick={() => this.props.openModal("create-direct-message")}><FontAwesomeIcon icon="plus" /></div>
          </div>
          {this.props.showDirectMessages ? this.getDirectMessageList() : "" }
        </div>
      </div>
    );
  }
}

export default Sidebar;
