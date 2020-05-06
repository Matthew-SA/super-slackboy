import {
  RECEIVE_MEMBERSHIPS,
  RECEIVE_MEMBERSHIP
} from '../actions/membership_actions';


const membershipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
      return action.memberships
    case RECEIVE_MEMBERSHIP:
      nextState[action.membership.id] = action.membership;
      return nextState
    // case REMOVE_MESSAGE:
    //   delete nextState[action.messageId]
    //   return nextState;

    default:
      return oldState;
  }


}

export default membershipsReducer;