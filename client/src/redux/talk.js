import {
    TALK_ERROR,
    ADD_TALK
    } from '../actions/types';
      
      const initialState = {
        talks: [],
        
        loading: true,
        error: {}
      };
      
      export default function(state = initialState, action) {
        const { type, payload } = action;
      
        switch (type) {
        
          case ADD_TALK:
            return {
              ...state,
              talks: [payload, ...state.talks],
              loading: false
            };
       
          case TALK_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
            };
      
          default:
            return state;
        }
      }
      