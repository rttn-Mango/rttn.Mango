import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShowNavProvider from './hooks/UseShowNav.jsx';
import './Styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShowNavProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShowNavProvider>
  </React.StrictMode>,
)
