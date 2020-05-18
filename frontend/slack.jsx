import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/Root"
import { login } from './actions/session_actions'
import { fetchMessages }from '../frontend/util/message_api_util'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faChevronDown, faCircle, faCaretDown, faPlus, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faAngellist, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faChevronDown, faCircle, faCaretDown, faPlus, faBriefcase, faLinkedin, faAngellist, faGithubSquare);

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session:  { id: window.currentUser.id, currentChannel: window.currentUser.current_channel },
      entities: {
        user: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchMessages = fetchMessages
  window.login = login
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
