import { connect } from 'react-redux';
import DirectMessageForm from './direct_message_form';


const mapStateToProps = state => ({
  currentUser: state.entities.user
})

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageForm);