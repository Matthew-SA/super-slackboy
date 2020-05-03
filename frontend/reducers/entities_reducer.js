import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
import channelsReducer from './channels_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  users: usersReducer,
});

export default entitiesReducer;