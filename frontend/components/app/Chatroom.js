import React from "react";
import MessageForm from "./message_form/message_form_container";
import { logoutCurrentUser } from "../../actions/session_actions";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
  }
  
  componentDidMount() {
    App.room = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              this.setState({
                messages: this.state.messages.concat({author: data.author, message: data.message, id: data.id})
              });
              break;
              case "messages":
              this.setState({ messages: data.messages });
                break;
          }
        },
        connected: function () { App.cable.subscriptions.subscriptions[0].load()},
        speak: function (data) { return this.perform("speak", data) },
        load: function () { return this.perform("load") }
      }
    );
  }

  // loadChat(e) {
  //   e.preventDefault();
  //   App.cable.subscriptions.subscriptions[0].load();
  // }

  componentWillUnmount() {
    if (App.room) App.cable.subscriptions.remove(App.room)
  }

  componentDidUpdate() {
    if (this.state.length) this.bottom.current.scrollIntoView();
  }

  render() {
    const messageList = this.state.messages.map((message, idx) => {
      return (
        <li className="message-list-card" key={message.id}>
          {/* <div className="message-avatar"></div> */}
          <div className="message-body">
            <h6>{message.author}</h6>
            <div>{message.message}</div>
          </div>
          <div ref={this.bottom} />
        </li>
      );
    });
    return (
      <div className="chatroom-container">
        <div className="message-list">{messageList}</div>
        <MessageForm />
      </div>
    );
  }
}

export default ChatRoom;

// import React from "react";
// import MessageForm from "./MessageForm.js";

// class ChatRoom extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { messages: [] };
//     this.bottom = React.createRef();
//   }

//   componentDidMount() {
//     App.cable.subscriptions.create(
//       { channel: "ChatChannel" },
//       {
//         received: data => {
//           this.setState({
//             messages: this.state.messages.concat(data.message)
//           });
//         },
//         speak: function (data) {
//           return this.perform("speak", data);
//         }
//       }
//     );
//   }

//   componentDidUpdate() {
//     this.bottom.current.scrollIntoView();
//   }

//   render() {
//     const messageList = this.state.messages.map(message => {
//       return (
//         <li key={message.id}>
//           {message}
//           <div ref={this.bottom} />
//         </li>
//       );
//     });
//     return (
//       <div className="chatroom-container">
//         <div>ChatRoom</div>
//         <div className="message-list">{messageList}</div>
//         <MessageForm />
//       </div>
//     );
//   }
// }

// export default ChatRoom;

