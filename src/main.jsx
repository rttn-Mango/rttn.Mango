import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter} from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop.jsx';
import './Styles/index.css';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
      <Analytics/>
    </BrowserRouter>
  </React.StrictMode>,
)
