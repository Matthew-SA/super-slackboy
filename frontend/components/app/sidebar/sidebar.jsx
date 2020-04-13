import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header-container">
          <FontAwesomeIcon icon="caret-down" /> <p className="channel-header">Channels</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
