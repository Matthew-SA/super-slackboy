import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // $('.profile').click(e => {
    //   e.stopPropagation()
    //   $('.profile-dropdown').removeClass('hide')
    // })

    // $('.app').click(function (e) {
    //   e.stopPropagation()
    //   if (!$(e.target).closest('.profile-dropdown').length && !$(e.target).is('.profile-dropdown')) {
    //     $('.profile-dropdown').addClass('hide')
    //   }
    // });

    // $('.profile-sign-out').click((e) => {
    //   e.stopPropagation();
    //   this.props.logout();
    // })
  }

  render() {
    return (
      <div className="profile">
        <h2>Super SlackBoy<FontAwesomeIcon className="chevron-down" icon="chevron-down" /></h2>
        <p><FontAwesomeIcon className="status-dot" icon="circle" /> {this.props.currentUser.username}</p>
        <div className="profile-dropdown hide">
          <div className="profile-menu-header">
            <img src={window.profile_pic} className="profile-pic" />
            <h6>{this.props.currentUser.username}</h6>
          </div>
          <div className="profile-menu-items">
            <div className="profile-sign-out">
              Sign Out of <span className="bold">Super SlackBoy</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;