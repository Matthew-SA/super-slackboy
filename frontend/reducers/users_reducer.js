import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { [action.currentUser.id]: action.currentUser };
    case RECEIVE_USERS:
      return action.users
    default:
      return state;
  }
};

export default usersReducer;