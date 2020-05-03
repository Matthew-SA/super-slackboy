import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions'
import ViewHeader from './viewheader';

const mapStateToProps = ({ session, entities: {users, channels}}) => {
  return {
    currentUser: users[session.id],
    currentChannel: channels[users[session.id].current_channel],
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewHeader);
