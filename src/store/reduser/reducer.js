import {CHANGE_FIRST_TEXT,CHANGE_SECOND_TEXT} from '../actions/actions'

export const initialState = {
    firstText: '',
    secondText: ''
}
  
  export const firstReducer = (state = initialState, action) =>{
    switch(action.type){
      case CHANGE_FIRST_TEXT:
        return {...state, firstText: action.payload}
  
      case CHANGE_SECOND_TEXT:
        return{...state, secondText: action.payload}
      default: return state
    }
  }