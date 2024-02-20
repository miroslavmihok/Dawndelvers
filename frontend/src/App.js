import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Boosting from "./pages/Boosting/Boosting";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import WorkWithUs from "./pages/Workwithus/WorkWithUs";
import FAQ from "./pages/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

const App = () => {
  console.log("rendering App");

  return (
    <Router>
      <div className="relative flex w-full flex-col">
        <ScrollToTop />
        <Header />
        <div className="flex-1 xl:ml-[300px]">
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
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
