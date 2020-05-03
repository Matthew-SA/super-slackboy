import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions'
import ViewHeader from './viewheader';

const mapStateToProps = ({ session, entities: {user, channels}}) => {
  return {
    currentUser: user[session.id],
    currentChannel: channels[user[session.id].current_channel],
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewHeader);
