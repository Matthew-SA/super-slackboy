import {
  RECEIVE_MEMBERSHIPS,
  RECEIVE_MEMBERSHIP
} from '../actions/membership_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';


const membershipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
      return action.memberships
    case RECEIVE_MEMBERSHIP:
      nextState[action.membership.membership.channel_id] = action.membership.membership;
      nextState[action.membership.oldmembership.channel_id] = action.membership.oldmembership;
      return nextState
    case RECEIVE_CHANNEL:
      nextState[action.channel.id] = action.channel
      return nextState
    // case REMOVE_MESSAGE:
    //   delete nextState[action.messageId]
    //   return nextState;

    default:
      return oldState;
  }


}

export default membershipsReducer;