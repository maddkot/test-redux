import {combineReducers} from 'redux';
import {firstReducer} from './reducer';
import {secondReducer} from './reducer2';
import {reducerGetData} from './reducerGetData';
import {sagaReducer} from './sagaReducer';

export default combineReducers({
    firstReducer,
    secondReducer,
    reducerGetData,
    sagaReducer
})