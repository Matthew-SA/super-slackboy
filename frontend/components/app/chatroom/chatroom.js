import React from "react";
import Moment from "react-moment"
import "moment-timezone"

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
        // connected: function () { App.cable.subscriptions.subscriptions[0].load()},
        speak: function (data) { return this.perform("speak", data) },
        // load: function () { return this.perform("load") }
      }
    );
  }

  componentDidUpdate() {
    if (this.props.messages.length) this.bottom.current.scrollIntoView();
  }

  render() {
    const messageList = this.props.messages.map((message, idx) => {
      let previousAuthorId = this.props.messages[idx - 1] ? this.props.messages[idx - 1].author.id : null;
      let thisAuthorId = message.author.id;

      if (previousAuthorId === thisAuthorId) {
        return (
          <li className="post" key={message.id}>
            <div className="post-left-margin">
              <Moment className="gutter-timestamp" parse="YYYY-MM-DD HH:mm" date={message.time} format="h:mm"/>
            </div>
            <div className="post-content">
              <div>{message.body}</div>
            </div>
            <div ref={this.bottom} />
          </li>
        );
      } else {
        return (
          <li className="post" key={message.id}>
            <div className="post-left-margin">
              <img src={window.profile_pic} className="post-avatar" />
            </div>
            <div className="post-content">
              <div className="post-header">
                <div className="post-author">{message.author.username}</div>
                <Moment parse="YYYY-MM-DD HH:mm" className="timestamp" date={message.time} format="h:mm A" />
              </div>
              <div className="post-body">{message.body}</div>
            </div>
            <div ref={this.bottom} />
          </li>
        );
      }
    });

    return (
      <div className="chatroom-container">
        <div className="message-list">
          {messageList}
        </div>
      </div>
    );
  }
}


export default ChatRoom;