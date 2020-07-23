import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

 const firebaseConfig = {
  apiKey: "AIzaSyBh5ql_hON-nOkiDx8hkDL4BBt16rxQFK4",
  authDomain: "evernote-clone-c40b0.firebaseapp.com",
  databaseURL: "https://evernote-clone-c40b0.firebaseio.com",
  projectId: "evernote-clone-c40b0",
  storageBucket: "evernote-clone-c40b0.appspot.com",
  messagingSenderId: "117446773669",
  appId: "1:117446773669:web:5e92c7bb61f2357a1bb64c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
