import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions'
import MessageForm from './message_form';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    currentUserId: users[session.id].id,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
