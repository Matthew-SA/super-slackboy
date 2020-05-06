import { connect } from 'react-redux';
import MessageForm from './message_form.jsx';


const mSTP = ({ session, entities: { user } }) => ({

});

const mDTP = dispatch => ({

});

export default connect(mSTP,mDTP)(MessageForm);
