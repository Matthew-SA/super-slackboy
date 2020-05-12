import { connect } from 'react-redux';
import ChannelForm from './channel_form';


const mapStateToProps = state => ({
  currentUser: state.entities.user
})

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);