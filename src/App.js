import Main from "./Components/Main/Main";
import {useState} from 'react';
import "./Global.scss";

export default function App() {
  const [results , setResult] = useState(null)
  return (
    <div className="app-container">
      <Main setResult={setResult} results={results} />
    </div>
  );
}
