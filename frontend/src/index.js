import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/authCtx";
import { DataProvider } from "./context/dataCtx";
import { HeaderDataProvider } from "./context/headerCtx";
import { CartDataProvider } from "./context/cartCtx";
import { GamesDataProvider } from "./context/gamesCtx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SkeletonTheme } from "react-loading-skeleton";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataProvider>
        <HeaderDataProvider>
          <CartDataProvider>
            <GamesDataProvider>
              <PayPalScriptProvider
                options={{ clientId: "test", currency: "EUR" }}
              >
                <SkeletonTheme baseColor="#403d39" highlightColor="#727272">
                  <App />
                </SkeletonTheme>
              </PayPalScriptProvider>
            </GamesDataProvider>
          </CartDataProvider>
        </HeaderDataProvider>
      </DataProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
