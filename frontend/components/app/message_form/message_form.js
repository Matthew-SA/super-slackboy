import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }
  
  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    if (e && e.keyCode == 13) {
      e.preventDefault();
      App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
      this.setState({ body: "" });
      e.target.value = "";
    }
  }

  render() {
    return (
      <div className="primary-message-form" >
        <form onKeyDown={this.handleSubmit.bind(this)}>
          <textarea
            wrap="hard"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Message"
          />


          {/* {this.props.currentUser.username} */}
        </form>
      </div>
    );
  }
}

export default MessageForm;

