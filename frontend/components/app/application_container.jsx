import { connect } from 'react-redux';
import { requestMessages, incomingMessage } from '../../actions/message_actions'
import Application from './application';

const mSTP = state => ({

})

const mDTP = dispatch => ({
  requestMessages: () => dispatch(requestMessages()),
  incomingMessage: (message) => dispatch(incomingMessage(message))
});

export default connect(mSTP, mDTP)(Application);
