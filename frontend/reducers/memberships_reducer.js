import {
  RECEIVE_MEMBERSHIPS,
  RECEIVE_MEMBERSHIP,
  REMOVE_MEMBERSHIP
} from '../actions/membership_actions';

const membershipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
      return action.memberships;
    case RECEIVE_MEMBERSHIP:
      nextState[action.membership.channel_id] = action.membership;
      return nextState;
    case REMOVE_MEMBERSHIP:
      delete nextState[action.membership.channel_id];
      return nextState;
    default:
      return oldState;
  }


}

export default membershipsReducer;