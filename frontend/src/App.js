import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { HeaderDataProvider } from "./dataContext/headerCtx";

const App = () => {
  return (
    <div className="">
      <HeaderDataProvider>
        <Header />
        <Navbar />
      </HeaderDataProvider>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
