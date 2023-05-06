import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name = "Ayaz" age = {18}/>
    <App name = "Nouman" age = {16}/>
    <App name = "Araib" age = {14}/>
  </React.StrictMode>
);