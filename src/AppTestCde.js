import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AllOrders from "./components/pages/Admin/AllOrders";
import UserOrders from "./components/pages/SpecificUserOrder";
import ViewOrder from "./components/pages/ViewOrder";


import PostOrder from "./components/pages/PostOrder";
import Login from "./components/pages/LoginPage";
import AdminSignUp from "./components/pages/Admin/AdminLoginPage";
import AdminViewOrder from "./components/pages/Admin/AdminViewOrder";
// import ProtectedRoute from "./protectedroutes/ProtectedRoutes";



function App() {
  
  const [isAuth, setIsAuth] = useState(false);
  const [redirectToRefferer, setRedirectToRefferer] = React.useState(false);
//testing

const fakeAuth = {
  isAuthenticated: false,
  authenticated(cb){
    this.isAuthenticated = true
    // setTimeout(cd, 100) //fake auth
  },
  signout(cb){
    this.isAuthenticated = false
    // setTimeout(cd, 100) //fake auth
  }
}

function PrivateRoute({children, ...rest}) {
  return(
    <Route {...rest} render={({location}) => {
      return fakeAuth.isAuthenticated === true?
      children
      : <Redirect to={{
        pathname: '/login',
        state: {from: location}
      }}/>
    }}/>
  )
}

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;
// const Protected = () => <h3>Protected</h3>;


function Login(){
  const {state} = useLocation();

  const login = () => {
    fakeAuth.authenticated(() => {
      setRedirectToRefferer(true)
    })
  }
if(redirectToRefferer === true){
  return <Redirect to={state?.from || '/'}/>
}

  return(
    <div> 
      <p>Tou mus login first</p>
      <button onClick={login}>Login</button>
    </div>
  )
}

console.log(isAuth);
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/adminsignUp" component={AdminSignUp} />
          <Route path="/adminviewOrder/:Id" component={AdminViewOrder} />

          <Route path="/allorders" component={AllOrders} />
          <Route path="/UserOrders" component={UserOrders} />
          <Route path="/viewOrder/:Id" component={ViewOrder} />


          <Route path="/postorder" component={PostOrder} />
        <ProtectedRoute path="/postorder" component={PostOrder} isauth={isAuth}/>
        </Switch> */}
         {/* <div>  */}
        <div>
        <p><Link to="/public">public</Link></p>
        <p><Link to="/protected">protected</Link></p>
        </div>
        <Route path="/protected" component={Protected} />
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected"/>
        {/* <Route path="/public" ><Public/><Route /> */}
{/* </div> */}
      </Router>
    </div>
  );
}

export default App;
