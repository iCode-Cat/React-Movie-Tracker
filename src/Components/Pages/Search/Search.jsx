import React, {useEffect, useState} from "react";
import Button from "../../Elements/Button/Button";
import axios from 'axios';
import "./Search.scss";
import Result from "./Result-box/Result";

const Search = ({setResult, results}) => {


  //Search input
  const [input , setInput] = useState(null)
  console.log(input);
  const movieDatabase = async () => {


    //Put poster path
    // https://www.themoviedb.org/t/p/w600_and_h900_bestv2/path

const fetch = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=212b9d2b6b60b43b19f39f4e65ed7e09`);
const data = await fetch.data;
setResult(data)

    
  }
  //Call movie search api here
  useEffect( async () => {

    await movieDatabase()
    console.log('fetched!');
  }, [input])
  

  return (
    <section className="search-container">
      <input type="text" onChange={(e)=>{setInput(e.target.value)}}className="search-movie" placeholder="MOVIE NAME" />
      <div className="rate">STARTS</div>
      <Button> ADD </Button>
      {results ? <Result results={results}/>:''}
    </section>
  );
};

export default Search;
