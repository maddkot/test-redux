import {createStore} from 'redux'
//import {firstReducer} from '../reduser/reducer';
import rootReducer from '../reduser/rootReducer';

export const store = createStore(rootReducer);