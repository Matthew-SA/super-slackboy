import { connect } from 'react-redux';
import Siderbar from './sidebar';
import { toggleUiElement,  } from '../../../actions/ui_actions'
import { changeCurrentChannel } from '../../../actions/session_actions'


const mapStateToProps = ({ ui, entities, session }) => {
  return {
    currentChannel: entities.user[session.id].current_channel,
    showChannels: ui.show_channels,
    showDirectMessages: ui.show_direct_messages,
    membershipList: Object.values(entities.memberships),
  };
};

const mapDispatchToProps = dispatch => ({
  toggleUi: (uiElement) => dispatch(toggleUiElement(uiElement)),
  changeCurrentChannel: (newChannelId) => dispatch(changeCurrentChannel(newChannelId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siderbar);
