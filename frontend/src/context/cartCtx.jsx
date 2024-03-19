import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const useCartData = () => {
  return useContext(CartContext);
};

export const cartReducer = (state, action) => {
  if (!state.totalPrice) {
    state.totalPrice = 0;
  }
  if (!state.taxPrice) {
    state.taxPrice = 0;
  }
  if (!state.priceExclTax) {
    state.priceExclTax = 0;
  }

  switch (action.type) {
    case "ADD":
      let newAddCartItems = [...state.cartItems, action.payload];
      let newAddPriceExclTax = state.priceExclTax + action.payload.price;
      let newAddTaxPrice = 0.2 * newAddPriceExclTax;
      let newAddTotalPrice = newAddPriceExclTax + newAddTaxPrice;

      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: newAddCartItems,
          totalPrice: newAddTotalPrice,
          taxPrice: newAddTaxPrice,
          priceExclTax: newAddPriceExclTax,
        }),
      );

      return {
        cartItems: newAddCartItems,
        totalPrice: newAddTotalPrice,
        taxPrice: newAddTaxPrice,
        priceExclTax: newAddPriceExclTax,
      };
    case "REMOVE":
      let newRemoveCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      let newRemovePriceExclTax = state.priceExclTax - action.payload.price;
      let newRemoveTaxPrice = 0.2 * newRemovePriceExclTax;
      let newRemoveTotalPrice = newRemovePriceExclTax + newRemoveTaxPrice;

      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: newRemoveCartItems,
          totalPrice: newRemoveTotalPrice,
          taxPrice: newRemoveTaxPrice,
          priceExclTax: newRemovePriceExclTax,
        }),
      );
      return {
        cartItems: newRemoveCartItems,
        totalPrice: newRemoveTotalPrice,
        taxPrice: newRemoveTaxPrice,
        priceExclTax: newRemovePriceExclTax,
      };
    case "CLEAR":
      let newClearCartItems = action.payload;

      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartItems: newClearCartItems,
        }),
      );
      return {
        cartItems: newClearCartItems,
      };
    default:
      return state;
  }
};

export const CartDataProvider = ({ children }) => {
  const initialCartState = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [] };

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
