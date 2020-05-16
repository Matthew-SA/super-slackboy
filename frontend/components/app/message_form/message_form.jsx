import React from "react";
import Cookie from "js-cookie";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    if (e && e.keyCode == 13) {
      e.preventDefault();
      App.room.speak({ message: this.state.body });
      // App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
      this.setState({ body: "" });
      e.target.value = "";
    }
  }

  render() {
    if (false) {
      return(
        <div className="test"></div>
      )
    } else {
    return (
      <div className="primary-message-form" >
        <form onKeyDown={this.handleSubmit}>
          <textarea
            wrap="hard"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder='Message'
          />
        </form>
      </div>
    );
  }
}
}

export default MessageForm;

