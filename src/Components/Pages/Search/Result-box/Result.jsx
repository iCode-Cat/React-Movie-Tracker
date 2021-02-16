import React from 'react';
import './Result.scss'

const Result = ({results}) => {

    console.log(results);

    return <div className="result-container">
        
    {results.results.map((a) =>  <div className="result-wrapper">
    <img src={a.backdrop_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${a.backdrop_path}`:'https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png'} alt=""/>
    <h1>{a.title}</h1>
 

    </div>)}

    </div>

}

export default Result;