import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider initialState = {initialState} reducer = {reducer}>
    <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
