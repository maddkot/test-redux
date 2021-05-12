import {useDispatch, useSelector} from 'react-redux'
import {sagaGetData} from '../store/actions/actions';

export default function Sagas(){

 const dispatch = useDispatch()
 const onClick = () => {
     dispatch(sagaGetData())
 }
 const data = useSelector(state => state);
 const {id} = data.sagaReducer.data
 
   

    return(
        < >
        <h4 style={{
            marginTop: 40,
            marginBottom: 30
        }}>Test Saga</h4>
        <button onClick={onClick}>Click me</button>
        <p style={{marginTop: 60, color: 'green'}}>{id}</p>
        </>
    )
}