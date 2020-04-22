import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    $('.channel-header').on('click', (e) => {
      e.stopPropagation();
      $(e.currentTarget).find(".caret-down").toggleClass('caret-rotate');
      $(e.currentTarget).parent().parent().find('.sidebar-ul').toggleClass('hide')
    });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-menu-item">
          <div className="sidebar-header-container">
            <p className="channel-header"><FontAwesomeIcon className="caret-down" icon="caret-down" />&nbsp;&nbsp;Channels</p>
            <div className="plus-button"><FontAwesomeIcon icon="plus" /> </div>
          </div>
          <ul className="sidebar-ul">
            <li># Demo item 1</li>
            <li># Demo item 2</li>
            <li># Demo item 3</li>
          </ul>
        </div>
        <div className="sidebar-menu-item">
          <div className="sidebar-header-container">
            <p className="channel-header"><FontAwesomeIcon className="caret-down" icon="caret-down" />&nbsp;&nbsp;Direct Messages</p>
            <div className="plus-button"><FontAwesomeIcon icon="plus" /> </div>
          </div>
          <ul className="sidebar-ul">
            <li># Demo item 1</li>
            <li># Demo item 2</li>
            <li># Demo item 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
