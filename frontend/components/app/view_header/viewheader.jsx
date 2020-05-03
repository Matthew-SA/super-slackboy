import React from 'react';

class ViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const currentChannelName = this.props.currentChannel ? this.props.currentChannel.name : ""
    return (
      <div className="viewHeader-container">
        <div className="left-header">
          <h2># {currentChannelName}</h2>
        </div>
        <div className="right-header">

        </div>
      </div>
    );
  }
}

export default ViewHeader;