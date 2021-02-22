import React, { useState }  from "react";
import { connect, useDispatch } from "react-redux";
import operationContacts from "../../redux/contacts/operationContacts";
import { Button, Typography} from "@material-ui/core";
import style from "./Form.module.css";

export default function Form () {
  const initialState = {
    name: "", number: ""
  }
  const [state, setState] = useState(initialState) 
  const dispatch = useDispatch();
  const handelInputChange = (e) => {
    const {name,value} = e.target
    e.preventDefault();
    setState({...state,
      [name]: value });
  };

 const onhandleAddContact = (state) => dispatch(operationContacts.addContacts(state));
    const handelSubmit = (evt) => {
    evt.preventDefault();
    onhandleAddContact(state);
    setState(initialState);
    console.log(state);
    

  };

  // render() {
   

    return (
      <div className={style.formStyle}>
        <Typography variant="h6" className={style.formStyleTitle}>Phonebook</Typography>
        <form className={style.formStyleFormInput} onSubmit={handelSubmit}>
          <label>
           <Typography variant="h8">Name</Typography>
            <br />
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handelInputChange}
              placeholder="Add name"
              autoFocus
            ></input>
            <br />
          </label>
          <label>
          <Typography variant="h8">Number</Typography>
            <br />
            <input
              type="text"
              name="number"
              value={state.number}
              onChange={handelInputChange}
              placeholder="Add number"
              autoFocus
            ></input>
          </label>
          <br />
          <Button  color = "secondary" variant="contained" type="submit" >
            Add contact
          </Button>
        </form>
      </div>
    );
  } 
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onhandleAddContact: (name, number) =>
//       dispatch(operationContacts.addContacts(name, number)),
//   };
// };

// export default connect(null, mapDispatchToProps)(Form);
