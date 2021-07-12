import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateValue } from "./components/ContextAPI/StateProvider";
// import {usertoken} from "./global/user"

import "./App.css";

import Login from "./components/pages/GoogleLogin";
import Logout from "./components/pages/GoogleLogout";
import home from "./components/pages/GoogleHomepage";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
         
        </Switch>

      </Router>
    </div>
  );
}

export default App;
