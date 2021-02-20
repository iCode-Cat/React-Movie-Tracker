import React from 'react';
import './Result.scss'

const Result = ({results}) => {

    console.log(results);

    return <div className="result-container">
        
    {results.results.map((a) =>  <div className="result-wrapper">
    <img src={a.poster_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${a.poster_path}`:'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'} alt=""/>
    <h1>{a.title}</h1>
 

    </div>)}

    </div>

}

export default Result;