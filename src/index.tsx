import { GlobalContextProvider } from "./util/context/GlobalContext";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
);
