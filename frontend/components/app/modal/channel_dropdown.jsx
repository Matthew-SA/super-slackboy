import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from "../../../actions/modal_actions";
import { Link } from 'react-router-dom';


function ChannelDropDown() {
  const dispatch = useDispatch()
  
  return (
    <div className="channel-dropdown">
      <Link to={`/app/channel-browser`} className="dropdown-menu-item">
        Browse channels
      </Link>
      <div className="dropdown-menu-item" onClick={() => dispatch(openModal("create-channel"))}
      >
        Create a channel
      </div>
    </div>
  );
}
  
export default ChannelDropDown