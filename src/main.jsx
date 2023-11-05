import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShowNotifProvider from './hooks/UseSetMessage.jsx';
import './Styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShowNotifProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShowNotifProvider>
  </React.StrictMode>,
)
