import {ADD_TRACK} from '../actions/actions';
const initialState = [
    'Stay together for the kids',
    'Digitl bath'
]

export const secondReducer  = (state = initialState, action) => {
 switch(action.type){
     case ADD_TRACK:
         return [...state, action.payload];
    default: return state
 }
}