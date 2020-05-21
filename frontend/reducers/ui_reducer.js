import { combineReducers } from 'redux';
import persistentUiReducer from './persistent_ui_reducer';
import modalReducer from './modal_reducer';
import rightbarReducer from './rightbar_reducer';

const uiReducer = combineReducers({
  persistentUi: persistentUiReducer,
  modal: modalReducer,
  // rightbar: rightbarReducer,
});

export default uiReducer;