import { connect } from 'react-redux';
import { requestMessages, incomingMessage } from '../../../actions/message_actions'
import ChatRoom from './chatroom.jsx';

const mSTP = state => ({
  channel: state.entities.user[state.session.id].current_channel,
  messages: Object.values(state.entities.messages),
})

const mDTP = dispatch => ({
  requestMessages: () => dispatch(requestMessages()),
  incomingMessage: (message) => dispatch(incomingMessage(message))
});

export default connect(mSTP, mDTP)(ChatRoom);
