import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/authCtx";
import { DataProvider } from "./context/dataCtx";
import { HeaderDataProvider } from "./context/headerCtx";
import { ProductsDataProvider } from "./context/productsCtx";
import { CartDataProvider } from "./context/cartCtx";
import { GamesDataProvider } from "./context/gamesCtx";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataProvider>
        <HeaderDataProvider>
          <CartDataProvider>
            <ProductsDataProvider>
              <GamesDataProvider>
                <App />
              </GamesDataProvider>
            </ProductsDataProvider>
          </CartDataProvider>
        </HeaderDataProvider>
      </DataProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);

reportWebVitals();
