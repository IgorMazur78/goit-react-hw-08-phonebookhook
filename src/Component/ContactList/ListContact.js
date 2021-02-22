import React, { useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import operationContact from "../../redux/contacts/operationContacts";
import contactSelector from "../../redux/contacts/contactSelector"

import style from "./Listcontact.module.css";
import {Typography} from "@material-ui/core";
import "./ListContactAnimation.css";

// { contact, onDeleteContact }
export default function ListContact() {
  const dispatch = useDispatch();
  const contact = useSelector((state) => contactSelector.getVisibleContact(state));
  const onDeleteContact = (id) => dispatch(operationContact.deleteContacts(id))

  return (
    <ul>
      
      {contact.map(({ id, name, number }) => (
        <li key={id} className={style.ListContactItem}>
          <Typography >{name}:</Typography>
          <Typography >{number}</Typography>
         

          <button
            className={style.buttonDeleteContact}
            onClick={() => onDeleteContact(id)}
          ></button>
        </li>
      ))}
    </ul>
  );
}

// const mapStateToProps = (state) => ({
//   contact:contactSelector.getVisibleContact(state)

// })
// const mapDispatchToProps = {
   
//   onDeleteContact: operationContact.deleteContacts,
// }

// export default connect(null, mapDispatchToProps)(ListContact);
