import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer);

store.dispatch({
  type: "ADD_TODO",
  payload: {
    id: 1,
    title: "The first thing to do for demo",
    content: "text The first thing to do for demo",
    complete: false,
  },
});
store.dispatch({
  type: "ADD_TODO",
  payload: {
    id: 12,
    title: "The second thing to do for demo",
    content: "text The second thing to do for demo",
    complete: false,
  },
});
store.dispatch({
  type: "ADD_TODO",
  payload: {
    id: 13,
    title: "The third thing to do for demo",
    content: "text The third thing to do for demo",
    complete: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
