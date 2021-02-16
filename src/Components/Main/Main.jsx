import React from "react";
import "./Main.scss";
import Header from "../Pages/Header/Header";
import Search from "../Pages/Search/Search";

const Main = ({setResult,results}) => {
  return (
    <section className="main-container">
      <Header />
      <Search setResult={setResult} results={results} />
    </section>
  );
};

export default Main;
