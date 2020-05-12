import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import DropDown from '../profile/drop_down/drop_down_container'
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) return null;

  switch (modal) {
    case 'drop-down':
      return (
        <div className="drop-down-background" onClick={closeModal}>
          <div className="drop-down-child" onClick={e => e.stopPropagation()}>
            <DropDown />
          </div>
        </div>
      );
    case 'create-channel':
      return (
        <div className="drop-down-background" onClick={closeModal}>
          <div className="drop-down-child" onClick={e => e.stopPropagation()}>
            <DropDown />
          </div>
        </div>
      );
    case 'create-direct-message':
      return (
        <div className="drop-down-background" onClick={closeModal}>
          <div className="drop-down-child" onClick={e => e.stopPropagation()}>
            <DropDown />
          </div>
        </div>
      );
    default:
      return null;
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.entities.user[state.session.id],
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);