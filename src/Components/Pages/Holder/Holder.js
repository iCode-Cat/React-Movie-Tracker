import React from 'react';
import Button from '../../Elements/Button/Button';
import './Holder.scss'

const Holder = () => {

    return <div className="movie">

    <img src="" alt="poster" className="movie-poster"/>
    <h1 className="movie-name">NAME</h1>
    <div className="movie-rate">rating starts</div>
    <div className="movie-button-container">
    <Button movie>EDIT</Button>
    <Button movie>DELETE</Button>
    </div>

    </div>

}

export default Holder;