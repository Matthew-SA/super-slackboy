import { connect } from 'react-redux';
import Siderbar from './sidebar';
import { toggleUiElement } from '../../../actions/ui_actions'
import { changeCurrentChannel } from '../../../actions/session_actions'
import { updateMembership } from '../../../actions/membership_actions'


const mapStateToProps = ({ ui, entities, session }) => {
  return {
    showChannels: ui.show_channels,
    showDirectMessages: ui.show_direct_messages,
    membershipList: Object.values(entities.memberships),
  };
};

const mapDispatchToProps = dispatch => ({
  updateMembership: (membershipId) => dispatch(updateMembership(membershipId)),
  toggleUi: (uiElement) => dispatch(toggleUiElement(uiElement)),
  changeCurrentChannel: (newChannelId) => dispatch(changeCurrentChannel(newChannelId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siderbar);
