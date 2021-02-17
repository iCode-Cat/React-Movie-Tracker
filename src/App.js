import Main from "./Components/Main/Main";
import {useState} from 'react';
import store from './Redux/store'
import "./Global.scss";

export default function App() {
  
  return (
    <div className="app-container">
      <Main/>
    </div>
  );
}
