import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import style from "../../Style/navigation.module.css";
import authOperation from "../../redux/auth/authOperation";
import { Toolbar, Button, Typography } from "@material-ui/core";
import { Person } from "@material-ui/icons";

import { getUserEmail } from "../../redux/auth/authSelector";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector((state) => getUserEmail(state));
  const onLogOut = () => dispatch(authOperation.logOut());



  return (
    <Toolbar className={style.listNavigation}>
      <Person style={{ fontSize: 40 }} color="secondary" />
      <Typography variant="h6">User page :{email}</Typography>

      <Button
        color="secondary"
        variant="contained"
        type="button"
        onClick={onLogOut}
        className={style.buttonNavigation}
      >
        Log Out
      </Button>
    </Toolbar>
  );
}

// const mapStateToProps = (state) => ({
//   email: getUserEmail(state),

// });

// const mapDispachToProps = ({
//   onLogOut: AuthOperation.logOut,

// });

// export default connect(mapStateToProps, mapDispachToProps)(UserMenu);