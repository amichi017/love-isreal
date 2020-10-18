import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Component/Menu';
import Slideshow from './Component/Slideshow';
import * as serviceWorker from './serviceWorker';

export default function App() {
    return (
        <div>
             <Menu/>
            <Slideshow />
        </div>
);

}

