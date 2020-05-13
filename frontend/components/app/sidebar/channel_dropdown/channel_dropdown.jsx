import React from 'react';

class ChannelDropDown extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="channel-dropdown">
        <div className="dropdown-menu-item">Browse channels</div>
        <div className="dropdown-menu-item" onClick={() => this.props.openModal("create-channel")}>Create a channel</div>
      </div>
    )
  }
}

export default ChannelDropDown