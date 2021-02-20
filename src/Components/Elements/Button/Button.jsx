import React from "react";
import "./Button.scss";

const Button = ({ children, movie , ...otherProps}) => {
  return <button className={`custom-button ${movie ? `movie-button` : ''}`}>{children}</button>;
};

export default Button;
