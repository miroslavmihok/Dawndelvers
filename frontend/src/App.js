import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Boosting from "./pages/Boosting/Boosting";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import WorkWithUs from "./pages/Workwithus/WorkWithUs";
import FAQ from "./pages/FAQ/FAQ";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginModal from "./modal/LoginModal";

const App = () => {
  const dialog = useRef();

  const displayLoginModal = () => {
    dialog.inert = true;
    dialog.current.showModal();
    dialog.inert = false;
  };

  const dialogCloseHandler = () => {
    dialog.current.close();
  };

  return (
    <Router>
      <div className="relative z-0 flex w-full flex-col">
        <LoginModal ref={dialog} onClose={dialogCloseHandler} />
        <ScrollToTop />
        <Header displayLoginModal={displayLoginModal} />
        <div className="z-10 flex-1 xl:ml-[300px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:gameUrl" element={<Boosting />} />
            <Route
              path="/products/:gameUrl/:productUrl"
              element={<Product />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/workwithus" element={<WorkWithUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
