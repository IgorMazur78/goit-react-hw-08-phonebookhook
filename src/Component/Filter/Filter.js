import React from "react";
import {useSelector, useDispatch } from "react-redux";
import contactAction from "../../redux/contacts/contactAction"
import contactSelector from "../../redux/contacts/contactSelector"

import style from "./Filter.module.css"
import { Typography} from "@material-ui/core";


 export default function Filter() {
   const dispatch = useDispatch()
  const value = useSelector(state => contactSelector.getFilter(state))
const onChange = (event) => dispatch(contactAction.filterContact(event.target.value))
  return (
    <form className = {style.filter}>
      <Typography variant="h6" className = {style.filterTitle}>Find contacts by name</Typography>
      <input
      className = {style.filterInput
      }
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        
      />
    </form>
  );
}
