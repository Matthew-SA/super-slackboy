import React from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from "../../../actions/modal_actions";


function ChannelDropDown() {
  const dispatch = useDispatch()
  
  return (
    <div className="channel-dropdown">
      <div className="dropdown-menu-item">Browse channels</div>
      <div
        className="dropdown-menu-item"
        onClick={() => dispatch(openModal("create-channel"))}
      >
        Create a channel
      </div>
    </div>
  );
}
  
export default ChannelDropDown