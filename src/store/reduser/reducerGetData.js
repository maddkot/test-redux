import {GET_DATA, CLEAR_DATA} from '../actions/actions'

const initialState = {
    data:{}
}

export const reducerGetData = (state = initialState, action) =>{
    switch(action.type){
        case GET_DATA:
            return{
                ...state, data: action.payload
            }
        case CLEAR_DATA:
            return {
                ...state, data: ''
            }
        default:
            return state;
    }
}