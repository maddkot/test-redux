import {takeEvery, put, call} from 'redux-saga/effects';
import {SAGA_GET_DATA, sagaPutData} from '../actions/actions';

function fetchDataSaga(){
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    
}

export function* workerDataSaga(){
    const data = yield call(fetchDataSaga);
    yield put(sagaPutData(data))
}

export function* whatchDataSaga(){
    yield takeEvery(SAGA_GET_DATA, workerDataSaga)
    
}