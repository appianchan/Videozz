import React from 'react';
import ReactDOM from 'react-dom';
import { createNewUser, login, logout } from "./actions/session_actions";
import configureStore from "./store/store"

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const store = configureStore();

    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createNewUser = createNewUser;
    window.login = login;
    window.logout = logout;
  // TESTING END

    ReactDOM.render(<h1>Welcome to Videozzz</h1>, root);
});