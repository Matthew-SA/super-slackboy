import * as UiAPIUtil from '../util/ui_api_util';

export const RECEIVE_UI = 'RECEIVE_UI';

const receiveUi = ui => ({
  type: RECEIVE_UI,
  ui
});

export const requestUi = userId => dispatch => (
  UiAPIUtil.fetchUI(userId).then(ui => dispatch(receiveUi(ui)))
)