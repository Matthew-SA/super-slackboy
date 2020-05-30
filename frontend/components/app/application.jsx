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
    
    // if (App.room) App.cable.subscriptions.remove(App.room)
    // App.room = App.cable.subscriptions.create(
    //   { channel: "ChatChannel" },
    //   {
    //     received: data => {
    //       switch (data.type) {
    //         case "message":
    //           const message = {
    //             author: data.author,
    //             body: data.body,
    //             id: data.id,
    //             time: data.time,
    //             user_id: data.user_id,
    //             channel_id: data.channel_id,
    //           };
    //           dispatch(incomingMessage(message))
    //           let element = document.getElementById(`chan-${message.channel_id}`)
    //           if (element) element.classList.add("sidebar-highlight")
    //           break;
    //         case "channel":
    //           console.log(data)
    //           break;
    //       }
    //     },
    //     speak: function (data) { return this.perform("speak", data) },
    //     startListening: function (data) { return this.perform("start_listening", data)},
    //     stopListening: function (data) { return this.perform("stop_listening", data) },
    //   }
    // );

    // return () => {
    //   App.cable.disconnect();
    // }

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