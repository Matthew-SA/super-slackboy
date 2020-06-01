import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopNav from './topnav/topnav';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import Modal from './modal/modal';
import Rightbar from './rightbar/rightbar';

import { requestUi } from '../../actions/ui_actions';
import { requestMemberships } from '../../actions/membership_actions';
import { incomingMessage } from '../../actions/message_actions';

function Application() {
  const dispatch = useDispatch();
  const rightbar = useSelector(state => state.ui.persistentUi.rightbar);
  const memberships = useSelector(state => state.entities.memberships);

  useEffect(() => {
    dispatch(requestUi())
    dispatch(requestMemberships())

    return(() => {
      App.cable.disconnect()
    })
  }, []);

  return (
    <div className={rightbar ? "app2" : "app"}>
      <Modal />
      <TopNav />
      <Sidebar />
      <Main />
      {rightbar ? <Rightbar/> : null}
    </div>
  )
};

export default Application;