import { connect } from 'react-redux';
import Siderbar from './sidebar';
import { requestUi } from '../../../actions/ui_actions'

const mapStateToProps = ({ ui }) => {
  return {
    showChannels: ui.show_channels,
    showDirectMessages: ui.show_direct_messages,
  };
};

const mapDispatchToProps = dispatch => ({
  requestUi: (userId) => dispatch(requestUi(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Siderbar);
