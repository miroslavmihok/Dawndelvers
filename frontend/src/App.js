import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useHeaderData } from "./context/headerCtx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import ScrollToTop from "./utils/ScrollToTop";
import AuthModal from "./modal/AuthModal";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Boosting from "./pages/Boosting/Boosting";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import WorkWithUs from "./pages/Workwithus/WorkWithUs";
import FAQ from "./pages/FAQ/FAQ";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import ProfileScreen from "./pages/Profile/ProfileScreen";
import AdminProfileScreen from "./pages/Profile/Admin/AdminProfileScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { setShowDialog } = useHeaderData();

  const displayAuthModalHandler = () => {
    setShowDialog(true);
    document.body.classList.add("no-scroll");
  };

  const closeAuthModalHandler = () => {
    document.body.classList.remove("no-scroll");
    setShowDialog(false);
  };

  return (
    <Router>
      <div className="relative z-0 flex w-full flex-col">
        <AuthModal onClose={closeAuthModalHandler} />
        <ScrollToTop />
        <Header displayAuthModalHandler={displayAuthModalHandler} />
        <div className="z-10 flex-1 xl:ml-[300px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products?/:gameUrl?" element={<Boosting />} />
            <Route
              path="/products/:gameUrl?/:productUrl?"
              element={<Product />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/workwithus" element={<WorkWithUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/cart"
              element={
                <Cart displayAuthModalHandler={displayAuthModalHandler} />
              }
            />
            <Route path="" element={<PrivateRoute />}>
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/profile/:section/:id?"
                element={<ProfileScreen />}
              />
            </Route>
            <Route path="" element={<AdminRoute />}>
              <Route
                path="/admin/profile/:section/:action?/:url?"
                element={<AdminProfileScreen />}
              />
            </Route>
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </div>
    </Router>
  );
};

export default App;
