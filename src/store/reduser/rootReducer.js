import {combineReducers} from 'redux';
import {firstReducer} from './reducer';
import {secondReducer} from './reducer2';

export default combineReducers({
    firstReducer,
    secondReducer
})