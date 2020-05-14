import React from 'react';

class ViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    // let id = this.props.currentMembership.channel_id;
    // const currentMembershipName = this.props.currentMembership ? this.props.memberships[id].name : ""

    return (
      <div className="viewHeader-container">
        <div className="left-header">
          {/* <h2># {currentMembershipName}</h2> */}
        </div>
        <div className="right-header">

        </div>
      </div>
    );
  }
}

export default ViewHeader;