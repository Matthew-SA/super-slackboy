import { connect } from 'react-redux';
import ChatRoom from './chatroom.jsx';
import { requestMessages, incomingMessage } from '../../../actions/message_actions'


const mSTP = ({entities, session}) => ({
  currentChannelId: session.currentChannel,
  messages: Object.values(entities.messages),
  memberships: Object.values(entities.memberships),
})

const mDTP = dispatch => ({
  requestMessages: () => dispatch(requestMessages()),
  incomingMessage: (message) => dispatch(incomingMessage(message))
});

export default connect(mSTP, mDTP)(ChatRoom);
