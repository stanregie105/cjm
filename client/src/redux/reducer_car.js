
import {FETCH_CARS} from '../actions/types';



export default function(state=[], action){
    const {type, payload} = action;
    switch(type){
        case FETCH_CARS:
            //console.log(payload);
         return [...state, payload];
       
    
    
        default:
          return state;
    }
    
}