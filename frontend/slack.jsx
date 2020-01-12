// import React from "react";
// import ReactDOM from "react-dom";
// import configureStore from './store/store';
// import Root from "./components/Root"
// import { login } from './actions/session_actions'

// document.addEventListener("DOMContentLoaded", () => {
//   let store;
//   if (window.currentUser) {
//     const preloadedState = {
//       session: { id: window.currentUser.id },
//       entities: {
//         users: { [window.currentUser.id]: window.currentUser }
//       }
//     };
//     store = configureStore(preloadedState);
//     delete window.currentUser;
//   } else {
//     store = configureStore();
//   }
//   window.login = login
//   window.getState = store.getState;
//   window.dispatch = store.dispatch; 
//   const root = document.getElementById("root");
//   ReactDOM.render(<Root store={store}/>, root);
// });


import React from "react";
import ReactDOM from "react-dom";
import ChatRoom from "./Chatroom.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<ChatRoom />, root);
});