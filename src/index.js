import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {WrapperComponent} from './components/wrapperComponent';
import {store} from './store/store/store';


const stor = store;



stor.subscribe(()=>{console.log(store.getState())})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={stor}>
      <WrapperComponent /> 
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
