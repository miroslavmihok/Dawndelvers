import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

const CartContext = createContext();

export const useCartData = () => {
  return useContext(CartContext);
};

export const CartDataProvider = ({ children }) => {
  const [currentlyAddedProduct, setCurrentlyAddedProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartSumWithoutTax, setCartSumWithoutTax] = useState(0);
  const [tax, setTax] = useState(0);
  const [cartSum, setCartSum] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // updating cart based on added product + updating sum and count
  const updateCart = useCallback(() => {
    setCartProducts((prevCartProducts) => [
      ...prevCartProducts,
      currentlyAddedProduct,
    ]);
    const newTotalPrice = cartProducts.reduce(
      (total, product) => total + product.price,
      currentlyAddedProduct.price,
    );
    const priceWithoutTax = newTotalPrice * 0.8;
    const newTax = newTotalPrice - priceWithoutTax;
    const newCount = cartProducts.length + 1;
    setCartSum(newTotalPrice);
    setCartSumWithoutTax(priceWithoutTax);
    setTax(newTax);
    setCartCount(newCount);
    setCurrentlyAddedProduct(null);
  }, [setCartProducts, currentlyAddedProduct, cartProducts]);

  useEffect(() => {
    if (currentlyAddedProduct) {
      updateCart();
    }
  }, [updateCart, currentlyAddedProduct]);

  return (
    <CartContext.Provider
      value={{
        currentlyAddedProduct,
        setCurrentlyAddedProduct,
        cartProducts,
        setCartProducts,
        cartCount,
        setCartCount,
        cartSum,
        setCartSum,
        cartSumWithoutTax,
        setCartSumWithoutTax,
        tax,
        setTax,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
