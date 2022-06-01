import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {CartContextProvider} from './store/CartContextProvider'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwfq8IhqSf1XBekwkrt_JH6xP53ILltRY",
  authDomain: "cineale-samardich.firebaseapp.com",
  projectId: "cineale-samardich",
  storageBucket: "cineale-samardich.appspot.com",
  messagingSenderId: "654713132747",
  appId: "1:654713132747:web:9ec6910551d55272f0ad4e"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
