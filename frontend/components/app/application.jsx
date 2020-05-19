import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TopNav from './topnav/topnav';
import ViewHeader from './view_header/viewheader';
import Profile from './profile/profile';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import Modal from './modal/modal';

import { requestUi } from '../../actions/ui_actions';
import { requestMemberships } from '../../actions/membership_actions'
import { requestMessages, incomingMessage } from '../../actions/message_actions'


function Application() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUi())
    dispatch(requestMemberships())
    dispatch(requestMessages())

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

  return (
    <div className="app">
      <Modal />
      <TopNav />
      <Profile />
      <ViewHeader />
      <Sidebar />
      <Main />
    </div>
  )
};

export default Application;