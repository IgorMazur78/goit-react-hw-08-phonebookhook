import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperation from "../redux/auth/authOperation";
import {TextField, Button,Typography } from "@material-ui/core";
import style from "../Style/login.module.css"

export default function LogIn () {
  const initialLogInForm = {
    email:"",
    password:""
  }
 const [logInForm,setLogInForm] = useState(initialLogInForm);
 

 const handelChangeLogInForm = (event) => {
const {name,value} = event.target;
setLogInForm({
  ...logInForm,
  [name]:value})
 }
 const dispatch = useDispatch();
 const onLogIn = (logInForm) => dispatch(authOperation.logIn(logInForm))

 const logInSubmit = (event) => {
      event.preventDefault();
      console.log(logInForm);
      
      onLogIn(logInForm);
      setLogInForm(initialLogInForm);
    };

  return(
    <form onSubmit={logInSubmit} className={style.formLogIn}>
        <Typography variant="h4">Log in ...</Typography>
        <Typography variant="h6">E-mail</Typography>
        
        <TextField
        id="filled-basic" label="user email" variant="filled"
          type="email"
          name="email"
          value={logInForm.email}
          onChange={handelChangeLogInForm}
          placeholder="to enter e-mail"
        />
        <Typography variant="h6">Password</Typography>
        <TextField
        id="filled-basic" label="password" variant="filled"
          type="password"
          name="password"
          value={logInForm.password}
          onChange={handelChangeLogInForm}
          
        />
        <br/>        
        <Button color = "secondary" variant="contained" type="submit">Log in</Button>
      </form>
  )
}

// class LogIn extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handelEmailLogIn = (event) => {
//     event.preventDefault();
//     this.setState({
//       email: event.target.value,
//     });
//   };
//   handelpasswordLogIn = (event) => {
//     event.preventDefault();
//     this.setState({
//       password: event.target.value,
//     });
//   };

//   logInSubmit = (event) => {
//     event.preventDefault();
//     this.props.onLogIn({ ...this.state });
//     this.setState({ email: "", password: "" });
//   };

//   render() {
//     return (
      // <form onSubmit={this.logInSubmit} className={style.formLogIn}>
      //   <Typography variant="h4">Log in ...</Typography>
      //   <Typography variant="h6">E-mail</Typography>
        
      //   <TextField
      //   id="filled-basic" label="user email" variant="filled"
      //     type="email"
      //     value={this.state.email}
      //     onChange={this.handelEmailLogIn}
      //     placeholder="to enter e-mail"
      //   />
      //   <Typography variant="h6">Password</Typography>
      //   <TextField
      //   id="filled-basic" label="password" variant="filled"
      //     type="password"
      //     value={this.state.password}
      //     onChange={this.handelpasswordLogIn}
          
      //   />
      //   <br/>        
      //   <Button color = "secondary" variant="contained" type="submit">Log in</Button>
      // </form>
//     );
//   }
// }
// const mapDispatchToProps = ({
//   onLogIn: authOperation.logIn,

// });
// export default connect(null,mapDispatchToProps)(LogIn);
