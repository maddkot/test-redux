export const CHANGE_FIRST_TEXT = 'CHANGE_FIRST_NAME';
export const CHANGE_SECOND_TEXT = 'CHANGE_SECOND_NAME';
export const ADD_TRACK = 'ADD_TRACK';

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
