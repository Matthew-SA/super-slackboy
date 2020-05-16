import { connect } from 'react-redux';
import { incomingMessage } from '../../actions/message_actions'
import { requestUi } from '../../actions/ui_actions'
import Application from './application';
import { requestChannels } from '../../actions/channel_actions'

const mSTP = state => ({
  membershipList: Object.values(state.entities.memberships),
})

const mDTP = dispatch => ({
  requestChannels: () => dispatch(requestChannels()),
  requestUi: () => dispatch(requestUi()),
  incomingMessage: (message) => dispatch(incomingMessage(message)),
});

export default connect(mSTP, mDTP)(Application);
