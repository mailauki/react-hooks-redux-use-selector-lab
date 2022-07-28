import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import usersReducer from "./features/users/usersSlice";

import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(usersReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
