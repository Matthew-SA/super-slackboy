import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function DirectMessageForm() {
  const dispatch = useDispatch();

  return(
      <div className="create-channel-container">
        <div className="modal-header">
          <div className="modal-title">Direct Messages</div>
          <div className="rightbar-x" onClick={() => dispatch(closeModal())}>
            <FontAwesomeIcon
              style={{ fontSize: "18px" }}
              icon="times"
            />
          </div>
        </div>
        <div className="modal-body">
          Feature under construction.
        </div>
      </div>
    )
}

export default DirectMessageForm;