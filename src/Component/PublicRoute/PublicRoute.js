import React from "react";
import { useSelector} from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isLogIn } from "../../redux/auth/authSelector";

export default function PublicRoute({
  children,
  restricted,
  ...routeProps
}) {
  const isАuthorized = useSelector((state) => isLogIn(state));

 return <Route
    {...routeProps}
    
  >{ isАuthorized && restricted ? ( <Redirect to="/contacts" /> ) : (children)}</Route>
  };

  // render={(props) => {
  //   return isАuthorized && restricted ? (
  //     <Redirect to="/contacts" />
  //   ) : (
  //     <Component {...props} />
  //   );
  // }}

// const mapStateToProps = (state) => ({
//   isАuthorized: isLogIn(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
