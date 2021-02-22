import React, { useEffect, Suspense, lazy } from "react";
import {BrowserRouter, Switch } from "react-router-dom";
import { useDispatch} from "react-redux";

import authOperation from "../redux/auth/authOperation";
import AppBar from "./AppBar/AppBar";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import PublicRoute from "../Component/PublicRoute/PublicRoute"

const HomePage = lazy(()=>import("../Views/HomePage"));
const RegistrationForm = lazy(()=>import("../Views/RegistrationForm"));
const  LogIn = lazy(()=>import("../Views/LogIn"));
const PhoneBook = lazy(()=>import("../Component/PhoneBook/PhoneBook"));

export default function App() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(authOperation.getCurrentUser())
  }, [dispatch])

  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }
//  exact component = {LogIn}
// exact component = {PhoneBook}
// component = {HomePage}
// component = {RegistrationForm}
    return (
      <BrowserRouter>
      <div className="App">
        <AppBar />
 
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute exact path="/contacts" ><PhoneBook/></PrivateRoute>
          <PublicRoute exact path ="/" restricted = {false} ><HomePage/></PublicRoute>
          <PublicRoute exact path ="/register" restricted = {true} ><RegistrationForm/></PublicRoute>
          <PublicRoute exact path ="/login" restricted = {true} ><LogIn/></PublicRoute>
          </Switch>
          </Suspense>
      </div>
      </BrowserRouter>
      
    );
  }

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperation.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
