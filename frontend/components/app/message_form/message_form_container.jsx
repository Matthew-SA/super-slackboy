import { connect } from 'react-redux';
import MessageForm from './message_form.jsx';
import { requestMessages } from '../../../actions/message_actions'

const mSTP = ({ session, entities: { user } }) => ({
  currentUser: user[session.id],
});

const mDTP = dispatch => ({
  requestMessages: () => dispatch(requestMessages())
});

export default connect(mSTP,mDTP)(MessageForm);
