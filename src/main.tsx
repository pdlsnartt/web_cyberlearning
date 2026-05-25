import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppStateProvider } from "./hooks/useAppState";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppStateProvider>
      <BrowserRouter basename="/web_cyberlearning">
        <App />
      </BrowserRouter>
    </AppStateProvider>
  </React.StrictMode>,
);