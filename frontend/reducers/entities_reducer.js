import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
import channelsReducer from './channels_reducer';
import usersReducer from './users_reducer';
import membershipsReducer from './memberships_reducer';

const entitiesReducer = combineReducers({
  messages: messagesReducer,
  memberships: membershipsReducer,
  channels: channelsReducer,
  users: usersReducer,
});

export default entitiesReducer;