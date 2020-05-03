import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions'
import Topnav from './topnav';

const mapStateToProps = ({ session, entities: { user } }) => {
  return {
    currentUser: user[session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topnav);
