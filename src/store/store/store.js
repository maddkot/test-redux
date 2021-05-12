import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reduser/rootReducer';
import  createSagaMiddleware from 'redux-saga';
import {whatchDataSaga} from '../generators/generatorsSaga';

const sagaMiddlware = createSagaMiddleware();

/* const logger = (store) => (next)=> (action)=>{
    console.log(store.getState(),'logger');
    next(action)
} */

export const store = createStore(rootReducer, applyMiddleware(thunk,sagaMiddlware));

sagaMiddlware.run(whatchDataSaga);