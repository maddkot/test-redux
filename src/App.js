
import './App.css';
import React from 'react'
import {Main} from './components/Main';
import SongList from './components/SongList';
import FetchData from './components/FetchData';
import Sagas from './components/Sagas';

function App(props) {
 const {firstText, secondText, changeFirstText, changeSecondText, addTrack} = props;
  return (
    <div className="App">
      <input 
        type='text' 
        value={firstText} 
        placeholder="First"
        onChange={
          (event)=>{changeFirstText(event.target.value)}
        }>          
      </input>

      <input 
        type='text' 
        value={secondText} 
        placeholder='Second'
        onChange={
          (event)=>{changeSecondText(event.target.value)
          }
        }>
      </input>
      
      <div 
        className="App__text">
          {`${firstText} ${secondText}`}
      </div>
   
      <Main 
        addTrack={addTrack} 
        {...props}
        />
      <SongList {...props}/>

      <FetchData /> 
      <Sagas />     

    </div>
  );
}

export default App;
