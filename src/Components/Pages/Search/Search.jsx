import React, {useEffect, useState} from "react";
import Button from "../../Elements/Button/Button";
import axios from 'axios';
import "./Search.scss";
import { fetchPosts } from '../../../Redux/searchAction';
import Result from "./Result-box/Result";
import { connect } from 'react-redux';

const Search = (props) => {
  console.log(props.posts);
  //Search input
  const [input , setInput] = useState({})
  //Call movie search api here
  useEffect( async () => {
    await  props.fetchPosts(input)
    console.log('fetched!');
  }, [input])
  

  return (
    <section className="search-container">
      <input type="text" onChange={(e)=>{setInput(e.target.value)}}className="search-movie" placeholder="MOVIE NAME" />
      <div className="rate">STARTS</div>
      <Button> ADD </Button>
      {props.posts.results ? <Result results={props.posts}/>:''}
    </section>
  );
};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default  connect(mapStateToProps, {fetchPosts})(Search) ;
