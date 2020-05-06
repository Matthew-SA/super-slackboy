import { connect } from 'react-redux';
import ChatRoom from './chatroom.jsx';

const mSTP = state => ({
  channel: state.entities.user[state.session.id].current_channel,
  messages: Object.values(state.entities.messages),
})

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(ChatRoom);
