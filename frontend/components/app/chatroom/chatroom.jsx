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
    this.refreshConnection()
  }

  refreshConnection() {
    // console.log(App)
    App.cable.disconnect()
    this.props.requestMessages()
    App.room = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
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
              this.props.incomingMessage(message)
              break;
          }
        },
        speak: function (data) { return this.perform("speak", data) },
      }
    );
  }

  componentDidUpdate(prevProps) {
    // if (this.props.channel != prevProps.channel) this.refreshConnection();
    if (this.props.messages.length) this.bottom.current.scrollIntoView();
  }

  render() {
    let messages = this.props.messages
    let lastAuthorId = null;
    const messageList = messages.map((message, idx) => {
      if (message.channel_id === this.props.channel) {
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

    return (
      <div className="chatroom-container">
        <div className="message-list">
          {messageList}
          <div ref={this.bottom} />
        </div>
      </div>
    );
  }
}


export default ChatRoom;