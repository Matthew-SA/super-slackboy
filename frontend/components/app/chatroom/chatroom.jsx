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
    App.room = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              const message = { author: data.author, body: data.body, id: data.id, time: data.time };
              this.props.incomingMessage(message)
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

  render() {
    let messages = this.props.messages
    const messageList = messages.map((message, idx) => {
      let lastAuthorID = messages[idx - 1] ? messages[idx - 1].author.id : null;
      let authorID = message.author.id;

      if (lastAuthorID === authorID) {
        return (
          <SmallChatItem message={message} key={idx}/>
        );
      } else {
        return (
          <LargeChatItem message={message} key={idx}/>
        );
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