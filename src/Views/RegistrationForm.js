import React, { useState } from "react";
import {useDispatch} from "react-redux";

import authOperation from "../redux/auth/authOperation";
import style from "../Style/registration.module.css";
import {TextField, Button,Typography } from "@material-ui/core"

export default function RegistrationForm () {
   const initialForm = {
    name:"",
    email:"",
    password:"",
   } 
   const [form,setForm] = useState(initialForm);
  

  const handelChangeForm = (event) => {
      const {name,value} = event.target
      setForm({ ...form,
        [name]: value})
   } ;
   const dispatch = useDispatch()
   const onRegister = (form) => dispatch(authOperation.register(form))
  
 const registerSubmit = (event) => {
  event.preventDefault();
  onRegister(form);   
  setForm(initialForm);
  }
//  useCallback(
//    (event) => {
//     event.preventDefault();
//     dispatch(authOperation.register({form}))
//     console.log("Це форма:",form);    
//     setForm(initialForm);
//     },[dispatch,form,initialForm],
//  )



return (
  <form onSubmit={registerSubmit} className={style.registration}>
         <Typography variant="h4" >Form registration</Typography>
        <Typography variant="h6">Name</Typography>
        <TextField
        id="filled-basic" label="user name" variant="filled"
          type="text"
          name="name"
          value={form.name}
          onChange={handelChangeForm}
          placeholder="user name"
        />
        <Typography variant="h6">E-mail</Typography>
        <TextField
        id="filled-basic" label="email" variant="filled"
          type="email"
          value={form.email}
          name="email"
          onChange={handelChangeForm}
          placeholder="user email"
        />
        <Typography variant="h6">Password</Typography>
        <TextField
        id="filled-basic" label="password" variant="filled"
          type="password"
          value={form.password}
          name="password"
          onChange={handelChangeForm}
          placeholder="user password"
        />
        <br />
    
        <Button color = "secondary" variant="contained" type="submit" className="">
          To Register
        </Button>
      </form>

)
}


// class registrationForm extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   handelRegistrationName = (event) => {
//     event.preventDefault();
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handelRegistrationEmail = (event) => {
//     event.preventDefault();
//     this.setState({
//       email: event.target.value,
//     });
//   };
//   handelRegistrationPassword = (event) => {
//     event.preventDefault();
//     this.setState({
//       password: event.target.value,
//     });
//   };

//   RegisterSubmit = (event) => {
//     event.preventDefault();
//     this.props.onRegister({ ...this.state });
//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <form onSubmit={this.RegisterSubmit} className={style.registration}>
//         <Typography variant="h4" >Form registration</Typography>
//         <Typography variant="h6">Name</Typography>
//         <TextField
//         id="filled-basic" label="user name" variant="filled"
//           type="text"
//           name="user"
//           value={name}
//           onChange={this.handelRegistrationName}
//           placeholder="user name"
//         />
//         <Typography variant="h6">E-mail</Typography>
//         <TextField
//         id="filled-basic" label="email" variant="filled"
//           type="email"
//           value={email}
//           name="user"
//           onChange={this.handelRegistrationEmail}
//           placeholder="user email"
//         />
//         <Typography variant="h6">Password</Typography>
//         <TextField
//         id="filled-basic" label="password" variant="filled"
//           type="password"
//           value={password}
//           name="user"
//           onChange={this.handelRegistrationPassword}
//           placeholder="user password"
//         />
//         <br />
//         <Button color = "secondary" variant="contained" type="submit" className="">
//           To Register
//         </Button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps({
//     onRegister: authOperation.register
// })

// export default connect(null, {onRegister: authOperation.register})(
//   RegistrationForm
// );
