import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    $('.profile').click(() => {
      $('.profile-dropdown').removeClass('hide')
    })

    // $('.app').click(function (event) {
    //   if (!$(event.target).closest(`#project-dropdown-${that.props.project.id}`).length && !$(event.target).is(`#project-dropdown-${that.props.project.id}`)) {
    //     $(`.project-dropdown`).removeClass('reveal-dropdown')
    //   }
    // });
  }

  render() {
    return (
      <div className="profile">
        <div className="profile-block">
          <h2>Current Channel</h2>
          <p>{this.props.currentUser.username}<button className="logout-button" onClick={this.props.logout}>Log Out</button></p>
        </div>
        <div className="profile-dropdown hide">
          OH NO
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
