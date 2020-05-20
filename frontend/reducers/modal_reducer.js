import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from '../actions/channel_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case RECEIVE_CHANNEL:
      return null;
    case RECEIVE_CHANNELS:
      return null;
    default:
      return state;
  }
}
