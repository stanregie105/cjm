
import {
  
  POST_ERROR,

  ADD_POST,
  
} from './types';
import axios from 'axios';


// Add post
export const addPost = formData => async dispatch => {
    console.log(formData);
  try {
    const res = await axios.post('api/v1/order', formData);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
