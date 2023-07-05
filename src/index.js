import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CardInfo from './component/CardInfo';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <React.StrictMode>
  <BrowserRouter>

   <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/cart/:index' element={<CardInfo/>}></Route>
   </Routes>
    
  </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
