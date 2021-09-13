import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/jsx/app'
import { BrowserRouter } from 'react-router-dom';
import './pages/css/styles.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://server-express-portfolio.herokuapp.com/';
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
ReactDOM.render( <>
    <BrowserRouter >
    <App />
    </BrowserRouter>  </> , document.getElementById('root')
)