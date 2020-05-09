import { connect } from 'react-redux';
import ChatRoom from './chatroom.jsx';
import { requestMessages } from '../../../actions/message_actions'


const mSTP = state => ({
  messages: (state.entities.messages),
  memberships: Object.values(state.entities.memberships),
})

const mDTP = dispatch => ({
  requestMessages: () => dispatch(requestMessages()),
});

export default connect(mSTP, mDTP)(ChatRoom);
