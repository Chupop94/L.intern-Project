import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { Footer } from '../views/Main';

const Root = () => {
    return (
        <BrowserRouter>
            <App/>
            {
        (window.sessionStorage.getItem('member') != null)
        ? 
        <Footer></Footer>
        : null
        }
        </BrowserRouter>
    );
};

export default Root;