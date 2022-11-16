import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./app/store";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//https://www.youtube.com/watch?v=w2rAP7d6ndg 08:30 => 23:21 23:23 =>
//https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
