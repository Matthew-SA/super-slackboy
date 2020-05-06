import React from 'react';

class ViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    let id = this.props.currentMembership;
    const currentChannelName = this.props.currentMembership ? this.props.channels[id].name : ""

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