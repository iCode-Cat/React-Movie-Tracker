import React from "react";
import "./Main.scss";
import Header from "../Pages/Header/Header";
import Search from "../Pages/Search/Search";
import Holder from "../Pages/Holder/Holder";

const Main = () => {
  return (
    <section className="main-container">
      <Header />
      <Search />
      <Holder/>
    </section>
  );
};

export default Main;
