import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isLogIn } from "../../redux/auth/authSelector";

export default function PrivateRoute({
  children,
  // component: Component,
  // isАuthorized,
  ...routeProps
}) {
  const isАuthorized = useSelector(state => isLogIn(state))
   return (
   <Route
    {...routeProps}
    
  >{isАuthorized ? (children) : <Redirect to="/login" />}</Route>)
  };
  // render={(props) => 
//   isАuthorized ? <Component {...props} /> : <Redirect to="/login" />
// }

// const mapStateToProps = (state) => ({
//   isАuthorized: isLogIn(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
