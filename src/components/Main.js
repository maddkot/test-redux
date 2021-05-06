import React from 'react';

export function Main(props) {

    const {addTrack} = props;

    const [dataSong, setDataSong] = React.useState('');
    function handlChange(event){
        setDataSong(event.target.value)
   
    }

  function seeHandlChange(){
      addTrack(dataSong);
      setDataSong('');  
       
  }
  
    return(
        <div>
        <h3>SoundList</h3>
          <input
            type='text'
            placeholder='Enter you text'
            value={dataSong}
            onChange={handlChange}
          ></input>
          <button 
            onClick={seeHandlChange}>
                Add text
          </button>

      </div>
    )
}