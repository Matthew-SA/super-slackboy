import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopNav from './topnav/topnav';
import ViewHeader from './view_header/viewheader';
import Profile from './profile/profile';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import Modal from './modal/modal';
import Rightbar from './rightbar/rightbar';
import RightbarHeader from './rightbar_header/rightbar_header';

import { requestUi } from '../../actions/ui_actions';
import { requestMemberships } from '../../actions/membership_actions';
import { incomingMessage } from '../../actions/message_actions';
import { requestChannel } from '../../actions/channel_actions';

function Application() {
  const dispatch = useDispatch();
  const focus = useSelector(state => state.session.focus);

  const rightbar = useSelector(state => state.ui.persistentUi.rightbar);

  useEffect(() => {
    dispatch(requestUi())
    dispatch(requestMemberships())
    if (!isNaN(focus)) {
      dispatch(requestChannel(focus))
    }


    App.room = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              const message = {
                author: data.author,
                body: data.body,
                id: data.id,
                time: data.time,
                channel_id: data.channel_id,
              };
              dispatch(incomingMessage(message))
              let element = document.getElementById(`chan-${message.channel_id}`)
              if (element) element.classList.add("sidebar-highlight")
              break;
            case "channel":
              console.log(data)
              break;
          }
        },
        speak: function (data) { return this.perform("speak", data) },
        startListening: function (data) { return this.perform("start_listening", data) },
      }
    );

    return () => {
      App.cable.disconnect();
    }

  }, []);

  const isRightbar = () => rightbar && !isNaN(focus)

  const applyAppClass = () => isRightbar() ? "app2" : "app"
  
  const buildRightbarHeader = () => {
    if (isRightbar()) return <RightbarHeader />
  }

  const buildRightbar = () => {
    if (isRightbar()) return <Rightbar />
  }

  return (
    <div className={applyAppClass()}>
      <Modal />
      <TopNav />
      <Profile />
      <ViewHeader />
      <Sidebar />
      <Main />
      {buildRightbarHeader()}
      {buildRightbar()}
    </div>
  )
};

export default Application;