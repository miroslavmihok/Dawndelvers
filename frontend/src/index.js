import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./dataContext/dataCtx";
import { HeaderDataProvider } from "./dataContext/headerCtx";
import { ProductsDataProvider } from "./dataContext/productsCtx";
import { CartDataProvider } from "./dataContext/cartCtx";
import { GamesDataProvider } from "./dataContext/gamesCtx";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>,
);

reportWebVitals();
