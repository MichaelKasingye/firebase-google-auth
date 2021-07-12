import React, { useEffect, useState } from 'react'
import {auth} from '../../firebase/firebase';
import { useHistory } from "react-router-dom";

function GoogleHomepage() {
const [name, setName] = useState('');
const history = useHistory();

useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if (user) {
          console.log("USER signed in " );
          console.log(user.displayName);
          setName(user.displayName)
        } else {
            console.log("NO USER ");

        }
      });

}, [])

function logout() {
    auth.signOut().then(() => {
        console.log('User signed out');
    }).catch((error) => {
        // An error happened.
    });
    history.push("/login");
}

    return (
        <div>
           Home page
           <h2>{name}</h2> 
           <button onClick={logout}>logout</button>
        </div>
    )
}

export default GoogleHomepage
