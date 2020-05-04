import { connect } from 'react-redux';
import Siderbar from './sidebar';
import { requestUi, toggleUiElement,  } from '../../../actions/ui_actions'
import { requestChannels  } from '../../../actions/channel_actions'
import { changeCurrentChannel } from '../../../actions/session_actions'

const mapStateToProps = ({ ui, entities }) => {
  return {
    showChannels: ui.show_channels,
    showDirectMessages: ui.show_direct_messages,
    channelList: Object.values(entities.channels),
  };
};

const mapDispatchToProps = dispatch => ({
  requestUi: () => dispatch(requestUi()),
  toggleUi: (uiElement) => dispatch(toggleUiElement(uiElement)),
  requestChannels: () => dispatch(requestChannels()),
  changeCurrentChannel: (newChannelId) => dispatch(changeCurrentChannel(newChannelId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siderbar);
