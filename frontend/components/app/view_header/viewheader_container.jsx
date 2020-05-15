import { connect } from 'react-redux';
import ViewHeader from './viewheader.jsx';

const mapStateToProps = state => ({
  currentChannel: state.entities.memberships[state.session.currentChannel],
})

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewHeader);
