import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter} from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop.jsx';
import ThemeContextProvider from './context/ThemeContext.jsx';
import './Styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <BrowserRouter>
        <ScrollToTop/>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
