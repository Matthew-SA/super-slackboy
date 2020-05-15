import React from 'react';

class ViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  getChannelName() {
    let name = this.props.currentChannel ? this.props.currentChannel.name : ""
    return name
  }

  render() {    
    return (
      <div className="viewHeader-container">
        <div className="left-header">
          <h2># {this.getChannelName()}</h2>
        </div>
        {/* <div className="right-header">
        </div> */}
      </div>
    );
  }
}

export default ViewHeader;