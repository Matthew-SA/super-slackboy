import { connect } from 'react-redux';
import ChannelBrowser from './channel_browser.jsx';
import receiveChannels from '../../../actions/channel_actions'



const mSTP = ({ entities, session }) => ({
  currentChannelId: session.currentChannel,
  channels: Object.values(entities.channels),
})

const mDTP = dispatch => ({
  receiveChannels: (channels => dispatch(receiveChannels(channels)))
});

export default connect(mSTP, mDTP)(ChannelBrowser);
