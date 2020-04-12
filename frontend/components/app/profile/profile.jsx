import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let that = this
    $('.profile-block').click(e => {
      e.stopPropagation()
      $('.profile-dropdown').removeClass('hide')
    })

    $('.app').click(function (event) {
      if (!$(event.target).closest('.profile-dropdown').length && !$(event.target).is('.profile-dropdown')) {
        $('.profile-dropdown').addClass('hide')
      }
    });

    $('.profile-sign-out').click((e) => {
      e.stopPropagation();
      that.props.logout();
    })
  }

  render() {
    return (
      <div className="profile-block">
        <div className="profile-block-content">
          <h2>Super SlackBoy<FontAwesomeIcon className="chevron-down" icon="chevron-down" /></h2>
          <p><FontAwesomeIcon className="status-dot" icon="circle" /> {this.props.currentUser.username}</p>
        </div>
        <div className="profile-dropdown hide">
          <div className="profile-menu-header">
            <img src={window.profile_pic} className="profile-pic" />
            <h6>{this.props.currentUser.username}</h6>
          </div>
          <div className="profile-menu-items">
            <div className="profile-sign-out">
              Sign Out of <span className="bold">Slack Clone</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;


// const Topnav = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Sign in</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">GET STARTED</Link>
//     </nav>
//   );
//   const personalGreeting = () => (
    // <hgroup className="header-group">
    //   <h2 className="header-name">Hi, {currentUser.username}!</h2>
    //   <button className="header-button" onClick={logout}>Log Out</button>
    // </hgroup>
//   );

//   return currentUser ? personalGreeting() : sessionLinks();
// };


// export default Topnav;
