import React from 'react'
import { useHistory } from "react-router-dom";

import {auth} from '../../firebase/firebase';
import firebase from 'firebase';

function GoogleLogin() {
    const history = useHistory();


    function onSubmit(e) {
        e.preventDefault();
        var provider = new firebase.auth.GoogleAuthProvider();
        auth
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    console.log(error);
  });
  history.push("/home");


    }
    return (
        <div>
            login
            <p>Welcome to selfteach</p>
            <button onClick={onSubmit}>google login</button>
        </div>
    )
}

export default GoogleLogin
