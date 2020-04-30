import * as UiAPIUtil from '../util/ui_api_util';

export const RECEIVE_UI = 'RECEIVE_UI';

const receiveUi = ui => ({
  type: RECEIVE_UI,
  ui
});

export const requestUi = () => dispatch => (
  UiAPIUtil.fetchUi().then(ui => dispatch(receiveUi(ui)))
)

export const toggleUiElement = uiElement => dispatch => (
  UiAPIUtil.toggleUiElement(uiElement).then(ui => dispatch(receiveUi(ui)))
)