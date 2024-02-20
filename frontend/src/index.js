import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./dataContext/dataCtx";
import { HeaderDataProvider } from "./dataContext/headerCtx";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <DataProvider>
    <HeaderDataProvider>
      <App />
    </HeaderDataProvider>
  </DataProvider>,
  // </React.StrictMode>,
);

reportWebVitals();
