export const CHANGE_FIRST_TEXT = 'CHANGE_FIRST_NAME';
export const CHANGE_SECOND_TEXT = 'CHANGE_SECOND_NAME';
export const ADD_TRACK = 'ADD_TRACK';
export const GET_DATA = "FETCH_DATA";
export const CLEAR_DATA ='CLEAR_DATA';
export const SAGA_GET_DATA = 'SAGA_GET_DATA';
export const SAGA_PUT_DATA = 'SAGA_PUT_DATA';


export const changeFirstText = newText => {
  return {
  type: CHANGE_FIRST_TEXT,
  payload: newText
  }
}

export const changeSecondText = newText => {
  return{
  type: CHANGE_SECOND_TEXT,
  payload: newText
  }
}

export const addTrack = (text) =>{
     return{
        type: ADD_TRACK,
        payload: text
    }
}

export const loadData = () => (dispatch, getState) =>{
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => 
        dispatch(getData(json))
      );
}

export const getData = (getData) => {
  return{
    type: GET_DATA,
    payload: getData
  }
}


export const clearData = () => {
  return {
    type: CLEAR_DATA,
    payload: ''
  }
}


export const sagaPutData = (data) =>{
  return {
    type: SAGA_PUT_DATA,
    payload: data
  }
}
export const sagaGetData = () =>{
  return{
    type: SAGA_GET_DATA,
    
  }
}
