import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useHistory} from "react-router-dom"

import Form from "../Form/formEditor";
import ListContact from "../ContactList/ListContact";
import Filter from "../Filter/Filter";
import operationContact from "../../redux/contacts/operationContacts";
import contactSelector from "../../redux/contacts/contactSelector";
import { isLogIn } from "../../redux/auth/authSelector";
import style from "./phone.module.css"


//
export default function PhoneBook() {
const dispatch = useDispatch();
// const history = History();

// const onFetchContact = () => dispatch(operationContact.fetchContacts());
// isLoadingContacts: contactSelector.getLoading(state),
const isLoadingContacts = useSelector(state => contactSelector.getLoading(state));
const isAuthLogIn = useSelector(state => isLogIn(state));

useEffect(() => {
  dispatch(operationContact.fetchContacts())
  if (!isAuthLogIn) {
        this.props.history.replace("/login");
        return;
  }
}, [dispatch, isAuthLogIn])
  // componentDidMount() {
  //   this.props.onFetchContact();

  //   if (!this.props.isAuthLogIn) {
  //     this.props.history.replace("/login");
  //     return;
  //   }
  // }

  // componentDidUpdate() {
  //   if (!this.props.isAuthLogIn) {
  //     this.props.history.replace("/login");
  //     return;
  //   }
  // }


    return (
      <div className={style.phone}>
        {isLoadingContacts && <h1>LOADING ...</h1>}
        <Form />
        <Filter />
        <ListContact />
      </div>
    );
  }

// const mapStateToProps = (state) => ({
//   isLoadingContacts: contactSelector.getLoading(state),
//   isAuthLogIn: isLogIn(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onFetchContact: () => dispatch(operationContact.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
