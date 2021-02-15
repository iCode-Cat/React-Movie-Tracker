import React from "react";
import Button from "../../Elements/Button/Button";
import "./Search.scss";

const Search = () => {
  return (
    <section className="search-container">
      <input type="text" className="search-movie" placeholder="MOVIE NAME" />
      <div className="rate">STARTS</div>
      <Button> ADD </Button>
    </section>
  );
};

export default Search;
