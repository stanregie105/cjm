import { createStore, combineReducers} from 'redux';
//import { reducer as formReducer} from 'redux-form';
import CarsReducer from './reducer_car';
import post from './post';
//import { InitialFeedback} from './forms';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { createForms} from 'react-redux-form';
//import { createForms} from 'react-redux-form';
//import { InitialFeedback} from './forms';
import logger from 'redux-logger';




export const ConfigureStore=() =>{
    const store = createStore(
    combineReducers({
        cars: CarsReducer,
        post
       }),
      
       applyMiddleware(logger,thunk)
    
    );
    return store;
}