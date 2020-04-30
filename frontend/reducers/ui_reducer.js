import {
  RECEIVE_UI
} from '../actions/ui_actions';

const uiReducer = (oldState ={}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_UI:
      return action.ui
    default:
      return oldState;
  }
}

export default uiReducer