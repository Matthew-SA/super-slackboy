import { connect } from 'react-redux';
import { logout } from '../../../../actions/session_actions'
import DropDown from './drop_down.jsx';
import { closeModal } from '../../../../actions/modal_actions'

const mapStateToProps = ({ session, entities: { user } }) => {
  return {
    currentUser: user[session.id]
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => closeModal(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDown);
