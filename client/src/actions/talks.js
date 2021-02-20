
import {
TALK_ERROR,
ADD_TALK,
} from './types';
  import axios from 'axios';
  
  
  // Add post
  export const addTalk = formData => async dispatch => {
      //console.log(formData);
    try {
      const res = await axios.post('api/v1/talk', formData);
  
      dispatch({
        type: ADD_TALK,
        payload: res.data
      });
  
      
    } catch (err) {
      dispatch({
        type: TALK_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  