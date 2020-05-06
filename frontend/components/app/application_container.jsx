import { connect } from 'react-redux';
import { incomingMessage, requestMessages} from '../../actions/message_actions'
import { requestMemberships } from '../../actions/membership_actions'
import { requestUi } from '../../actions/ui_actions'
import Application from './application';

const mSTP = state => ({
  membershipList: Object.values(state.entities.memberships),
})

const mDTP = dispatch => ({
  requestUi: () => dispatch(requestUi()),
  requestMemberships: () => dispatch(requestMemberships()),
  requestMessages: () => dispatch(requestMessages()),
  incomingMessage: (message) => dispatch(incomingMessage(message)),
});

export default connect(mSTP, mDTP)(Application);
