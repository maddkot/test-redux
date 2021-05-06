export default function SongList(props){
    const {textSong} = props;
    
    
    return(
        <div className="App__text App__border">
            {textSong.map((songs,i)=>(<p key={i}>{songs}</p>))}
        </div>
    )
}