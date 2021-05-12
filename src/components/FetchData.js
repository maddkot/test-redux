import {useDispatch, useSelector} from 'react-redux';
import {loadData, clearData} from '../store/actions/actions';

export default function LoadData() {
    const state = useSelector((state) => {return state});
    const dispatch = useDispatch();
    const onClick = () => dispatch(loadData())
    
     
    
    const apiData = state.reducerGetData.data.title;
   
    
    const clear = () => dispatch(clearData())
   

    return(
        <div>
            <button onClick={onClick}>Get data</button>
            <button onClick={clear}>Clear</button>
            <div>
            {apiData}           
            </div>
        </div>
    )
}