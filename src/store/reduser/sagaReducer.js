import {SAGA_PUT_DATA} from '../actions/actions';

const initialState = {
    data: ''
};

export const sagaReducer = (state = initialState, action) =>{
    switch(action.type){
        case SAGA_PUT_DATA:
            return {
                ...state, data: action.payload
            }
        default: return state;
    }
}