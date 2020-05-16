import { connect } from 'react-redux';
import MessageForm from './message_form.jsx';


const mSTP = ({ session }) => ({
  currentChannel: session.currentChannel
});

const mDTP = dispatch => ({

});

export default connect(mSTP,mDTP)(MessageForm);
