import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    // $('.channel-header').click(() => {
    //   $('.caret-down').toggleClass('caret-rotate');
    // });

    $('.channel-header').on('click', (e) => {
      e.stopPropagation();
      $(e.target).find(".caret-down").toggleClass('caret-rotate');
    });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header-container">
          <p className="channel-header"><FontAwesomeIcon className="caret-down" icon="caret-down" />&nbsp;&nbsp;Channels</p>
          <div className="plus-button"><FontAwesomeIcon icon="plus" /> </div>
        </div>
        <div className="sidebar-header-container">
          <p className="channel-header"><FontAwesomeIcon className="caret-down" icon="caret-down" />&nbsp;&nbsp;Direct Messages</p>
          <div className="plus-button"><FontAwesomeIcon icon="plus" /> </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
