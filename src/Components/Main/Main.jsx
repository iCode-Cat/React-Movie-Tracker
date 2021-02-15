import React from "react";
import "./Main.scss";
import Header from "../Pages/Header/Header";
import Search from "../Pages/Search/Search";

const Main = () => {
  return (
    <section className="main-container">
      <Header />
      <Search />
    </section>
  );
};

export default Main;
