import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="topnav-container">
      </div>
    );
  }
}

export default TopNav;

//old code for reference
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
