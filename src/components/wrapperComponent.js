import App from '../App';
import {changeFirstText, changeSecondText, addTrack} from '../store/actions/actions'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const maptoStateProps = state => {
    return {
      textSong: state.secondReducer,
      firstText: state.firstReducer.firstText,
      secondText: state.firstReducer.secondText
    }
  }
  const mapActionToProps = (dispatch) =>{
    return{
      changeFirstText: bindActionCreators(changeFirstText, dispatch),
      changeSecondText: bindActionCreators(changeSecondText,dispatch),
      addTrack: bindActionCreators(addTrack, dispatch)
    }
  }
  
  export const WrapperComponent = connect(maptoStateProps,mapActionToProps)(App)