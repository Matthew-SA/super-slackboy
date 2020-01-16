import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import messagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
  messages: messagesReducer,
  users: usersReducer,
});

export default entitiesReducer;