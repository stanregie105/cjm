import axios from 'axios';
import { FETCH_CARS}  from './types';


export const fetchCars = () => async dispatch =>{
    //console.log("Action sent", request);
    const res= await axios.get('/api/v1/vehicles');
    
    dispatch({
         type: FETCH_CARS,
         payload: res.data.data.data
         
    });
}