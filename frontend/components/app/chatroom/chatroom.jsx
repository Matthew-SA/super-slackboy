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
  }

  componentDidUpdate() {
    if (this.props.messages.length) this.bottom.current.scrollIntoView();
  }

  buildMessageList() {
    if (this.props.memberships <= 0) return;
    let messages = this.props.messages
    let lastAuthorId = null;

    const messageList = messages.map((message, idx) => {
      if (message.channel_id === this.props.currentMembership.channel_id) {
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