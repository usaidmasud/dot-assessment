import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./assets/index.scss";
import ReduxProvider from "./libs/redux/ReduxProvider";
import Router from "./router";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <Router />
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>
);
