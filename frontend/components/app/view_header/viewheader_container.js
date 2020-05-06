import { connect } from 'react-redux';
import ViewHeader from './viewheader';

const mapStateToProps = ({ session, entities: {user, memberships}}) => {
  return {
    currentChannel: memberships[user[session.id].current_channel],
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewHeader);
