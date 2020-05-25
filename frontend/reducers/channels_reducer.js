import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MEMBERSHIPS, RECEIVE_MEMBERSHIP } from '../actions/membership_actions';


const channelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
      return Object.assign(action.channels, nextState)
    case RECEIVE_CHANNELS:
      return Object.assign(action.channels, nextState)
    case RECEIVE_CHANNEL:
      nextState[action.channel.id] = action.channel;
      return nextState

    default:
      return oldState;
  }
}

export default channelsReducer;