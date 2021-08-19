import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/jsx/app'
import { BrowserRouter } from 'react-router-dom';
import './pages/css/styles.css';

ReactDOM.render( <>
    <BrowserRouter >
    <App />
    </BrowserRouter>  </> , document.getElementById('root')
)