import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
import channelsReducer from './channels_reducer';
import userReducer from './user_reducer';

const entitiesReducer = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  user: userReducer,
});

export default entitiesReducer;