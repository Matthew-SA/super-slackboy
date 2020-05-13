import React from 'react'

class ChannelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = Object.assign({}, this.state);
    console.log(channel)
    // this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <div className="create-channel-container">
        <h1 className="modal-header">Create a channel</h1>
        <div className="modal-body">
          <div style={{ marginBottom: "20px", color: "#616061" }}>Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example.</div>
          
          <form onSubmit={this.handleSubmit} className="create-channel-form">
            <div style={{ marginBottom: "7px" }}>Name</div>
            <input 
              className="channel-form-input"
              style={{ marginBottom: "20px" }}
              type="text"
              value={this.state.name}
              onChange={this.update('name')}
              placeholder="# e.g. plan-budget"
            />
            <div style={{ marginBottom: "7px" }}>Description <span style={{ fontWeight: "100", color: "#616061" }}>(optional)</span></div>
            <input 
              className="channel-form-input"
              style={{ marginBottom: "0px" }}
              type="password"
              value={this.state.description}
              onChange={this.update('description')}
            />
            <div style={{ fontWeight: "100", color: "#616061" }}>what's this channel about?</div>
            
            <button className="modal-submit" type="submit" value="create">
              <span>Create</span>
            </button>
            {/* <div className="errors">{this.renderErrors()}</div> */}
          </form>
        </div>
      </div>
    )
  }
}

export default ChannelForm