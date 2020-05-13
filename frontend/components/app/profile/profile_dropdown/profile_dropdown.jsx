import React from 'react';

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="profile-dropdown">
        <div className="profile-menu-header">
          <img src={window.profile_pic} className="profile-pic" />
          <h6>{this.props.currentUser.username}</h6>
        </div>
        <div className="dropdown-menu-item" onClick={() => this.props.logout()}>
            Sign out of <span className="bold">Super SlackBoy</span>
        </div>
      </div>
    )
  }
}

export default ProfileDropdown