import React from "react";
import { Provider } from "react-redux";
import reactDOM from "react-dom";
import store from "./store/store";
import App from "./App";

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);