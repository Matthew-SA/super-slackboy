import { combineReducers } from 'redux';
import persistentUiReducer from './persistent_ui_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
  persistentUi: persistentUiReducer,
  modal: modalReducer,
});

export default uiReducer;