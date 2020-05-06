import { 
  RECEIVE_CURRENT_USER, 
  SET_CURRENT_CHANNEL } from '../actions/session_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { [action.currentUser.id]: action.currentUser };
    case SET_CURRENT_CHANNEL:
      let newState = Object.assign({}, state)
      console.log(newState)
      // return newState.
    default:
      return state;
  }
};

export default userReducer;