import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Todo}  from './component';
import './style.css'

const App = () => {
    return (
        <div className="app">
            < Todo />
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);