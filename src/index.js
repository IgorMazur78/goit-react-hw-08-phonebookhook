import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from "./redux/storePhone";


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <PersistGate loading = {null} persistor={persistor} >
    <App />

    </PersistGate>
      
      
    </Provider>
   
    
  </React.StrictMode>,

  document.getElementById("root")
);
