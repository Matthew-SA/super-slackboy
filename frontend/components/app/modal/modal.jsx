import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';

import ProfileDropdown from '../profile/profile_dropdown'
import ChannelDropdown from '../sidebar/channel_dropdown'
import ChannelForm from '../sidebar/channel_form'
import DirectMessageForm from '../sidebar/direct_message_form/direct_message_form_container'

function Modal() {
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()

  if (!modal) return null;

  switch (modal) {
    case 'profile-dropdown':
      return (
        <div className="dropdown-background" onClick={() => dispatch(closeModal())}>
          <div className="dropdown-child" onClick={e => e.stopPropagation()}>
            <ProfileDropdown />
          </div>
        </div>
      );
    case 'channel-dropdown':
      return (
        <div className="dropdown-background" onClick={() => dispatch(closeModal())}>
          <div className="dropdown-child" onClick={e => e.stopPropagation()}>
            <ChannelDropdown />
          </div>
        </div>
      );
    case 'create-channel':
      return (
        <div className="modal-background" onClick={() => dispatch(closeModal())}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <ChannelForm />
          </div>
        </div>
      );
    case 'create-direct-message':
      return (
        <div className="modal-background" onClick={() => dispatch(closeModal())}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <DirectMessageForm />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default Modal;