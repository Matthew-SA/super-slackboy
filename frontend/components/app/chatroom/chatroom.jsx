import React from "react";
import "moment-timezone"
import LargeChatItem from "./large_chat_item"
import SmallChatItem from "./small_chat_item"

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }
  
  componentDidMount() {
    this.props.requestMessages()
    App.cable.disconnect()
    App.room = App.cable.subscriptions.create(
      { channel: "ChatChannel", room: `${this.props.currentChannelId}` },
      {
        received: data => {
          switch (data.type) {
            case "message":
              const message = {
                author: data.author,
                body: data.body,
                id: data.id,
                time: data.time,
                channel_id: data.channel_id,
              };
              console.log(message)
              this.props.incomingMessage(message)
              let element = document.getElementById(`chan-${message.channel_id}`)
              if (element) element.classList.add("sidebar-highlight")
              break;
          }
        },
        speak: function (data) { return this.perform("speak", data) },
      }
    );
  }

  componentDidUpdate() {
    if (this.props.messages.length) this.bottom.current.scrollIntoView();
  }

  buildMessageList() {
    if (this.props.memberships <= 0) return;
    let lastAuthorId = null;

    const messageList = this.props.messages.map((message, idx) => {
      if (message.channel_id === this.props.currentChannelId) {
        if (lastAuthorId === message.author.id) {
          lastAuthorId = message.author.id
          return (
            <SmallChatItem message={message} key={idx} />
          );
        } else {
          lastAuthorId = message.author.id
          return (
            <LargeChatItem message={message} key={idx} />
          );
        }
      }
    });
    return messageList
  }

  render() {
    return (
      <div className="chatroom-container">
        <div className="message-list">
          {this.buildMessageList()}
          <div ref={this.bottom} />
        </div>
      </div>
    );
  }
}


export default ChatRoom;