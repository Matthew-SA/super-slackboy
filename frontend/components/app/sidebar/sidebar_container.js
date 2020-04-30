import { connect } from 'react-redux';
import Siderbar from './sidebar';
import { requestUi, toggleUiElement,  } from '../../../actions/ui_actions'

const mapStateToProps = ({ ui }) => {
  return {
    showChannels: ui.show_channels,
    showDirectMessages: ui.show_direct_messages,
  };
};

const mapDispatchToProps = dispatch => ({
  requestUi: () => dispatch(requestUi()),
  toggleUi: (uiElement) => dispatch(toggleUiElement(uiElement))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siderbar);
