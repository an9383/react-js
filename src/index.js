/* eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom/client';  //패키지 이름
//import './index.css';
import App from './App';  //App컴포넌트에서 가져와줘
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  //index.html에서 사용.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
