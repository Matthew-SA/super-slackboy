import { connect } from 'react-redux';
import Siderbar from './sidebar';
import { toggleUiElement } from '../../../actions/ui_actions'
import { requestMemberships, updateMembership } from '../../../actions/membership_actions'
import { openModal } from '../../../actions/modal_actions'



const mapStateToProps = ({ ui, entities, session }) => {
  return {
    currentChannel: entities.memberships[session.currentChannel],
    showChannels: ui.show_channels,
    showDirectMessages: ui.show_direct_messages,
    membershipList: Object.values(entities.memberships),
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  requestMemberships: () => dispatch(requestMemberships()),
  updateMembership: (membershipId) => dispatch(updateMembership(membershipId)),
  toggleUi: (uiElement) => dispatch(toggleUiElement(uiElement)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siderbar);
