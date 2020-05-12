import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // $('.profile').click(e => {
    //   e.stopPropagation()
    //   $('.profile-dropdown').toggleClass('hide')
    // })

    // $('.app').click(function (e) {
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
      <div className="profile" onClick={() => this.props.openModal('drop-down')}>
        <h2>Super SlackBoy<FontAwesomeIcon className="chevron-down" icon="chevron-down" /></h2>
        <p><FontAwesomeIcon className="status-dot" icon="circle" /> {this.props.currentUser.username}</p>
      </div>
    );
  }
}

export default Profile;