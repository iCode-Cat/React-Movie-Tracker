import { FETCH_POSTS, NEW_POST } from './types';
 
export const fetchPosts = (input) => dispatch => {
  fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=212b9d2b6b60b43b19f39f4e65ed7e09`)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
 
