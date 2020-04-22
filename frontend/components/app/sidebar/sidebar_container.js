import { connect } from 'react-redux';
import Siderbar from './sidebar';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    hideChannels: users[session.id].hide_channels_ui,
    hideDirectMessages: users[session.id].hide_direct_messages_ui,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siderbar);
