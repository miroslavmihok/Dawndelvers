import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { DataProvider } from "./dataContext/dataCtx";
import { HeaderDataProvider } from "./dataContext/headerCtx";
import App from "./App";
import Home from "./pages/Home/Home";
import Boosting from "./pages/Boosting/Boosting";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route index={true} path="/boosting" element={<Boosting />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <HeaderDataProvider>
        <RouterProvider router={router} />
      </HeaderDataProvider>
    </DataProvider>
  </React.StrictMode>,
);

reportWebVitals();
