import { connect } from 'react-redux';
import { openModal } from '../../../../actions/modal_actions'
import ChannelDropDown from './channel_dropdown.jsx';

const mapStateToProps = ({ session, entities: { user } }) => {
  return {
    currentUser: user[session.id]
  }
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDropDown);
