import {
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL
} from '../actions/channel_actions';


const channelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels
    case RECEIVE_CHANNEL:
      nextState[action.channel.id] = action.channel;
      return nextState
    // case REMOVE_MESSAGE:
    //   delete nextState[action.messageId]
    //   return nextState;

    default:
      return oldState;
  }


}

export default channelsReducer;