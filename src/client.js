import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Loadable from "react-loadable";
import React from "react";
import { hydrate } from "react-dom";

Loadable.preloadReady().then(() => {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
});

if (module.hot) {
  module.hot.accept();
}
